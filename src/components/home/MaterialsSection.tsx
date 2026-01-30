import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { materials } from "@/data/products";

const MaterialsSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-2 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            Quality Materials
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Premium Materials We Use
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We source only the finest materials to ensure durability, aesthetics, 
            and long-lasting performance for all our signage solutions.
          </p>
        </motion.div>

        {/* Materials Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((material, index) => (
            <motion.div
              key={material.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-xl border bg-card p-6 card-hover"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <span className="font-heading text-lg font-bold">{material.name.charAt(0)}</span>
              </div>
              <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
                {material.name}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                {material.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {material.properties.slice(0, 3).map((prop) => (
                  <span
                    key={prop}
                    className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                  >
                    {prop}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to="/materials"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-navy-light"
          >
            Learn More About Materials
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MaterialsSection;
