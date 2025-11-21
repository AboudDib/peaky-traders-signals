import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Gift, Users, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";

const ReferralSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const referralCards = [
    {
      icon: Users,
      title: "Free Telegram Group",
      description:
        "Join our free community to get started. Access daily market insights, basic signals, and connect with fellow traders.",
      buttonText: "Join Free Group",
      link: "", // TODO: Insert Free Telegram referral link
      gradient: "from-primary to-primary-glow",
      badge: "Free",
    },
    {
      icon: Gift,
      title: "Paid Telegram Group",
      description:
        "Unlock premium signals, detailed trade breakdowns, priority support, and advanced market analysis. Take your trading to the next level.",
      buttonText: "Join Premium",
      link: "", // TODO: Insert Paid Telegram referral link
      gradient: "from-secondary to-[hsl(38_92%_50%)]",
      badge: "Premium",
      featured: true,
    },
    {
      icon: TrendingUp,
      title: "CFI Broker Referral",
      description:
        "Trade with our recommended broker CFI. Get exclusive benefits, competitive spreads, and seamless integration with our signals.",
      buttonText: "Sign Up with CFI",
      link: "", // TODO: Insert CFI referral link
      gradient: "from-accent to-[hsl(210_100%_70%)]",
      badge: "Partner",
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
    <section id="referral" className="py-24 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-primary font-heading font-bold text-lg">
              Join Our Community
            </span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-heading font-black mb-6"
          >
            Choose Your <span className="text-gradient-gold">Path</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Whether you're just starting out or ready to go premium, we have the
            perfect option for you. Join thousands of successful traders today.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {referralCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`glass p-8 rounded-2xl relative overflow-hidden group ${
                card.featured ? "md:scale-105 border-2 border-secondary/50" : ""
              }`}
            >
              {/* Badge */}
              <div
                className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${card.gradient} text-background`}
              >
                {card.badge}
              </div>

              {/* Featured label */}
              {card.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-secondary text-background rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <card.icon className="w-8 h-8 text-background" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-heading font-bold mb-4">
                {card.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed min-h-[100px]">
                {card.description}
              </p>

              {/* Button */}
              <Button
                size="lg"
                className={`w-full font-bold bg-gradient-to-r ${card.gradient} hover:opacity-90 text-background transition-all duration-300 ${
                  card.featured ? "animate-pulse-glow" : ""
                }`}
                onClick={() => {
                  if (card.link) {
                    window.open(card.link, "_blank");
                  } else {
                    alert(
                      "TODO: Insert referral link for " + card.title
                    );
                  }
                }}
              >
                {card.buttonText}
              </Button>

              {/* Hover gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
              />
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
              Not Sure Which to Choose?
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Start with our <strong>Free Telegram Group</strong> to experience
              the Peaky Traders difference. When you're ready for premium signals
              and advanced features, upgrading is seamless. Questions? Our team is
              here to help you every step of the way.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReferralSection;
