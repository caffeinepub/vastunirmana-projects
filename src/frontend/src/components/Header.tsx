import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import { Link, useRouterState } from "../App";

const navLinks = [
  { label: "HOME", to: "/" as const },
  { label: "ABOUT", to: "/about" as const },
  { label: "PORTFOLIO", to: "/portfolio" as const },
  { label: "CONTACT", to: "/contact" as const },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-[oklch(0.09_0_0)] shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" data-ocid="nav.link">
          <div className="w-10 h-10 border-2 border-gold flex items-center justify-center">
            <span className="font-display font-bold text-gold text-sm">VP</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-gold text-sm font-semibold tracking-widest">
              VASTUNIRMANA
            </span>
            <span className="font-display text-gold text-xs tracking-widest">
              PROJECTS
            </span>
          </div>
        </Link>

        {/* Center Nav - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid="nav.link"
              className={`text-xs tracking-widest transition-colors duration-200 ${
                pathname === link.to
                  ? "text-gold"
                  : "text-muted-foreground hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.facebook.com/vastunirmanaprojects"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-gold transition-colors"
            aria-label="Facebook"
          >
            <SiFacebook size={16} />
          </a>
          <a
            href="https://www.instagram.com/vastunirmanaprojects"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-gold transition-colors"
            aria-label="Instagram"
          >
            <SiInstagram size={16} />
          </a>
          <a
            href="https://www.linkedin.com/company/vastunirmanaprojects"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-gold transition-colors"
            aria-label="LinkedIn"
          >
            <SiLinkedin size={16} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden text-muted-foreground hover:text-gold transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[oklch(0.12_0_0)] border-t border-border px-6 py-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`text-xs tracking-widest py-2 transition-colors ${
                  pathname === link.to
                    ? "text-gold"
                    : "text-muted-foreground hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-4 mt-4 pt-4 border-t border-border">
            <a
              href="https://www.facebook.com/vastunirmanaprojects"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors"
            >
              <SiFacebook size={16} />
            </a>
            <a
              href="https://www.instagram.com/vastunirmanaprojects"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors"
            >
              <SiInstagram size={16} />
            </a>
            <a
              href="https://www.linkedin.com/company/vastunirmanaprojects"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors"
            >
              <SiLinkedin size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
