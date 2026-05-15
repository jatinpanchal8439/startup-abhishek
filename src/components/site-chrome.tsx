import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/drishtiseo-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logoImg} alt="DrishtiSEO Logo" className="w-16 h-16" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-mint-gradient text-primary-foreground text-sm font-semibold hover:opacity-90 transition shadow-glow"
        >
          Free SEO Audit →
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/50 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-lg mb-3">
            <img src={logoImg} alt="DrishtiSEO Logo" className="w-8 h-8" />
            DrishtiSEO<span className="text-primary">.</span>
          </div>
          <p className="text-muted-foreground">SEO + AI growth studio for ambitious tech brands.</p>
        </div>
        <div>
          <p className="font-semibold mb-3">Services</p>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/services" className="hover:text-primary">SEO & Ranking</Link></li>
            <li><Link to="/services" className="hover:text-primary">AI Micro-SaaS</Link></li>
            <li><Link to="/services" className="hover:text-primary">Content & Reels</Link></li>
            <li><Link to="/services" className="hover:text-primary">Dev Templates</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3">Company</p>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/pricing" className="hover:text-primary">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3">Get in touch</p>
          <p className="text-muted-foreground">hello@drishtiseo.studio</p>
          <p className="text-muted-foreground">Bengaluru, IN</p>
        </div>
      </div>
      <div className="border-t border-border/50 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} DrishtiSEO. Built to rank.
      </div>
    </footer>
  );
}
