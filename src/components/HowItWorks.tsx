import { motion } from "framer-motion";
import { MessageCircle, Cog, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Send file on WhatsApp",
    description: "Share your file or details with us on WhatsApp — anytime.",
  },
  {
    icon: Cog,
    title: "We process your request",
    description: "Our team prepares your work quickly and double-checks quality.",
  },
  {
    icon: PackageCheck,
    title: "Pickup or get delivery",
    description: "Collect from our shop in Saharsa or get it delivered to you.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how" className="py-20 md:py-28 bg-gradient-soft">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            How It Works
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-balance">
            Three simple steps, zero hassle
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative">
          {/* connector */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" aria-hidden />

          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative text-center"
            >
              <div className="relative mx-auto h-24 w-24 rounded-2xl bg-card border border-border shadow-card grid place-items-center">
                <s.icon className="h-9 w-9 text-primary" />
                <span className="absolute -top-3 -right-3 h-9 w-9 rounded-full bg-gradient-hero text-primary-foreground font-display font-bold grid place-items-center text-sm shadow-glow">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display font-semibold text-xl">{s.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm max-w-xs mx-auto">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
