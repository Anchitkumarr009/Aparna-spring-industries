import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { company, navLinks } from "../data/content";

const slug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

/** Sticky site header with desktop nav and a mobile dropdown menu. */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3" data-testid="link-logo">
          <img
            src={company.logo}
            alt={`${company.name} Logo`}
            className="h-14 w-auto object-contain"
          />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  data-testid={`link-nav-${slug(link.name)}`}
                  className="text-sm font-semibold text-foreground hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href={`tel:${company.callNowPhone}`} data-testid="link-call-now" className="ml-2">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
              Call Now
            </Button>
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          data-testid="button-mobile-menu"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t py-4 px-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-base font-medium text-foreground hover:text-accent transition-colors"
                  onClick={() => setMenuOpen(false)}
                  data-testid={`link-mobile-nav-${slug(link.name)}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`tel:${company.callNowPhone}`}
            className="w-full"
            onClick={() => setMenuOpen(false)}
          >
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              Call Now
            </Button>
          </a>
        </div>
      )}
    </header>
  );
}
