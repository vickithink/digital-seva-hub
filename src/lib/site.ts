export const SITE = {
  name: "Digital Seva Desk",
  fullName: "Digital Seva Desk Saharsa",
  tagline: "All Student Services in One Place",
  phone: "+91 98765 43210",
  whatsappNumber: "919876543210", // no + or spaces
  location: "Saharsa, Bihar",
};

export const waLink = (message = "Hi! I'd like to order a service from Digital Seva Desk.") =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
