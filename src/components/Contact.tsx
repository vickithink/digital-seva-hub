import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, waLink } from "@/lib/site";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-soft">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            Contact
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-balance">
            Reach us — we're just a message away
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {[
            { icon: Phone, title: "Call us", value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, "")}` },
            { icon: MapPin, title: "Visit us", value: SITE.location, href: "#" },
            { icon: Clock, title: "Open hours", value: "Mon–Sat · 9 AM – 9 PM", href: "#" },
          ].map((c, i) => (
            <motion.a
              key={c.title}
              href={c.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="block rounded-2xl bg-card border border-border/60 p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-accent text-accent-foreground grid place-items-center mb-4">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="text-sm text-muted-foreground">{c.title}</div>
              <div className="font-display font-semibold text-lg mt-1">{c.value}</div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="whatsapp" size="xl">
            <a href={waLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
