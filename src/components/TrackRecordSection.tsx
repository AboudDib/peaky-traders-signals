import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TrendingUp, Award, Users, DollarSign } from "lucide-react";
import { useEffect, useState } from "react";

const TrackRecordSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: TrendingUp,
      end: 95,
      suffix: "%+",
      label: "Win Rate",
      description: "Consistently accurate signals",
    },
    {
      icon: Award,
      end: 500,
      suffix: "+",
      label: "Successful Trades",
      description: "Proven track record",
    },
    {
      icon: Users,
      end: 5000,
      suffix: "+",
      label: "Active Members",
      description: "Growing community",
    },
    {
      icon: DollarSign,
      end: 1000,
      suffix: "+",
      label: "Avg. Monthly Pips",
      description: "Delivered to our members",
    },
  ];

  return (
    <section id="track-record" className="py-24 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="mb-4">
            <span className="text-primary font-heading font-bold text-lg">
              Our Results
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-6">
            Proven <span className="text-gradient-gold">Track Record</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Numbers don't lie. See how our guidance helps traders make smarter,
            more confident decisions every single day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              {...stat}
              inView={inView}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass max-w-5xl mx-auto p-8 md:p-12 rounded-2xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Real Results, Real Trust
            </h3>
            <p className="text-muted-foreground text-lg">
              {/* TODO: Add specific examples of recent winning trades or monthly performance */}
              Our members consistently see positive results month after month.
              From beginners to experienced traders, everyone benefits from our
              precise signals and expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card/50 p-6 rounded-xl border border-primary/30">
              <h4 className="text-xl font-heading font-bold mb-2 text-primary">
                Recent Highlights
              </h4>
              <p className="text-muted-foreground">
                {/* TODO: Insert recent winning trades, monthly performance stats */}
                This month: 47 winning trades, 2 losses. Average ROI of 8.5% for
                members following our signals with recommended risk management.
              </p>
            </div>
            <div className="bg-card/50 p-6 rounded-xl border border-secondary/30">
              <h4 className="text-xl font-heading font-bold mb-2 text-secondary">
                Member Testimonials
              </h4>
              <p className="text-muted-foreground">
                {/* TODO: Add real member testimonials */}
                "Peaky Traders changed my trading game completely. Clear signals,
                excellent support, and consistent results." - Alex M.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground italic">
              * Past performance does not guarantee future results. Trading involves
              risk. Always trade responsibly.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StatCard = ({
  icon: Icon,
  end,
  suffix,
  label,
  description,
  inView,
  delay,
}: {
  icon: any;
  end: number;
  suffix: string;
  label: string;
  description: string;
  inView: boolean;
  delay: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      const duration = 2000; // 2 seconds

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, end]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, scale: 1.03 }}
      className="glass p-8 rounded-2xl text-center group cursor-pointer"
    >
      <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors duration-300">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <div className="text-4xl md:text-5xl font-heading font-black text-gradient-primary mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-xl font-heading font-bold mb-2">{label}</div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default TrackRecordSection;
