import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Github, LockKeyhole, PackageCheck, Server } from "lucide-react";
import { SiteFooter, SiteHeader } from "./brand";
import type { SiteConfig } from "./types";

export function LandingPage({ config }: { config: SiteConfig }) {
  return (
    <div className="mp-site">
      <SiteHeader productName={config.productName} githubHref={config.githubHref} />
      <main>
        <section className="mp-hero">
          <div className="mp-hero-orb mp-hero-orb-one" />
          <div className="mp-hero-orb mp-hero-orb-two" />
          <div className="mp-container mp-hero-grid">
            <div className="mp-hero-copy">
              <span className="mp-kicker"><i />{config.eyebrow}</span>
              <h1>{config.heroTitle}</h1>
              <p className="mp-hero-description">{config.heroDescription}</p>
              <ul className="mp-hero-points">
                {config.heroPoints.map((point) => <li key={point}><Check size={16} />{point}</li>)}
              </ul>
              <div className="mp-actions">
                <Link className="mp-button mp-button-primary" href={config.docsHref}>Read the docs <ArrowRight size={17} /></Link>
                <a className="mp-button mp-button-secondary" href={config.githubHref} target="_blank" rel="noreferrer"><Github size={17} />View on GitHub</a>
              </div>
              <p className="mp-open-source"><LockKeyhole size={15} />No hosted account. No custody. Your server, your data.</p>
            </div>
            <HeroConsole config={config} />
          </div>
        </section>

        <section className="mp-metrics" aria-label="Product facts">
          <div className="mp-container mp-metrics-grid">
            {config.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
          </div>
        </section>

        <section className="mp-section" id="features">
          <div className="mp-container">
            <SectionHeading eyebrow="Built for serious operators" title="Everything lives inside BTCPay Server" description={config.description} />
            <div className="mp-feature-grid">
              {config.features.map(({ icon: Icon, title, description }) => (
                <article className="mp-feature-card" key={title}>
                  <span className="mp-icon"><Icon size={21} /></span>
                  <h3>{title}</h3><p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mp-section mp-section-alt">
          <div className="mp-container">
            <SectionHeading eyebrow="From install to revenue" title="A workflow your team can own" description="Install the plugin, shape the public experience, and let BTCPay handle the payment lifecycle on infrastructure you control." />
            <div className="mp-workflow">
              {config.workflow.map((step) => <article key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="mp-section">
          <div className="mp-container">
            <SectionHeading eyebrow="Product experience" title="Professional public pages. Practical admin tools." description="A consistent MakePay design across the public storefront, checkout journey, and BTCPay administration." />
            <div className="mp-screenshot-grid">
              {config.screenshots.map((shot, index) => (
                <figure className={index === 0 ? "mp-shot mp-shot-wide" : "mp-shot"} key={shot.src}>
                  <div className="mp-browser-bar"><span /><span /><span /><em>{config.domain}</em></div>
                  <Image src={shot.src} alt={shot.alt} width={1600} height={1000} sizes={index === 0 ? "(max-width: 900px) 100vw, 1100px" : "(max-width: 900px) 100vw, 540px"} />
                  <figcaption><strong>{shot.title}</strong><span>{shot.caption}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="mp-section mp-security-section" id="security">
          <div className="mp-container mp-security-grid">
            <div>
              <span className="mp-kicker"><i />Security by architecture</span>
              <h2>Payments and customer data remain under your control.</h2>
              <p>MakePay plugins extend the BTCPay Server security boundary. Sensitive operations stay server-side and public flows receive only the minimum data they require.</p>
              <div className="mp-use-cases">{config.useCases.map((item) => <span key={item}><Check size={14} />{item}</span>)}</div>
            </div>
            <div className="mp-security-cards">
              {config.security.map(({ icon: Icon, title, description }) => <article key={title}><Icon size={22} /><div><h3>{title}</h3><p>{description}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="mp-section">
          <div className="mp-container mp-install-card">
            <div>
              <span className="mp-kicker"><i />Open-source installation</span>
              <h2>Launch on your BTCPay Server.</h2>
              <p>Install from the BTCPay plugin builder or use a signed release from GitHub. Configuration and upgrades stay in your hands.</p>
            </div>
            <div className="mp-command"><span>$</span><code>{config.installCommand}</code><PackageCheck size={20} /></div>
            <div className="mp-actions">
              <a className="mp-button mp-button-primary" href={config.pluginBuilderHref} target="_blank" rel="noreferrer">Open plugin builder <ArrowRight size={17} /></a>
              <Link className="mp-button mp-button-secondary" href="/docs/installation">Installation guide</Link>
            </div>
          </div>
        </section>

        <section className="mp-cta">
          <div className="mp-container mp-cta-inner">
            <Server size={30} />
            <div><h2>Turn your BTCPay Server into a complete commerce platform.</h2><p>Start with the installation guide and keep every part of the experience self-hosted.</p></div>
            <Link className="mp-button mp-button-light" href="/docs">Explore documentation <ArrowRight size={17} /></Link>
          </div>
        </section>
      </main>
      <SiteFooter productName={config.productName} githubHref={config.githubHref} />
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="mp-section-heading"><span className="mp-kicker"><i />{eyebrow}</span><h2>{title}</h2><p>{description}</p></div>;
}

function HeroConsole({ config }: { config: SiteConfig }) {
  return (
    <div className="mp-console" aria-label={`${config.productName} administration preview`}>
      <div className="mp-console-top"><div><span /><span /><span /></div><em>BTCPay Server</em><small>● Live</small></div>
      <div className="mp-console-body">
        <aside><b>BTCPAY</b><span>Dashboard</span><span>Invoices</span><span className="active">{config.shortName}</span><span>Settings</span></aside>
        <div className="mp-console-content">
          <div className="mp-console-heading"><div><small>MAKEPAY PLUGIN</small><h2>{config.productName}</h2></div><button>+ Create</button></div>
          <div className="mp-console-stats"><div><span>Published</span><strong>12</strong></div><div><span>Orders</span><strong>184</strong></div><div><span>Delivered</span><strong>100%</strong></div></div>
          <div className="mp-console-table"><div className="head"><span>NAME</span><span>STATUS</span><span>ACTIVITY</span></div>{["MakePay launch", "Community edition", "Builder summit"].map((row, index) => <div key={row}><span><b>{row}</b><small>Self-hosted commerce</small></span><span><i /> Published</span><span>{["84 orders", "62 orders", "38 orders"][index]}</span></div>)}</div>
        </div>
      </div>
    </div>
  );
}
