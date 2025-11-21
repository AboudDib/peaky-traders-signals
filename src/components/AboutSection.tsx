import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Heart, Users } from "lucide-react";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id="about" className="py-24 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-primary font-heading font-bold text-lg">
              About Us
            </span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-heading font-black mb-6"
          >
            Who Are <span className="text-gradient-primary">Peaky Traders</span>?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            We're a team of professional Forex traders dedicated to making trading
            simple, confident, and stress-free for everyone. With years of market
            experience and a proven track record, we provide premium signals that
            help traders at all levels make smarter decisions.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {[
            {
              icon: Target,
              title: "Our Mission",
              description:
                "To empower traders worldwide with accurate, timely signals and expert guidance, helping them achieve financial freedom through smart, confident trading decisions.",
            },
            {
              icon: Heart,
              title: "Our Values",
              description:
                "Transparency, reliability, and community. We believe in honest communication, proven results, and building lasting relationships with our members.",
            },
            {
              icon: Users,
              title: "Our Community",
              description:
                "Join thousands of traders who trust Peaky Traders daily. We're more than signals—we're a supportive community that grows together.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              className="glass p-8 rounded-2xl gradient-border hover:shadow-primary transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <card.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>
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
              Why Choose <span className="text-gradient-gold">Peaky Traders</span>?
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We combine <strong>speed</strong>, <strong>accuracy</strong>, and{" "}
              <strong>simplicity</strong> to deliver signals you can trust. Our team
              analyzes the markets 24/7, so you don't have to. Whether you're a
              beginner or an experienced trader, we provide the insights and support
              you need to trade with confidence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
