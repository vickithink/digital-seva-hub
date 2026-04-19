import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/site";
import heroImg from "@/assets/hero-illustration.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-gradient-soft"
    >
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" aria-hidden />

      <div className="container relative grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold mb-5">
            <Sparkles className="h-3.5 w-3.5" />
            Trusted by 2,000+ students across Saharsa, Madhepura & Purnea
          </span>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance text-foreground">
            All Student Services{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              in One Place
            </span>
          </h1>

          <p className="mt-5 text-lg text-muted-foreground max-w-xl text-balance">
            Print, Typing, Online Form Filling, Resume & CV, Project Work and more —
            done fast, reliably, and at student-friendly prices.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="whatsapp" size="xl">
              <a
                href={waLink("Hi! I'd like to place an order for a service.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                Order Now on WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="xl">
              <a href="#services">
                Explore Services <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
            <div>
              <div className="font-display font-bold text-2xl text-foreground">2K+</div>
              Happy students
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="font-display font-bold text-2xl text-foreground">15min</div>
              Avg response
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="font-display font-bold text-2xl text-foreground">6+</div>
              Services
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-card bg-gradient-card border border-border/60">
            <img
              src={heroImg}
              alt="Student digital services — laptop, printer, documents and WhatsApp"
              width={1280}
              height={1024}
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 md:-left-8 bg-card border border-border rounded-2xl shadow-card p-4 flex items-center gap-3 animate-float">
            <div className="h-10 w-10 grid place-items-center rounded-xl bg-whatsapp/15 text-whatsapp">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold">Order on WhatsApp</div>
              <div className="text-xs text-muted-foreground">Reply in minutes</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
