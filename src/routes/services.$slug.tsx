import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer } from "@/components/site-chrome";

type Keyword = {
  slug: string;
  title: string;
  h1: string;
  intent: string;
  intro: string;
  bullets: string[];
  faqs: { q: string; a: string }[];
  related: { slug: string; label: string }[];
};

const KEYWORDS: Record<string, Keyword> = {
  "seo-services-india": {
    slug: "seo-services-india",
    title: "SEO Services in India — Rank #1 on Google | DrishtiSEO",
    h1: "SEO Services in India that actually move rankings.",
    intent: "Best SEO Services India",
    intro: "Looking for SEO services in India that go beyond keyword stuffing and shady link farms? DrishtiSEO is a Bengaluru-based SEO agency helping Indian SaaS, D2C and tech brands climb to page 1 of Google through technical SEO, content velocity, and authority link building.",
    bullets: [
      "Technical SEO audits with Ahrefs, SEMrush, Screaming Frog",
      "On-page optimisation for Indian + global keywords",
      "Schema markup, internal linking, Core Web Vitals",
      "White-hat link building (no PBNs, no spam)",
      "Monthly ranking reports + Loom walkthroughs",
      "Pricing from ₹25,000/month — no long contracts",
    ],
    faqs: [
      { q: "How much do SEO services cost in India?", a: "At DrishtiSEO, SEO retainers start at ₹25,000/month for early-stage startups and scale to ₹95,000/month for serious growth plans. One-off audits start at ₹15,000." },
      { q: "How long does SEO take to show results in India?", a: "Most of our clients see meaningful keyword movement within 60–90 days, with significant traffic lift around month 4–6. SEO is compounding, not instant." },
      { q: "Do you guarantee #1 rankings?", a: "No reputable SEO agency can. We guarantee process, transparency, and measurable improvement — not specific ranking positions, because Google's algorithm is not in our control." },
    ],
    related: [
      { slug: "ai-saas-development", label: "AI SaaS Development" },
      { slug: "digital-marketing-bengaluru", label: "Digital Marketing Bengaluru" },
      { slug: "seo-for-saas-startups", label: "SEO for SaaS Startups" },
    ],
  },
  "ai-saas-development": {
    slug: "ai-saas-development",
    title: "AI Micro-SaaS Development Services | DrishtiSEO",
    h1: "Ship your AI micro-SaaS in 6 weeks.",
    intent: "AI Micro-SaaS Development",
    intro: "We design, build and launch AI-powered micro-SaaS products for founders, agencies and indie hackers. Stack: FastAPI + Next.js + OpenAI/Claude + Stripe. From idea to first paying customer in under 60 days.",
    bullets: [
      "Custom GPT-4 / Claude / open-source LLM integrations",
      "FastAPI backend + Next.js or React frontend",
      "Stripe subscriptions + auth + admin dashboards",
      "Cloud deployment on Cloudflare, Vercel or AWS",
      "Pricing from ₹40,000 (MVP) to ₹3,00,000 (full product)",
      "Post-launch support and SEO included",
    ],
    faqs: [
      { q: "What is a micro-SaaS?", a: "A micro-SaaS is a small, focused software product solving one specific problem — typically built and run by a tiny team or solo founder, with low overhead and recurring revenue." },
      { q: "How much does AI SaaS development cost?", a: "MVPs start at ₹40,000. A polished, production-ready AI SaaS with auth, payments, and dashboards runs ₹1.5L–₹3L depending on scope." },
      { q: "Do I own the code?", a: "Yes. 100%. You get the full GitHub repo, deployment access, and IP transfer the day we ship." },
    ],
    related: [
      { slug: "seo-services-india", label: "SEO Services India" },
      { slug: "fastapi-development-services", label: "FastAPI Development" },
      { slug: "openai-integration-services", label: "OpenAI Integration" },
    ],
  },
  "digital-marketing-bengaluru": {
    slug: "digital-marketing-bengaluru",
    title: "Digital Marketing Agency in Bengaluru | DrishtiSEO",
    h1: "Bengaluru's growth studio for tech brands.",
    intent: "Digital Marketing Agency Bengaluru",
    intro: "DrishtiSEO is a Bengaluru-based digital marketing agency specialising in SEO, performance ads, and content for tech and SaaS brands. We pair technical execution with creative storytelling — and we ship faster than agencies 5x our size.",
    bullets: [
      "Google Ads + Meta Ads management",
      "Landing page CRO + A/B testing",
      "SEO + content marketing retainers",
      "Reels and YouTube Shorts production",
      "Analytics dashboards (GA4, PostHog)",
      "Based in HSR Layout, serving clients globally",
    ],
    faqs: [
      { q: "Do you work with non-tech brands?", a: "We focus on tech, SaaS, AI, and developer-facing brands because that's where our team has real depth. We occasionally take on D2C clients with strong product-market fit." },
      { q: "What's your minimum engagement?", a: "3 months. SEO and paid ads need at least one full quarter to show a meaningful trend." },
    ],
    related: [
      { slug: "seo-services-india", label: "SEO Services India" },
      { slug: "google-ads-management-india", label: "Google Ads Management" },
      { slug: "content-marketing-saas", label: "Content Marketing for SaaS" },
    ],
  },
  "seo-for-saas-startups": {
    slug: "seo-for-saas-startups",
    title: "SEO for SaaS Startups — Programmatic Growth | DrishtiSEO",
    h1: "SEO for SaaS startups, by SaaS founders.",
    intent: "SEO for SaaS Startups",
    intro: "Most SEO agencies don't understand SaaS. We do — we've built and ranked our own micro-SaaS tools. We help SaaS founders rank for high-intent buyer keywords, build comparison pages that convert, and execute programmatic SEO at scale.",
    bullets: [
      "Buyer-intent keyword research",
      "Comparison & alternative pages",
      "Programmatic SEO (1000+ pages)",
      "Free tool / calculator strategy",
      "Backlinks from SaaS publications",
      "Conversion-focused content",
    ],
    faqs: [
      { q: "Do you work with pre-revenue startups?", a: "Yes, but we recommend starting with a one-off audit (₹15k) before committing to a retainer. We'll tell you honestly if SEO is the right channel for your stage." },
      { q: "Can you do programmatic SEO?", a: "Absolutely. We've launched 10k-page programmatic sites built on Next.js + a headless CMS, ranking thousands of long-tail keywords." },
    ],
    related: [
      { slug: "seo-services-india", label: "SEO Services India" },
      { slug: "ai-saas-development", label: "AI SaaS Development" },
      { slug: "content-marketing-saas", label: "SaaS Content Marketing" },
    ],
  },
  "fastapi-development-services": {
    slug: "fastapi-development-services",
    title: "FastAPI Development Services in India | DrishtiSEO",
    h1: "FastAPI development for AI products.",
    intent: "FastAPI Development Services",
    intro: "Need a fast, async, production-ready Python backend? We build FastAPI services for AI-powered SaaS products — from LLM orchestration to vector search to webhook pipelines. Used by 30+ shipped products.",
    bullets: [
      "FastAPI + SQLAlchemy + Alembic stack",
      "LLM orchestration (LangChain, LlamaIndex)",
      "Vector databases (Pinecone, Qdrant, pgvector)",
      "Background workers with Celery / Arq",
      "OpenAPI docs auto-generated",
      "Dockerised, cloud-deployable",
    ],
    faqs: [
      { q: "Why FastAPI and not Django or Flask?", a: "FastAPI is async-first, type-safe, and 3–5x faster than Flask for API workloads. Perfect for AI products where every millisecond of LLM latency matters." },
    ],
    related: [
      { slug: "ai-saas-development", label: "AI SaaS Development" },
      { slug: "openai-integration-services", label: "OpenAI Integration" },
    ],
  },
  "openai-integration-services": {
    slug: "openai-integration-services",
    title: "OpenAI & Claude Integration Services | DrishtiSEO",
    h1: "Ship AI features without burning your budget.",
    intent: "OpenAI Integration Services",
    intro: "We integrate GPT-4, Claude, Gemini, and open-source LLMs into your existing product or build new AI-native features from scratch. Streaming responses, prompt caching, evals, and cost monitoring included.",
    bullets: [
      "GPT-4 / Claude / Gemini integration",
      "Streaming + function calling",
      "Prompt engineering + evals",
      "RAG (retrieval-augmented generation)",
      "Cost monitoring + caching",
      "Open-source fallback (Llama, Mistral)",
    ],
    faqs: [
      { q: "Will my OpenAI bills explode?", a: "Not if it's done right. We implement caching, prompt compression, and model routing (cheap models for simple tasks) to keep costs under control. Most clients see 60–80% cost reduction vs naïve implementations." },
    ],
    related: [
      { slug: "ai-saas-development", label: "AI SaaS Development" },
      { slug: "fastapi-development-services", label: "FastAPI Development" },
    ],
  },
  "google-ads-management-india": {
    slug: "google-ads-management-india",
    title: "Google Ads Management Services India | DrishtiSEO",
    h1: "Google Ads that actually pay back.",
    intent: "Google Ads Management India",
    intro: "We manage Google Ads campaigns for Indian SaaS, D2C and B2B brands — focusing on profitable keywords, tight ad groups, and landing pages that convert. No vanity clicks. Real ROAS.",
    bullets: [
      "Search, Display, Performance Max",
      "Conversion tracking setup (GA4)",
      "Landing page CRO included",
      "Negative keyword hygiene",
      "Weekly optimisation cycles",
      "From ₹15k/month + ad spend",
    ],
    faqs: [
      { q: "What's a good ROAS to expect?", a: "Depends on margin and product. Our SaaS clients average 3–5x ROAS within 90 days; D2C clients typically 2.5–4x once we've optimised the funnel." },
    ],
    related: [
      { slug: "digital-marketing-bengaluru", label: "Digital Marketing Bengaluru" },
      { slug: "seo-services-india", label: "SEO Services India" },
    ],
  },
  "content-marketing-saas": {
    slug: "content-marketing-saas",
    title: "Content Marketing for SaaS Companies | DrishtiSEO",
    h1: "Content that ranks, converts, and compounds.",
    intent: "Content Marketing for SaaS",
    intro: "We write SaaS content that ranks on Google and converts readers into customers. Topic clusters, comparison posts, expert interviews, and product-led content — all backed by keyword research and SEO best practices.",
    bullets: [
      "Topic cluster strategy",
      "Long-form pillar pages (3000+ words)",
      "Comparison & alternative posts",
      "Expert interviews + case studies",
      "Editorial calendar management",
      "From ₹20k/month for 4 posts",
    ],
    faqs: [
      { q: "Do you use AI to write?", a: "We use AI as a research and outline assistant, but every published post is written, edited, and fact-checked by a human writer with domain expertise. Pure AI content underperforms in 2026." },
    ],
    related: [
      { slug: "seo-for-saas-startups", label: "SEO for SaaS" },
      { slug: "seo-services-india", label: "SEO Services India" },
    ],
  },
};

