import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { productCategories } from "@/data/products";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Materials", path: "/materials" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="mb-4 flex items-center gap-2">
              <img src="/logo-white.png" alt="Brandspace India" className="h-12 w-auto" />
            </Link>
            <p className="mb-6 text-sm text-primary-foreground/70">
              Premium signage solutions for businesses of all sizes. From branding to wayfinding,
              we deliver quality craftsmanship and innovative designs.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-foreground/10 text-primary-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold">Products</h4>
            <ul className="space-y-2">
              {productCategories.slice(0, 6).map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/products?category=${category.id}`}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/products"
                  className="text-sm font-medium text-accent hover:underline"
                >
                  View All &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+917207377499"
                  className="flex items-start gap-3 text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>+91 720 737 7499</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@brandspaceindia.in"
                  className="flex items-start gap-3 text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>info@brandspaceindia.in</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Plot No. 261, Road No. 78, Phase III<br />
                  Block-III, Jubilee Hills<br />
                  Hyderabad, Telangana 500096
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom flex flex-col items-center justify-between gap-4 py-6 text-sm text-primary-foreground/60 md:flex-row">
          <p>© {currentYear} Brand Space. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
