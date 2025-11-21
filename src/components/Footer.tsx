import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Send, Twitter, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
        >
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* TODO: Insert Peaky Traders logo link here */}
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center font-bold text-xl">
                PT
              </div>
              <span className="text-xl font-heading font-bold text-gradient-primary">
                Peaky Traders
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Trade smarter, with confidence and clarity. Join our community of
              successful traders today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "#about", label: "About Us" },
                { href: "#services", label: "Services" },
                { href: "#track-record", label: "Track Record" },
                { href: "#referral", label: "Join Us" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all duration-300"
              >
                <Send size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              Join our Telegram for instant signals and updates
            </p>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-border pt-8 text-center"
        >
          <p className="text-muted-foreground mb-4">
            With <span className="text-primary font-semibold">Peaky Traders</span>
            , you trade with confidence and clarity.
          </p>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Peaky Traders. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            Trading involves risk. Past performance does not guarantee future
            results. Always trade responsibly.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
