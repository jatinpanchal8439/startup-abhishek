import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DrishtiSEO — SEO + AI Growth Studio for Tech Brands" },
      { name: "description", content: "Rank #1 on Google with SEO, AI micro-SaaS, viral content, and premium dev templates. India's growth studio for ambitious founders." },
      { property: "og:title", content: "DrishtiSEO — SEO + AI Growth Studio" },
      { property: "og:description", content: "SEO services, AI tools, content & dev assets that help tech brands grow." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "DrishtiSEO",
          url: "/",
          potentialAction: {
            "@type": "SearchAction",
            target: "/services?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "DrishtiSEO",
          description: "SEO + AI growth studio for tech brands in India.",
          founder: { "@type": "Person", name: "Abhishek Sharma" },
          address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
          priceRange: "₹₹",
          areaServed: "Worldwide",
        }),
      },
    ],
  }),
  component: Index,
});

const services = [
  { icon: "🚀", title: "SEO & Ranking", desc: "Climb to page 1. Technical SEO, on-page, link building, Core Web Vitals.", price: "from ₹25k/mo" },
  { icon: "🤖", title: "AI Micro-SaaS Builds", desc: "Custom FastAPI + GPT tools. Content generators, dashboards, AI processors.", price: "from ₹40k" },
  { icon: "🎬", title: "Tech Content & Reels", desc: "Viral Reels, Shorts and newsletters around AI/ML and vibe coding.", price: "from ₹20k/mo" },
  { icon: "💎", title: "Premium Dev Templates", desc: "Tailwind UI kits, full-stack clones and blog templates that sell.", price: "from ₹4,999" },
  { icon: "📈", title: "Digital Marketing", desc: "Google Ads, Meta Ads, retargeting, conversion-rate optimisation.", price: "from ₹20k/mo" },
  { icon: "⚡", title: "Speed & CWV Audit", desc: "Make your site load in <1.5s. Tech audit + implementation.", price: "from ₹15k" },
];

const stats = [
  { v: "320%", l: "Avg organic traffic lift" },
  { v: "<1.5s", l: "Target page load" },
  { v: "47+", l: "Brands ranked #1" },
  { v: "12M+", l: "Reels views generated" },
];

const process = [
  { n: "01", t: "Audit", d: "Deep technical + content audit. Keyword gap analysis using Ahrefs & SEMrush." },
  { n: "02", t: "Strategy", d: "Custom growth blueprint — SEO, content calendar, AI tooling roadmap." },
  { n: "03", t: "Execute", d: "We ship. Fast. Code, content, links, ads — all in-house." },
  { n: "04", t: "Scale", d: "Monthly reports, A/B tests, compounding rankings month over month." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative bg-hero overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/3 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-xs text-primary mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary glow-dot" />
              Now booking Q2 — 3 slots left
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
              Rank <span className="text-gradient">#1.</span><br />
              Build with AI.<br />
              Grow louder.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              DrishtiSEO is an SEO + AI growth studio for tech founders. We rank your site, ship your micro-SaaS, blow up your Reels, and sell your dev templates — all under one roof.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-7 py-4 rounded-full bg-mint-gradient text-primary-foreground font-semibold shadow-glow hover:scale-105 transition">
                Get free SEO audit
              </Link>
              <Link to="/services" className="px-7 py-4 rounded-full border border-border bg-card/50 backdrop-blur hover:bg-card transition font-semibold">
                Explore services →
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 pt-12 border-t border-border/50">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="text-3xl md:text-4xl font-bold text-gradient font-display">{s.v}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-primary text-sm uppercase tracking-widest mb-2">What we ship</p>
            <h2 className="text-4xl md:text-5xl font-bold max-w-2xl">Five revenue engines. One studio.</h2>
          </div>
          <Link to="/services" className="text-primary hover:underline">View all services →</Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className="group relative p-7 rounded-2xl bg-card-gradient border border-border hover:border-primary/50 transition-all hover:-translate-y-1 shadow-card-soft">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <span className="text-primary text-sm font-semibold">{s.price}</span>
                <span className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-widest mb-2">How we work</p>
          <h2 className="text-4xl md:text-5xl font-bold">From keyword to king of SERP.</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {process.map((p) => (
            <div key={p.n} className="p-6 rounded-2xl bg-card-gradient border border-border">
              <div className="text-primary font-display text-3xl font-bold mb-3">{p.n}</div>
              <h3 className="font-bold text-lg mb-2">{p.t}</h3>
              <p className="text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="relative rounded-3xl bg-card-gradient border border-primary/30 p-12 md:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 blur-3xl rounded-full" />
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Ready to <span className="text-gradient">outrank</span> your competition?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">Book a 30-minute strategy call. We'll audit your site live and hand you a 90-day growth plan.</p>
            <Link to="/contact" className="inline-block px-8 py-4 rounded-full bg-mint-gradient text-primary-foreground font-semibold shadow-glow hover:scale-105 transition">
              Book free strategy call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
