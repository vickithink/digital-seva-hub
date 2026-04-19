import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/site";

const plans = [
  {
    name: "Print",
    price: "₹2–5",
    unit: "/page",
    features: ["B/W & Color", "Single or double side", "Bulk discounts"],
  },
  {
    name: "Typing",
    price: "₹10",
    unit: "/page",
    features: ["Hindi & English", "Formatted output", "Quick turnaround"],
    highlight: true,
  },
  {
    name: "Form Fill",
    price: "₹50+",
    unit: "/form",
    features: ["Govt. & private forms", "Document upload", "Verified submission"],
  },
  {
    name: "Resume",
    price: "₹100",
    unit: "/resume",
    features: ["Modern templates", "PDF + editable copy", "1 free revision"],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">
            Pricing
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-balance">
            Honest, student-friendly prices
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            No hidden fees. Pay only for what you order.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`relative rounded-2xl border p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 ${
                p.highlight
                  ? "bg-gradient-hero text-primary-foreground border-transparent shadow-glow"
                  : "bg-gradient-card border-border/60 shadow-soft hover:shadow-card"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-6 text-[10px] font-bold uppercase tracking-widest bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full">
                  Popular
                </span>
              )}
              <div className={`text-sm font-medium ${p.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {p.name}
              </div>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="font-display font-bold text-4xl">{p.price}</span>
                <span className={`text-sm ${p.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {p.unit}
                </span>
              </div>
              <ul className="mt-5 space-y-2.5 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${p.highlight ? "text-secondary-glow" : "text-secondary"}`} />
                    <span className={p.highlight ? "text-primary-foreground/90" : "text-foreground/80"}>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="whatsapp" size="lg">
            <a href={waLink("Hi! I'd like a price quote.")} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" /> Get a Custom Quote
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
