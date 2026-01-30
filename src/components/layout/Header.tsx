import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { productCategories } from "@/data/products";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Gallery", path: "/gallery" },
    { name: "Materials", path: "/materials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-primary">
        <div className="container-custom flex items-center justify-between py-2 text-sm">
          <div className="hidden items-center gap-6 sm:flex">
            <a href="tel:+917207377499" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span>+91 720 737 7499</span>
            </a>
            <a href="mailto:info@brandspaceindia.in" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Mail className="h-3.5 w-3.5" />
              <span>info@brandspaceindia.in</span>
            </a>
          </div>
          <div className="flex w-full items-center justify-center text-primary-foreground/80 sm:w-auto sm:justify-end">
            <span>Professional Signage Solutions</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container-custom">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo-full.png" alt="Brandspace India" className="h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${isActive(link.path)
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild variant="default" className="btn-glow bg-accent text-accent-foreground hover:bg-amber-light">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b bg-background lg:hidden"
          >
            <div className="container-custom py-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block rounded-md px-4 py-3 font-medium ${isActive(link.path)
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                        }`}
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}
                <div className="mt-4 border-t pt-4">
                  <Button asChild variant="default" className="w-full bg-accent text-accent-foreground hover:bg-amber-light">
                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Get a Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
