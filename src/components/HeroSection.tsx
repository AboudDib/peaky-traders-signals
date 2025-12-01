import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TrendingUp, Zap, Shield } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const scrollToJoin = () => {
    const element = document.querySelector("#join");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)] -z-10" />
      
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
      />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 text-center z-10"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-semibold">
            Premium Forex Signals
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-black mb-6 leading-tight"
        >
          <span className="text-gradient-primary">Peaky Traders</span>
          <br />
          <span className="text-foreground">Trade With Confidence</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
        >
          Trade smarter, with confidence and clarity. Join thousands of traders
          making informed decisions with our premium Forex signals.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 glow-green hover:shadow-lg transition-all duration-300"
            onClick={scrollToJoin}
          >
            <Zap className="mr-2" size={20} />
            Join Our Telegram
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10 font-semibold text-lg px-8 py-6"
            onClick={() => {
              const element = document.querySelector("#track-record");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Track Record
          </Button>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            {
              icon: TrendingUp,
              title: "95%+ Win Rate",
              description: "Consistently accurate signals",
              color: "text-accent",
            },
            {
              icon: Zap,
              title: "Real-Time Alerts",
              description: "Never miss an opportunity",
              color: "text-primary",
            },
            {
              icon: Shield,
              title: "Risk Management",
              description: "Trade with confidence",
              color: "text-foreground",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass p-6 rounded-xl"
            >
              <feature.icon className={`w-12 h-12 ${feature.color} mb-4 mx-auto`} />
              <h3 className="text-xl font-heading font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
