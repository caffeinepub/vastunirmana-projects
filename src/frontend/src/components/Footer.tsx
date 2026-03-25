import { Heart } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import { Link } from "../App";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[oklch(0.07_0_0)] border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-gold flex items-center justify-center">
              <span className="font-display font-bold text-gold text-sm">
                VP
              </span>
            </div>
            <div>
              <div className="font-display text-gold text-sm tracking-widest">
                VASTUNIRMANA PROJECTS
              </div>
              <div className="text-muted-foreground text-xs tracking-wider">
                Pvt. Ltd.
              </div>
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Transforming spaces into extraordinary experiences since 2006.
            Specializing in corporate, retail, and hospitality interiors across
            India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-gold text-xs tracking-widest mb-6">
            QUICK LINKS
          </h4>
          <nav className="flex flex-col gap-3">
            {[
              { label: "Home", to: "/" as const },
              { label: "About Us", to: "/about" as const },
              { label: "Portfolio", to: "/portfolio" as const },
              { label: "Contact", to: "/contact" as const },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-muted-foreground text-sm hover:text-gold transition-colors"
                data-ocid="footer.link"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-display text-gold text-xs tracking-widest mb-6">
            FOLLOW US
          </h4>
          <div className="flex gap-5 mb-6">
            <a
              href="https://www.facebook.com/vastunirmanaprojects"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors"
              aria-label="Facebook"
            >
              <SiFacebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/vastunirmanaprojects"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <SiInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/vastunirmanaprojects"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors"
              aria-label="LinkedIn"
            >
              <SiLinkedin size={20} />
            </a>
          </div>
          <div className="text-muted-foreground text-sm">
            <p>1911-D/19, 3rd Floor, Govindpuri Extn</p>
            <p>Kalkaji, New Delhi - 110019</p>
            <p className="mt-2">+91 9891266641</p>
            <p>info@vastunirmanaprojects.in</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-xs tracking-wider">
            &copy; {year} VASTUNIRMANA PROJECTS Pvt. Ltd. All rights reserved.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground text-xs flex items-center gap-1 hover:text-gold transition-colors"
          >
            Built with <Heart size={12} className="text-gold" /> using
            caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
