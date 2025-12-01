import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TrendingUp, BarChart3, BookOpen, Shield } from "lucide-react";

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: TrendingUp,
      title: "Premium Forex Signals",
      description:
        "Receive real-time, high-accuracy trading signals with clear entry, stop-loss, and take-profit levels. Our signals are backed by deep market analysis and delivered instantly to your Telegram.",
      gradient: "from-accent to-emerald",
    },
    {
      icon: BarChart3,
      title: "Trade Breakdowns",
      description:
        "Understand the 'why' behind every signal. We provide detailed market analysis, technical insights, and rationale for each trade, helping you become a better trader.",
      gradient: "from-primary to-secondary",
    },
    {
      icon: BookOpen,
      title: "Market Insights",
      description:
        "Stay ahead with daily market updates, trend analysis, and economic event notifications. Know what's moving the markets and why it matters for your trades.",
      gradient: "from-muted-foreground to-foreground",
    },
    {
      icon: Shield,
      title: "Risk Management Guidance",
      description:
        "Learn professional risk management strategies that protect your capital. We teach you how to size positions, set stops, and manage your portfolio like a pro trader.",
      gradient: "from-accent to-emerald",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-accent font-heading font-bold text-lg">
              What We Offer
            </span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-heading font-black mb-6"
          >
            Our <span className="text-gradient-gold">Premium Services</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Everything you need to trade with confidence, delivered with precision
            and care by our expert team.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass p-8 rounded-2xl group cursor-pointer relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <div className="glass max-w-4xl mx-auto p-8 rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              <span className="text-gradient-green">Results-Driven</span> Approach
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our focus is simple: help you make confident, profitable trades. Every
              signal, every breakdown, every piece of guidance is designed to give
              you an edge in the markets. Join our community and experience the
              difference that professional, reliable signals make.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
