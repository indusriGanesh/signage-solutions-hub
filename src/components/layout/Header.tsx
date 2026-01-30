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
    { name: "Products", path: "/products", hasDropdown: true },
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
            <a href="tel:+1234567890" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span>+1 (234) 567-890</span>
            </a>
            <a href="mailto:info@signagesolutions.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Mail className="h-3.5 w-3.5" />
              <span>info@signagesolutions.com</span>
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
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <span className="font-heading text-xl font-bold text-accent-foreground">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold leading-tight text-foreground lg:text-xl">
                  SignagePro
                </span>
                <span className="hidden text-xs text-muted-foreground lg:block">
                  Premium Signage Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setIsProductsOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setIsProductsOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
                  </Link>

                  {/* Mega Menu */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {isProductsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 top-full w-[800px] -translate-x-1/2 pt-2"
                        >
                          <div className="rounded-xl border bg-card p-6 shadow-xl">
                            <div className="mb-4 flex items-center justify-between">
                              <h3 className="font-heading text-lg font-semibold">Our Products</h3>
                              <Link
                                to="/products"
                                className="text-sm font-medium text-accent hover:underline"
                              >
                                View All Products →
                              </Link>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                              {productCategories.slice(0, 9).map((category) => {
                                const Icon = category.icon;
                                return (
                                  <Link
                                    key={category.id}
                                    to={`/products/${category.slug}`}
                                    className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-secondary"
                                  >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                                      <Icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                      <p className="font-medium text-foreground text-sm">{category.name}</p>
                                      <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">
                                        {category.subcategories.map(s => s.name).join(", ")}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                            {productCategories.length > 9 && (
                              <div className="mt-4 border-t pt-4">
                                <div className="flex flex-wrap gap-3">
                                  {productCategories.slice(9).map((category) => {
                                    const Icon = category.icon;
                                    return (
                                      <Link
                                        key={category.id}
                                        to={`/products/${category.slug}`}
                                        className="flex items-center gap-2 rounded-md bg-secondary px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                                      >
                                        <Icon className="h-4 w-4" />
                                        {category.name}
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
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
                    {link.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setIsProductsOpen(!isProductsOpen)}
                          className="flex w-full items-center justify-between rounded-md px-4 py-3 font-medium text-foreground hover:bg-secondary"
                        >
                          {link.name}
                          <ChevronDown className={`h-4 w-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {isProductsOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 mt-2 flex flex-col gap-1"
                            >
                              {productCategories.map((category) => {
                                const Icon = category.icon;
                                return (
                                  <Link
                                    key={category.id}
                                    to={`/products/${category.slug}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center gap-3 rounded-md px-4 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                                  >
                                    <Icon className="h-4 w-4" />
                                    {category.name}
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block rounded-md px-4 py-3 font-medium ${
                          isActive(link.path)
                            ? "bg-secondary text-foreground"
                            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
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
