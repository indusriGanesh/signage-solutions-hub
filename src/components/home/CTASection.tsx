import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const phoneNumber = "917207377499";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello! I'm interested in your signage solutions.")}`;

  return (
    <section className="relative overflow-hidden hero-gradient section-padding">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      <div className="absolute -right-20 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -left-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Ready to Transform Your Space?
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/70">
            Let's discuss your signage needs. Our team of experts is ready to help you
            create impactful visual solutions for your business.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="btn-glow bg-accent text-accent-foreground hover:bg-amber-light">
              <Link to="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button asChild size="lg" className="bg-transparent border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 shadow-none">
              <a href="tel:+917207377499">
                <Phone className="mr-2 h-4 w-4" />
                Call Us Now
              </a>
            </Button>

            <Button asChild size="lg" variant="outline" className="border-[#25D366] bg-[#25D366] text-white hover:bg-[#20BD5C]">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-primary-foreground/60"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/10">✓</span>
              <span>500+ Projects Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/10">✓</span>
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/10">✓</span>
              <span>100% Satisfaction</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
