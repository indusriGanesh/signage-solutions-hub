import { motion } from "framer-motion";
import { Building, Hospital, Hotel, Factory, Server, Warehouse } from "lucide-react";

const IndustriesSection = () => {
    const industries = [
        {
            icon: Building,
            title: "Corporate Offices",
            description: "Professional branding and wayfinding solutions for modern workspaces.",
        },
        {
            icon: Hospital,
            title: "Healthcare",
            description: "Clear, compliant signage for hospitals and medical facilities.",
        },
        {
            icon: Hotel,
            title: "Hospitality",
            description: "Elegant wayfinding and branding for hotels and resorts.",
        },
        {
            icon: Factory,
            title: "Industrial",
            description: "Safety signage and compliance solutions for manufacturing.",
        },
        {
            icon: Server,
            title: "Data Centers",
            description: "Critical infrastructure signage and cable management labeling.",
        },
        {
            icon: Warehouse,
            title: "Warehouses",
            description: "Inventory management, zone marking, and logistics signage.",
        },
    ];

    return (
        <section className="section-padding bg-secondary/30">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <span className="mb-2 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
                        Industries We Serve
                    </span>
                    <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                        Trusted Across Industries
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        From corporate offices to healthcare facilities, we deliver specialized signage
                        solutions tailored to your industry's unique needs.
                    </p>
                </motion.div>

                {/* Industries Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {industries.map((industry, index) => {
                        const Icon = industry.icon;
                        return (
                            <motion.div
                                key={industry.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group rounded-xl border bg-card p-6 text-center card-hover"
                            >
                                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                                    <Icon className="h-7 w-7" />
                                </div>
                                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                                    {industry.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {industry.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
