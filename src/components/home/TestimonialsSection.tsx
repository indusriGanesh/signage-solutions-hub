import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Facilities Manager",
            company: "Tech Corporation",
            content: "Outstanding service from start to finish. The wayfinding signage they installed has dramatically improved navigation in our campus. Highly professional team!",
            rating: 5,
        },
        {
            name: "Michael Chen",
            role: "Marketing Director",
            company: "Retail Hub",
            content: "The custom branded signage exceeded our expectations. The attention to detail and quality of materials used is exceptional. Our stores look fantastic!",
            rating: 5,
        },
        {
            name: "Emily Rodriguez",
            role: "Operations Head",
            company: "Manufacturing Inc",
            content: "Impressed by their expertise in safety signage. They ensured full compliance while maintaining our brand aesthetics. The installation was seamless.",
            rating: 5,
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
                        Testimonials
                    </span>
                    <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                        What Our Clients Say
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Don't just take our word for it. Here's what our satisfied clients have to say
                        about working with us.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative rounded-xl border bg-card p-6 shadow-sm"
                        >
                            {/* Quote Icon */}
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                                <Quote className="h-5 w-5 text-accent" />
                            </div>

                            {/* Rating */}
                            <div className="mb-4 flex gap-1">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="border-t pt-4">
                                <p className="font-semibold text-foreground">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">
                                    {testimonial.role}, {testimonial.company}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trusted By Section - Scrolling Logos */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <p className="mb-8 text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        TRUSTED BY LEADING ORGANIZATIONS
                    </p>

                    <div className="relative overflow-hidden w-full">
                        {/* Gradient overlays */}
                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

                        {/* Scrolling container */}
                        <div className="flex animate-scroll w-max hover:pause">
                            {/* Logos repeated for infinite scroll effect */}
                            {[
                                { name: "Microsoft", src: "/logos/microsoft.png" },
                                { name: "AWS", src: "/logos/aws.png" },
                                { name: "Tata Projects", src: "/logos/tata-projects.png" },
                                { name: "Nxtra", src: "/logos/nxtra.png" },
                                { name: "CtrlS", src: "/logos/ctrls.png" },
                                { name: "Microsoft", src: "/logos/microsoft.png" },
                                { name: "AWS", src: "/logos/aws.png" },
                                { name: "Tata Projects", src: "/logos/tata-projects.png" },
                                { name: "Nxtra", src: "/logos/nxtra.png" },
                                { name: "CtrlS", src: "/logos/ctrls.png" },
                                { name: "Microsoft", src: "/logos/microsoft.png" },
                                { name: "AWS", src: "/logos/aws.png" },
                                { name: "Tata Projects", src: "/logos/tata-projects.png" },
                                { name: "Nxtra", src: "/logos/nxtra.png" },
                                { name: "CtrlS", src: "/logos/ctrls.png" },
                            ].map((logo, index) => (
                                <div
                                    key={`${logo.name}-${index}`}
                                    className="flex items-center justify-center px-8 mx-4 min-w-[150px]"
                                >
                                    <img
                                        src={logo.src}
                                        alt={logo.name}
                                        className="h-12 w-auto object-contain hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
