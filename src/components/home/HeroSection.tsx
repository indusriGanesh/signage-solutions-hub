import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const features = [
    "Custom Design & Manufacturing",
    "Professional Installation",
    "Premium Materials",
  ];

  return (
    <section className="relative overflow-hidden hero-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Accent gradient overlay */}
      <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="container-custom relative">
        <div className="grid gap-12 py-20 lg:grid-cols-2 lg:gap-8 lg:py-32">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent"
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
              Industry-Leading Signage Solutions
            </motion.span>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Transform Your Space with{" "}
              <span className="text-[#4ade80]">Professional Signage</span>
            </h1>

            <p className="mb-8 max-w-xl text-lg text-primary-foreground/70">
              From branding and wayfinding to safety compliance and digital displays—we deliver
              premium signage solutions that elevate your business presence.
            </p>

            <div className="mb-8 flex flex-wrap gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-primary-foreground/80"
                >
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="btn-glow bg-accent text-accent-foreground hover:bg-amber-light">
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-transparent border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 shadow-none">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild size="lg" className="bg-transparent border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 shadow-none">
                <a href="tel:+917207377499">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us Now
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative aspect-square w-full max-w-lg">
              {/* Main Image Container */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden border border-primary-foreground/10 shadow-2xl">
                <img
                  src="/hero-signage.png"
                  alt="Premium Signage Solutions"
                  className="h-full w-full object-cover visited:bg-transparent"
                />
                {/* Overlay gradient for better text contrast if needed, or just aesthetic */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/20 mix-blend-overlay" />
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 top-1/4 rounded-xl bg-card/80 backdrop-blur-md border border-white/10 p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                    <CheckCircle className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">500+ Projects</p>
                    <p className="text-xs text-muted-foreground">Delivered</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 bottom-1/4 rounded-xl bg-card/80 backdrop-blur-md border border-white/10 p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                    <span className="text-lg font-bold text-accent">★</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">4.9/5 Rating</p>
                    <p className="text-xs text-muted-foreground">Client Reviews</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
