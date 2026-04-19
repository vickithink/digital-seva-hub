import { FileText, Instagram, Facebook, MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container py-12 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-hero grid place-items-center shadow-glow">
              <FileText className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <div className="font-display font-bold">{SITE.fullName}</div>
              <div className="text-xs text-muted-foreground tracking-wider uppercase">
                Student Services
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            All your student services — print, typing, forms, resume — in one place.
          </p>
        </div>

        <div>
          <div className="font-display font-semibold mb-3">Quick Links</div>
          <ul className="space-y-2 text-sm">
            {["Home", "Services", "Pricing", "About", "Contact"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-display font-semibold mb-3">Follow us</div>
          <div className="flex gap-3">
            {[
              { icon: MessageCircle, href: waLink(), label: "WhatsApp" },
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Facebook, href: "#", label: "Facebook" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="h-10 w-10 grid place-items-center rounded-xl border border-border bg-card hover:bg-accent hover:text-primary transition-colors"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {SITE.fullName}. All rights reserved.</p>
          <p>Serving Saharsa · Madhepura · Purnea</p>
        </div>
      </div>
    </footer>
  );
};
