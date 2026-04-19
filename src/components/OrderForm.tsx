import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Send, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { waLink } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(5, "Please add a short message").max(500),
});

const services = [
  "Print & Scan",
  "Typing Work",
  "Online Form Filling",
  "Resume & CV",
  "Project Work",
  "ID Card Design",
  "Other",
];

export const OrderForm = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [fileName, setFileName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse({ name, service, message });
    if (!result.success) {
      toast({
        title: "Please check the form",
        description: result.error.issues[0]?.message ?? "Invalid input",
        variant: "destructive",
      });
      return;
    }
    const text = [
      `Hi! New order from ${name}`,
      `Service: ${service}`,
      fileName ? `File: ${fileName}` : null,
      `Message: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(waLink(text), "_blank", "noopener,noreferrer");
    toast({ title: "Opening WhatsApp…", description: "Send the message to confirm your order." });
  };

  return (
    <section id="order" className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">
            Quick Order
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-balance">
            Place your order in seconds
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Fill the form — we'll continue the chat on WhatsApp.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="rounded-2xl bg-gradient-card border border-border/60 shadow-card p-6 md:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                placeholder="e.g. Rahul Kumar"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={80}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service">Service</Label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger id="service">
                  <SelectValue placeholder="Choose a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="file">File (optional)</Label>
            <label
              htmlFor="file"
              className="flex items-center gap-3 px-4 py-3 rounded-md border border-dashed border-input bg-background hover:bg-accent/50 cursor-pointer transition-colors"
            >
              <Upload className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground truncate">
                {fileName || "Click to attach a file (you'll send it on WhatsApp)"}
              </span>
              <input
                id="file"
                type="file"
                className="hidden"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
              />
            </label>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Describe your order — pages, color, deadline…"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={500}
              rows={4}
              required
            />
          </div>

          <Button type="submit" variant="whatsapp" size="lg" className="w-full sm:w-auto">
            <Send className="h-4 w-4" /> Send to WhatsApp
          </Button>
        </motion.form>
      </div>
    </section>
  );
};
