import { Phone, MessageCircle } from "lucide-react";

const FloatingActions = () => {
  return (
    <div className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/919717440336"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-3 px-4 py-3 rounded-full bg-green-500 text-white shadow-elevated hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="font-semibold hidden sm:inline">WhatsApp</span>
      </a>
      <a
        href="tel:+919717440336"
        className="flex items-center gap-3 px-4 py-3 rounded-full bg-primary text-primary-foreground shadow-elevated hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
        aria-label="Call Big Spoon"
      >
        <Phone className="w-5 h-5" />
        <span className="font-semibold hidden sm:inline">Call Us</span>
      </a>
    </div>
  );
};

export default FloatingActions;