export const KEYWORD_SLUGS = Object.keys(KEYWORDS);

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const data = KEYWORDS[params.slug];
    if (!data) throw new Error("Not found");
    return { data };
  },
  head: ({ params, loaderData }) => {
    const d = loaderData?.data;
    if (!d) return { meta: [{ title: "Service | DrishtiSEO" }] };
    return {
      meta: [
        { title: d.title },
        { name: "description", content: d.intro.slice(0, 158) },
        { property: "og:title", content: d.h1 },
        { property: "og:description", content: d.intro.slice(0, 158) },
        { property: "og:url", content: `/services/${params.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: d.intent,
            provider: { "@type": "Organization", name: "DrishtiSEO" },
            areaServed: { "@type": "Country", name: "India" },
            description: d.intro,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: d.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
              { "@type": "ListItem", position: 3, name: d.intent, item: `/services/${params.slug}` },
            ],
          }),
        },
      ],
    };
  },
  component: KeywordPage,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl font-bold mb-4">Service not found</h1>
        <Link to="/services" className="text-primary hover:underline">View all services →</Link>
      </div>
      <Footer />
    </div>
  ),
});

function KeywordPage() {
  const { data } = Route.useLoaderData() as { data: Keyword };
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-hero pt-16 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm text-muted-foreground mb-6 flex gap-2 flex-wrap">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-primary">Services</Link>
            <span>/</span>
            <span className="text-foreground">{data.intent}</span>
          </nav>
          <p className="text-primary text-sm uppercase tracking-widest mb-3">{data.intent}</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">{data.h1}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">{data.intro}</p>
          <div className="flex gap-4 mt-8">
            <Link to="/contact" className="px-6 py-3 rounded-full bg-mint-gradient text-primary-foreground font-semibold shadow-glow hover:scale-105 transition">Get a quote</Link>
            <Link to="/pricing" className="px-6 py-3 rounded-full border border-border hover:border-primary font-semibold transition">View pricing</Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">What's included</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {data.bullets.map((b) => (
            <div key={b} className="flex gap-3 p-5 rounded-2xl bg-card-gradient border border-border">
              <span className="text-primary text-xl shrink-0">✓</span>
              <span className="text-muted-foreground">{b}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Frequently asked questions</h2>
        <div className="space-y-3">
          {data.faqs.map((f) => (
            <details key={f.q} className="group p-6 rounded-2xl bg-card-gradient border border-border hover:border-primary/40 transition">
              <summary className="cursor-pointer font-semibold flex justify-between items-center list-none">
                {f.q}
                <span className="text-primary group-open:rotate-45 transition">+</span>
              </summary>
              <p className="text-muted-foreground mt-3 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Related services</h2>
        <div className="flex flex-wrap gap-3">
          {data.related.map((r) => (
            <Link key={r.slug} to="/services/$slug" params={{ slug: r.slug }} className="px-5 py-2.5 rounded-full border border-border bg-card/50 hover:border-primary hover:text-primary text-sm transition">
              {r.label} →
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="rounded-3xl bg-card-gradient border border-primary/30 p-10 md:p-14 text-center shadow-glow">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started with <span className="text-gradient">{data.intent}?</span></h2>
          <p className="text-muted-foreground mb-6">Free 30-minute call. We'll audit your current setup and tell you exactly what to fix.</p>
          <Link to="/contact" className="inline-block px-8 py-4 rounded-full bg-mint-gradient text-primary-foreground font-semibold shadow-glow hover:scale-105 transition">Book free call →</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
