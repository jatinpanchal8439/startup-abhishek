import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer } from "@/components/site-chrome";
import founderImg from "@/assets/founder-abhishek.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About DrishtiSEO — SEO & AI Growth Studio" },
      { name: "description", content: "Meet the founders of DrishtiSEO — Abhishek Sharma (Founder & CEO) and Jatin Vishwakarma (Co-founder & Fullstack Developer). A Shamli-based SEO and AI growth studio helping tech brands rank #1 on Google." },
      { property: "og:title", content: "About DrishtiSEO — Founded by Abhishek Sharma & Jatin Vishwakarma" },
      { property: "og:description", content: "Developer-led SEO and AI growth studio in Bengaluru, India." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: founderImg },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "DrishtiSEO",
          founder: [
            {
              "@type": "Person",
              name: "Abhishek Sharma",
              jobTitle: "Founder & CEO",
              description: "Technology Lead and Application Support Manager with over 10 years of deep expertise in the Fintech and Banking domains.",
            },
            {
              "@type": "Person",
              name: "Jatin Vishwakarma",
              jobTitle: "Co-founder & Fullstack Developer",
              description: "Fullstack developer specializing in modern web technologies.",
            }
          ],
          address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
        }),
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { t: "Ship like founders", d: "We don't write decks. We push code and content that moves rankings." },
  { t: "AI-native by default", d: "Every workflow has an LLM, embedding, or automation behind it." },
  { t: "Compounding > spikes", d: "We bet on SEO and owned audiences — assets that pay for years." },
  { t: "Transparent pricing", d: "Flat retainers, real reports, zero shady link farms." },
];

const milestones = [
  { y: "2019", t: "First freelance SEO project — ranked a SaaS startup #1 for 'invoice software India' in 4 months." },
  { y: "2021", t: "Quit corporate job. Built first AI micro-SaaS (a content brief generator) — crossed ₹1L MRR." },
  { y: "2023", t: "Founded DrishtiSEO. Started serving Indian D2C and SaaS brands with full-stack growth." },
  { y: "2025", t: "9-person team. 47+ clients ranked #1. Launched DrishtiSEO Templates marketplace." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-hero pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-primary text-sm uppercase tracking-widest mb-3">About the founders</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-12 leading-[1.05]">
            Meet the <span className="text-gradient">DrishtiSEO</span> team.
          </h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 rounded-3xl bg-card-gradient border border-border">
              <h2 className="text-3xl font-bold mb-4">Abhishek Sharma</h2>
              <p className="text-primary font-semibold mb-4">Founder & CEO</p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Technology Lead and Application Support Manager with over 10 years of deep expertise in the Fintech and Banking domains. My core strengths lie in complex API integrations, end-to-end merchant lifecycle management, and cross-border payments (UPI, SEPA, SWIFT, Cards). As a strong SRE and operations leader, I have successfully managed 24x7 technical support teams while consistently optimizing payment success rates and system reliability.
              </p>
              <div className="flex gap-4">
                <a href="https://twitter.com/abhisharmadev" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-full border border-border hover:border-primary text-sm transition">Twitter / X</a>
                <a href="https://linkedin.com/in/abhisharmadev" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-full border border-border hover:border-primary text-sm transition">LinkedIn</a>
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-card-gradient border border-border">
              <h2 className="text-3xl font-bold mb-4">Jatin Vishwakarma</h2>
              <p className="text-primary font-semibold mb-4">Co-founder & Fullstack Developer</p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Fullstack developer specializing in modern web technologies. Expertise in building scalable applications with React, Next.js, Node.js, and cloud services. Passionate about creating seamless user experiences and robust backend systems.
              </p>
              <div className="flex gap-4">
                <a href="https://twitter.com/jatinvishwakarma" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-full border border-border hover:border-primary text-sm transition">Twitter / X</a>
                <a href="https://linkedin.com/in/jatinvishwakarma" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-full border border-border hover:border-primary text-sm transition">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8">The DrishtiSEO story.</h2>
        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>DrishtiSEO started as a side project in 2019 — a couple of FastAPI engineers (me and a college friend) who got tired of watching great products get buried on page 4 of Google. We started ranking our own tools, then friends', then clients'.</p>
          <p>Today we're a 9-person studio in HSR Layout, Shamli helping tech founders win the search game while shipping AI products on the side. Most agencies treat SEO as a checklist. We treat it as engineering — site speed, schema, internal links, indexability.</p>
          <p>The bet is simple: write the post nobody else can write, ship the tool nobody else has shipped, and let Google do the distribution.</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-10">Milestones.</h2>
        <div className="space-y-5">
          {milestones.map((m) => (
            <div key={m.y} className="flex gap-6 p-6 rounded-2xl bg-card-gradient border border-border">
              <div className="text-primary font-display font-bold text-2xl shrink-0 w-20">{m.y}</div>
              <p className="text-muted-foreground">{m.t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10 text-center">What we stand for.</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((v) => (
            <div key={v.t} className="p-8 rounded-2xl bg-card-gradient border border-border">
              <h3 className="text-2xl font-bold mb-3 text-gradient">{v.t}</h3>
              <p className="text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Want to chat?</h2>
        <p className="text-muted-foreground mb-6">I personally read every inbound. DM me on Twitter or book an audit.</p>
        <Link to="/contact" className="inline-block px-7 py-4 rounded-full bg-mint-gradient text-primary-foreground font-semibold shadow-glow hover:scale-105 transition">
          Book free strategy call
        </Link>
      </section>

      <Footer />
    </div>
  );
}
