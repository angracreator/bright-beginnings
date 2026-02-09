import { motion } from "framer-motion";
import { Heart, Shield, Clock, Users, Award, Phone } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "Our trained professionals provide warm, empathetic care tailored to each patient's unique needs.",
  },
  {
    icon: Shield,
    title: "Certified Professionals",
    description: "All caregivers are thoroughly vetted, trained, and certified to provide quality healthcare.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock support ensuring you have access to care whenever you need it.",
  },
  {
    icon: Users,
    title: "Family-Centered Approach",
    description: "We work closely with families to ensure comprehensive care coordination.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Regular quality checks and feedback systems to maintain excellent service standards.",
  },
  {
    icon: Phone,
    title: "Easy Communication",
    description: "Direct line to care coordinators for updates, concerns, or schedule changes.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const Features = () => {
  return (
    <section id="about" className="py-20 bg-muted overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-primary font-semibold text-sm uppercase tracking-wider inline-block"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-2 mb-4"
          >
            Your Trusted Healthcare Partner
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 bg-primary mx-auto rounded-full mb-4"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            We combine professional expertise with heartfelt compassion to deliver
            healthcare services that make a real difference in your life.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px -12px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 },
              }}
              className="bg-card p-6 rounded-xl border border-border transition-colors duration-300 group cursor-default"
            >
              <motion.div
                className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <feature.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="text-xl font-heading font-semibold text-secondary mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
