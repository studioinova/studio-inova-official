import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" as const },
  { name: "Products", href: "/products" as const },
  { name: "About", href: "/about" as const },
  { name: "Contact", href: "/contact" as const },
];

export function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;
  const [, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md py-5 pt-[15px] pb-[15px]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="inline-flex items-center leading-none">
            <span className="font-display font-bold text-xl tracking-tight text-foreground leading-none">
              Studio Inova
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-lg py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-base font-medium py-2 px-4 rounded-lg transition-colors ${
                pathname === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
