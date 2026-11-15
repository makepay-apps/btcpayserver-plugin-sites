#!/bin/sh
set -eu

cd "$(dirname "$0")/.."
test "$(node -p "require('./package.json').name")" = "btcpayserver-plugin-sites"
node --version
test "$(npx --yes --ignore-scripts --package=npm@11.21.2 npm --version)" = "11.21.2"
npx --yes --ignore-scripts --package=npm@11.21.2 npm ci --include=dev --ignore-scripts --no-audit --no-fund
