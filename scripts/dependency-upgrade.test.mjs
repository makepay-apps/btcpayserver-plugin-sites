import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import test from "node:test";

const require = createRequire(import.meta.url);
const estreeEntry = require.resolve("@typescript-eslint/typescript-estree");
const estreeRequire = createRequire(estreeEntry);
const { minimatch } = estreeRequire("minimatch");
const { useProgramFromProjectService } = estreeRequire(
  join(dirname(estreeEntry), "useProgramFromProjectService.js"),
);

test("the scoped matcher retains ESTree's CommonJS and dot-path contract", () => {
  assert.equal(typeof minimatch, "function");
  for (const [file, pattern, expected] of [
    ["src/nested/file.ts", "src/**/*.ts", true],
    ["src/.cache/file.ts", "src/**/*.ts", true],
    ["src/file.tsx", "src/*.{ts,tsx}", true],
    ["src/file.js", "src/*.{ts,tsx}", false],
    ["src/generated/file.ts", "!src/generated/**", false],
    ["src/custom/file.ts", "!src/generated/**", true],
  ]) {
    assert.equal(minimatch(file, pattern, { dot: true }), expected, `${file}: ${pattern}`);
  }
});

test("ESTree's actual project-service caller preserves allowDefaultProject decisions", (t) => {
  const root = mkdtempSync(join(tmpdir(), "sites-estree-project-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));

  for (const [file, pattern, expected] of [
    [".config.ts", "*.ts", true],
    ["config.tsx", "*.{ts,tsx}", true],
    ["config.js", "*.{ts,tsx}", false],
    ["skip.ts", "!skip.ts", false],
    ["keep.ts", "!skip.ts", true],
  ]) {
    const matched = new Set();
    const stop = new Error("fixture: project was allowed");
    const settings = {
      allowDefaultProject: [pattern],
      lastReloadTimestamp: 0,
      maximumDefaultProjectFileMatchCount: 8,
      service: {
        host: { getCurrentDirectory: () => root },
        configuredProjects: new Map(),
        openClientFile: () => ({}),
        getScriptInfo: () => { throw stop; },
      },
    };
    const parseSettings = {
      filePath: resolve(root, file),
      tsconfigRootDir: root,
      extraFileExtensions: [],
      codeFullText: "const value: number = 1;",
      singleRun: true,
      projectService: { allowDefaultProject: [pattern] },
    };

    assert.throws(
      () => useProgramFromProjectService(settings, parseSettings, true, matched),
      expected ? (error) => error === stop : /not found by the project service/,
    );
    assert.equal(matched.has(resolve(root, file)), expected, `${file}: ${pattern}`);
  }
});

test("gray-matter retains its YAML 3 parsing behavior", () => {
  const matterPath = require.resolve("gray-matter");
  const matterRequire = createRequire(matterPath);
  const matter = require("gray-matter");
  const yamlPackage = JSON.parse(readFileSync(matterRequire.resolve("js-yaml/package.json"), "utf8"));
  assert.equal(yamlPackage.version.split(".")[0], "3");

  const parsed = matter("---\ntitle: 'Order: delivery'\norder: 12\nenabled: true\naliases: [guide, setup]\n---\n## Documentation\n");
  assert.deepEqual(parsed.data, {
    title: "Order: delivery",
    order: 12,
    enabled: true,
    aliases: ["guide", "setup"],
  });
  assert.equal(parsed.content, "## Documentation\n");
});
