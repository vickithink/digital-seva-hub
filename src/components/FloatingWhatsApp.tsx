import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export const FloatingWhatsApp = () => {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp/60 animate-pulse-ring" aria-hidden />
      <span className="relative flex items-center justify-center h-14 w-14 rounded-full bg-gradient-cta text-whatsapp-foreground shadow-whatsapp hover:scale-110 transition-transform duration-300">
        <MessageCircle className="h-6 w-6" />
      </span>
    </a>
  );
};
