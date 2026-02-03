import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/common/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { productCategories } from "@/data/products";
const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email is too long"),
  phone: z.string().trim().optional(),
  company: z.string().trim().optional(),
  category: z.string().optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message is too long")
});
type ContactFormData = z.infer<typeof contactSchema>;
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: {
      errors
    }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours."
    });
    reset();
    setIsSubmitting(false);
  };
  const contactInfo = [{
    icon: Phone,
    title: "Phone",
    content: "+91 720 737 7499",
    link: "tel:+917207377499"
  }, {
    icon: Mail,
    title: "Email",
    content: "info@brandspaceindia.in",
    link: "mailto:info@brandspaceindia.in"
  }, {
    icon: MapPin,
    title: "Address",
    content: "Plot No. 261, Road No. 78, Phase III, Block-III, Jubilee Hills, Hyderabad, Telangana 500096"
  }, {
    icon: Clock,
    title: "Business Hours",
    content: "Mon - Fri: 9:00 AM - 6:00 PM"
  }];
  const phoneNumber = "917207377499";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello! I'm interested in your signage solutions.")}`;
  return <Layout>
      <SEOHead
        title="Contact Us"
        description="Get in touch with Brand Space for custom signage solutions. Request a quote, schedule a consultation, or visit our Hyderabad office."
        keywords="contact brand space, signage quote, corporate signage hyderabad, signage consultation"
        url="/contact"
      />
      {/* Page Header */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="container-custom">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              Contact Us
            </h1>
            <p className="text-lg text-primary-foreground/70">
              Ready to transform your space with professional signage?
              Get in touch with our team for a free consultation and quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.2
          }}>
              <div className="rounded-2xl border bg-card p-6 lg:p-8">
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="John Doe" {...register("name")} className="mt-1.5" />
                      {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="john@company.com" {...register("email")} className="mt-1.5" />
                      {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (234) 567-890" {...register("phone")} className="mt-1.5" />
                    </div>

                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" placeholder="Your Company" {...register("company")} className="mt-1.5" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="category">Product Category</Label>
                    <Select onValueChange={value => setValue("category", value)}>
                      <SelectTrigger className="mt-1.5">
                        <SelectValue placeholder="Select a category (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        {productCategories.map(cat => <SelectItem key={cat.id} value={cat.id}>
                            {cat.name}
                          </SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea id="message" placeholder="Tell us about your project requirements..." rows={5} {...register("message")} className="mt-1.5" />
                    {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
                  </div>

                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-accent text-accent-foreground hover:bg-amber-light btn-glow">
                    {isSubmitting ? "Sending..." : <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.3
          }} className="flex flex-col gap-8">
              {/* Contact Cards */}
              <div className="grid gap-4 sm:grid-cols-2">
                {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return <motion.div key={info.title} initial={{
                  opacity: 0,
                  y: 20
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: 0.4 + index * 0.1
                }} className="rounded-xl border bg-card p-5">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mb-1 font-semibold text-foreground">{info.title}</h3>
                      {info.link ? <a href={info.link} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                          {info.content}
                        </a> : <p className="text-sm text-muted-foreground">{info.content}</p>}
                    </motion.div>;
              })}
              </div>

              {/* WhatsApp CTA */}
              <div className="rounded-xl border-2 border-[#25D366] bg-[#25D366]/5 p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white">
                    <MessageCircle className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">Chat on WhatsApp</h3>
                    <p className="text-sm text-muted-foreground">
                      Get instant responses from our team
                    </p>
                  </div>
                  <Button asChild className="bg-[#25D366] text-white hover:bg-[#20BD5C]">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Chat Now
                    </a>
                  </Button>
                </div>
              </div>

              {/* Map Embed */}
              <div className="flex-1 overflow-hidden rounded-xl border bg-secondary">
                <a href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg80gEHNDUzajBqNKgCALACAQ&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KWN6kU51l8s7MQa9osCZngEI&daddr=Plot+No,+261,+Road+No.+78,+Phase+III,+Block-III,+Jubilee+Hills,+Hyderabad,+Telangana+500096" target="_blank" rel="noopener noreferrer" className="flex h-full min-h-[300px] items-center justify-center transition-colors hover:bg-secondary/80">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-4 h-12 w-12 text-primary" />
                    <p className="font-medium text-foreground">Our Location</p>
                    <p className="text-sm text-muted-foreground">
                      Plot No. 261, Road No. 78, Phase III<br />
                      Block-III, Jubilee Hills<br />
                      Hyderabad, Telangana 500096
                    </p>
                    
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Contact;