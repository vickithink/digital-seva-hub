import { motion } from "framer-motion";
import { Zap, Shield, Wallet } from "lucide-react";

const features = [
  { icon: Zap, title: "Fast", description: "Quick turnaround on every order — most jobs done same day." },
  { icon: Shield, title: "Reliable", description: "Accurate work, careful with documents, and always on time." },
  { icon: Wallet, title: "Affordable", description: "Student-first pricing with transparent rates and no surprises." },
];

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-soft">
      <div className="container grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            About Us
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-balance">
            Helping Saharsa students get things done
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Digital Seva Desk is a student-focused digital services shop in Saharsa. From
            printing assignments to filling government forms and crafting resumes — we
            make digital tasks easy, fast, and affordable so you can focus on studies.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            One WhatsApp message is all it takes — share your file or task, and we handle
            the rest.
          </p>
        </motion.div>

        <div className="grid gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 rounded-2xl bg-card border border-border/60 p-5 md:p-6 shadow-soft hover:shadow-card transition-shadow"
            >
              <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-hero text-primary-foreground grid place-items-center shadow-glow">
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
