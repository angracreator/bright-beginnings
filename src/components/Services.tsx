import { motion } from "framer-motion";
import { Stethoscope, Home, Baby, Brain, HeartPulse, Pill } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Stethoscope,
    title: "General Nursing Care",
    description: "Professional nursing services including wound care, injections, IV therapy, and vital monitoring.",
    features: ["Wound dressing", "Medication management", "Health monitoring"],
  },
  {
    icon: Home,
    title: "Home Health Aide",
    description: "Personal care assistance with daily activities to maintain comfort and dignity at home.",
    features: ["Bathing & hygiene", "Mobility assistance", "Meal preparation"],
  },
  {
    icon: Baby,
    title: "Mother & Baby Care",
    description: "Specialized post-natal care for new mothers and newborn babies in the comfort of your home.",
    features: ["Newborn care", "Breastfeeding support", "Mother's recovery"],
  },
  {
    icon: Brain,
    title: "Dementia & Elderly Care",
    description: "Compassionate care for seniors with dementia, Alzheimer's, or age-related conditions.",
    features: ["Memory care", "Safety supervision", "Companionship"],
  },
  {
    icon: HeartPulse,
    title: "Post-Surgery Care",
    description: "Recovery support after hospital discharge to ensure smooth healing and rehabilitation.",
    features: ["Wound management", "Physical therapy", "Recovery monitoring"],
  },
  {
    icon: Pill,
    title: "Chronic Disease Management",
    description: "Ongoing care for diabetes, hypertension, heart disease, and other chronic conditions.",
    features: ["Regular check-ups", "Medication reminders", "Diet guidance"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-wider"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-2 mb-4"
          >
            Comprehensive Healthcare Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            From nursing care to specialized treatments, we offer a full range of
            home healthcare services tailored to your needs.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-secondary">
                  {service.title}
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" size="sm" className="w-full">
                Learn More
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
