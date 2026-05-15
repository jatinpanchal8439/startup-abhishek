import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header, Footer } from "@/components/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Free SEO Audit & Strategy Call | Rankforge" },
      { name: "description", content: "Book a free 30-minute SEO strategy call. We'll audit your site live and hand you a 90-day growth plan." },
      { property: "og:title", content: "Contact Rankforge" },
      { property: "og:description", content: "Free SEO audit + strategy call." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-hero pt-20 pb-12">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-primary text-sm uppercase tracking-widest mb-3">Contact</p>
          <h1 className="text-5xl md:text-7xl font-bold">Let's <span className="text-gradient">make you rank.</span></h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Free SEO audit</h2>
          <p className="text-muted-foreground mb-8">Drop your site and goals. We'll send back a 5-page audit + a Loom walkthrough within 48 hours. No fluff, no sales call required.</p>
          <div className="space-y-4 text-sm">
            <div className="flex gap-3"><span className="text-primary">📩</span> hello@rankforge.studio</div>
            <div className="flex gap-3"><span className="text-primary">📞</span> +91 98765 43210</div>
            <div className="flex gap-3"><span className="text-primary">📍</span> HSR Layout, Bengaluru</div>
            <div className="flex gap-3"><span className="text-primary">⏱</span> Mon–Fri, 10am–7pm IST</div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="p-8 rounded-3xl bg-card-gradient border border-border space-y-4"
        >
          {sent ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-2">We got it.</h3>
              <p className="text-muted-foreground">Audit landing in your inbox within 48 hours.</p>
            </div>
          ) : (
            <>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Your name</label>
                <input required className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary outline-none transition" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Email</label>
                <input required type="email" className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary outline-none transition" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Website URL</label>
                <input required type="url" placeholder="https://" className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary outline-none transition" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">What do you need?</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary outline-none transition resize-none" />
              </div>
              <button type="submit" className="w-full py-4 rounded-full bg-mint-gradient text-primary-foreground font-semibold shadow-glow hover:scale-[1.02] transition">
                Send → get audit in 48h
              </button>
            </>
          )}
        </form>
      </section>
      <Footer />
    </div>
  );
}
