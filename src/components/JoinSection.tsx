import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Send, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const JoinSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="join" className="py-24 bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)/0.15),transparent_70%)]" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <Sparkles className="w-16 h-16 text-accent mx-auto mb-4 animate-pulse" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-black mb-6 leading-tight"
          >
            Ready to{" "}
            <span className="text-gradient-green">Trade Smarter</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Join the Peaky Traders community and start trading with confidence
            today. Get instant access to premium signals, expert analysis, and a
            supportive community.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-12 py-8 glow-green hover:shadow-xl transition-all duration-300 group"
            >
              <Send className="mr-2 group-hover:translate-x-1 transition-transform duration-300" size={24} />
              Join Telegram Now
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass p-8 rounded-2xl max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-heading font-bold mb-4">
              What You'll Get:
            </h3>
            <ul className="text-left text-muted-foreground space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-accent text-2xl">✓</span>
                <span>Real-time Forex signals with clear entry and exit points</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-2xl">✓</span>
                <span>Detailed trade breakdowns and market analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-2xl">✓</span>
                <span>Risk management guidance from professional traders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-2xl">✓</span>
                <span>24/7 community support and exclusive insights</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinSection;
