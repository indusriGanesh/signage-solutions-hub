import { motion } from "framer-motion";
import { Lightbulb, PenTool, Factory, Truck } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: "Consultation",
      description: "We understand your requirements, brand guidelines, and project scope.",
    },
    {
      icon: PenTool,
      title: "Design",
      description: "Our creative team develops custom designs tailored to your vision.",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Precision crafting using premium materials and latest technology.",
    },
    {
      icon: Truck,
      title: "Installation",
      description: "Professional installation by our experienced technicians.",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-2 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            Our Process
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            How We Work
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            From initial concept to final installation, we ensure a seamless experience 
            with our proven four-step process.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-16 hidden h-0.5 w-3/4 -translate-x-1/2 bg-border lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative text-center"
                >
                  {/* Step Number */}
                  <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-accent/10" />
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                      {index + 1}
                    </span>
                  </div>

                  <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
