import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer } from "@/components/site-chrome";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — SEO, AI SaaS, Content & Dev Templates | Rankforge" },
      { name: "description", content: "Full-stack growth services: SEO ranking, AI micro-SaaS, viral tech content, premium dev templates, and digital marketing for tech brands." },
      { property: "og:title", content: "Services | Rankforge" },
      { property: "og:description", content: "SEO, AI SaaS, content creation, dev templates, and digital marketing." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const offerings = [
  {
    icon: "🚀", title: "SEO & Search Ranking",
    tag: "Most popular",
    desc: "End-to-end search engine optimisation for tech and SaaS brands.",
    bullets: ["Technical SEO audit & fixes", "Keyword research with Ahrefs/SEMrush", "On-page optimisation", "Authority link building", "Core Web Vitals tuning", "Monthly ranking reports"],
    price: "₹25,000 – ₹75,000 / month",
  },
  {
    icon: "🤖", title: "AI-Powered Micro-SaaS",
    desc: "We design, build and ship focused SaaS tools powered by GPT, Claude or open-source LLMs.",
    bullets: ["FastAPI + Next.js stack", "OpenAI / Anthropic integration", "Stripe subscriptions", "Custom dashboards", "Cloud deployment", "Post-launch support"],
    price: "₹40,000 – ₹3,00,000 / project",
  },
  {
    icon: "🎬", title: "Tech Content & Vibe Coding Media",
    desc: "Build a developer audience that compounds into revenue.",
    bullets: ["Instagram Reels & YT Shorts", "AI/ML learning roadmaps", "Newsletter strategy", "Brand sponsorship deals", "Course launch support", "Editing + thumbnails"],
    price: "₹20,000 – ₹60,000 / month",
  },
  {
    icon: "💎", title: "Premium Developer Assets",
    desc: "Sellable Tailwind UI kits, full-stack clones and blog templates.",
    bullets: ["Custom UI component libraries", "E-commerce starter clones", "Blog & portfolio templates", "Gumroad/ThemeForest listing", "Sales page copy", "Marketing launch"],
    price: "₹4,999 – ₹49,999 / asset",
  },
  {
    icon: "📈", title: "Niche Digital Marketing",
    desc: "Performance marketing that pairs with SEO for compounding growth.",
    bullets: ["Google Ads management", "Meta Ads (FB + IG)", "Retargeting funnels", "Landing page CRO", "Analytics dashboards", "Monthly retainer model"],
    price: "₹15,000 – ₹50,000 / month",
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-hero pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-primary text-sm uppercase tracking-widest mb-3">Services</p>
          <h1 className="text-5xl md:text-7xl font-bold max-w-4xl">Everything you need to <span className="text-gradient">rank, ship and scale.</span></h1>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl">Five integrated services. Pick one or stack them — they compound.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 space-y-6">
        {offerings.map((o, i) => (
          <div key={o.title} className="grid md:grid-cols-[1fr_2fr] gap-8 p-8 md:p-10 rounded-3xl bg-card-gradient border border-border hover:border-primary/40 transition-all">
            <div>
              <div className="text-5xl mb-4">{o.icon}</div>
              <p className="text-xs text-muted-foreground mb-2">0{i + 1} {o.tag && <span className="ml-2 px-2 py-0.5 rounded-full bg-primary/10 text-primary">{o.tag}</span>}</p>
              <h2 className="text-3xl font-bold mb-3">{o.title}</h2>
              <p className="text-muted-foreground mb-4">{o.desc}</p>
              <p className="text-primary font-semibold">{o.price}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">What's included</p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {o.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary glow-dot shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-block mt-6 px-6 py-3 rounded-full bg-mint-gradient text-primary-foreground font-semibold text-sm hover:scale-105 transition">
                Get a quote →
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Keyword landing pages */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="mb-10">
          <p className="text-primary text-sm uppercase tracking-widest mb-2">Specialised pages</p>
          <h2 className="text-3xl md:text-4xl font-bold">Browse by service & expertise.</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { slug: "seo-services-india", label: "SEO Services India" },
            { slug: "ai-saas-development", label: "AI Micro-SaaS Development" },
            { slug: "digital-marketing-bengaluru", label: "Digital Marketing Bengaluru" },
            { slug: "seo-for-saas-startups", label: "SEO for SaaS Startups" },
            { slug: "fastapi-development-services", label: "FastAPI Development" },
            { slug: "openai-integration-services", label: "OpenAI Integration" },
            { slug: "google-ads-management-india", label: "Google Ads Management" },
            { slug: "content-marketing-saas", label: "SaaS Content Marketing" },
          ].map((k) => (
            <Link key={k.slug} to="/services/$slug" params={{ slug: k.slug }} className="group p-5 rounded-2xl bg-card-gradient border border-border hover:border-primary/50 transition flex items-center justify-between">
              <span className="font-semibold text-sm">{k.label}</span>
              <span className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition">→</span>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
