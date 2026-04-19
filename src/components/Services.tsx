import { motion } from "framer-motion";
import {
  Printer,
  Keyboard,
  FileEdit,
  FileUser,
  FolderKanban,
  IdCard,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Printer,
    title: "Print & Scan",
    description: "B/W and color printing, scanning, photocopy — fast and crisp.",
  },
  {
    icon: Keyboard,
    title: "Typing Work",
    description: "Hindi & English typing for assignments, applications and notes.",
  },
  {
    icon: FileEdit,
    title: "Online Form Filling",
    description: "Govt., scholarship, exam & admission forms filled accurately.",
  },
  {
    icon: FileUser,
    title: "Resume & CV",
    description: "Professional resumes designed to land interviews.",
  },
  {
    icon: FolderKanban,
    title: "Project Work",
    description: "School & college projects, charts, files — neatly prepared.",
  },
  {
    icon: IdCard,
    title: "ID Card Design",
    description: "Custom student & business ID cards with print-ready output.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">
            Our Services
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-balance">
            Everything a student needs, under one roof
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From printing to project work — we cover it all with speed and care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative rounded-2xl bg-gradient-card border border-border/60 p-6 md:p-7 shadow-soft hover:shadow-card hover:-translate-y-1 hover:border-primary/30 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-accent text-accent-foreground grid place-items-center mb-5 group-hover:bg-gradient-hero group-hover:text-primary-foreground transition-colors duration-300">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
