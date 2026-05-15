import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer } from "@/components/site-chrome";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Transparent SEO & Growth Plans | Rankforge" },
      { name: "description", content: "Simple, transparent pricing for SEO, AI SaaS builds, content creation and digital marketing. Plans from ₹15,000/month." },
      { property: "og:title", content: "Pricing | Rankforge" },
      { property: "og:description", content: "Plans from ₹15,000/month. No long contracts." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Rankforge Growth Plans",
          description: "SEO, AI SaaS, content & digital marketing retainers for tech brands.",
          brand: { "@type": "Brand", name: "Rankforge" },
          offers: [
            { "@type": "Offer", name: "Starter", price: "15000", priceCurrency: "INR", url: "/pricing" },
            { "@type": "Offer", name: "Growth", price: "45000", priceCurrency: "INR", url: "/pricing" },
            { "@type": "Offer", name: "Scale", price: "95000", priceCurrency: "INR", url: "/pricing" },
          ],
        }),
      },
    ],
  }),
  component: PricingPage,
});

const plans = [
  {
    name: "Starter", price: "₹15,000", per: "/month",
    desc: "For solo founders launching their first product.",
    features: ["SEO audit + 5 keywords", "Monthly content brief", "Basic on-page SEO", "Google Search Console setup", "Email support"],
  },
  {
    name: "Growth", price: "₹45,000", per: "/month", featured: true,
    desc: "For startups serious about ranking and revenue.",
    features: ["Everything in Starter", "20 target keywords", "8 SEO blog posts/mo", "Link building (5 backlinks)", "Tech SEO + CWV", "Reels content (4/mo)", "Bi-weekly strategy calls"],
  },
  {
    name: "Scale", price: "₹95,000", per: "/month",
    desc: "For brands ready to dominate their niche.",
    features: ["Everything in Growth", "Unlimited keywords", "AI micro-SaaS sprint", "Premium template/quarter", "Google + Meta Ads", "Dedicated growth lead", "Slack channel"],
  },
];

function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-hero pt-20 pb-12 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-primary text-sm uppercase tracking-widest mb-3">Pricing</p>
          <h1 className="text-5xl md:text-7xl font-bold">Pick your <span className="text-gradient">growth lane.</span></h1>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto">No long contracts. Cancel anytime. Reports every month.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div key={p.name} className={`p-8 rounded-3xl border transition-all relative ${p.featured ? "bg-card-gradient border-primary shadow-glow scale-105" : "bg-card-gradient border-border"}`}>
            {p.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-mint-gradient text-primary-foreground text-xs font-bold">MOST POPULAR</span>}
            <h3 className="text-xl font-bold mb-2">{p.name}</h3>
            <p className="text-sm text-muted-foreground mb-5">{p.desc}</p>
            <div className="mb-6">
              <span className="text-5xl font-bold font-display">{p.price}</span>
              <span className="text-muted-foreground">{p.per}</span>
            </div>
            <Link to="/contact" className={`block text-center py-3 rounded-full font-semibold mb-6 transition ${p.featured ? "bg-mint-gradient text-primary-foreground shadow-glow" : "border border-border hover:border-primary"}`}>
              Get started
            </Link>
            <ul className="space-y-3 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2"><span className="text-primary">✓</span>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="max-w-3xl mx-auto px-6 py-12 text-center">
        <p className="text-muted-foreground">Need something custom? One-off projects, AI builds, and template launches priced per scope.</p>
        <Link to="/contact" className="inline-block mt-4 text-primary hover:underline font-semibold">Talk to us →</Link>
      </section>
      <Footer />
    </div>
  );
}
