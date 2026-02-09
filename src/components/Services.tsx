import { motion, AnimatePresence } from "framer-motion";
import { Stethoscope, Home, Baby, Brain, HeartPulse, Pill, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const services = [
  {
    icon: Stethoscope,
    title: "General Nursing Care",
    description: "Professional nursing services including wound care, injections, IV therapy, and vital monitoring.",
    features: ["Wound dressing", "Medication management", "Health monitoring"],
    expandedFeatures: [
      "IV therapy & injections",
      "Vital signs monitoring",
      "Blood sugar testing",
      "Catheter care & management",
      "Oxygen therapy support",
      "Post-hospitalization care",
    ],
    availability: "Available 24/7 for emergency and scheduled visits",
  },
  {
    icon: Home,
    title: "Home Health Aide",
    description: "Personal care assistance with daily activities to maintain comfort and dignity at home.",
    features: ["Bathing & hygiene", "Mobility assistance", "Meal preparation"],
    expandedFeatures: [
      "Light housekeeping",
      "Companionship & emotional support",
      "Errand assistance",
      "Grocery shopping",
      "Laundry & clothing care",
      "Transportation to appointments",
    ],
    availability: "Flexible scheduling - hourly, daily, or live-in options",
  },
  {
    icon: Baby,
    title: "Mother & Baby Care",
    description: "Specialized post-natal care for new mothers and newborn babies in the comfort of your home.",
    features: ["Newborn care", "Breastfeeding support", "Mother's recovery"],
    expandedFeatures: [
      "Umbilical cord care & bathing",
      "Sleep training guidance",
      "Postpartum wellness monitoring",
      "Baby massage techniques",
      "Feeding schedule management",
      "Mother's nutrition counseling",
    ],
    availability: "Day and night shifts available for first 40 days",
  },
  {
    icon: Brain,
    title: "Dementia & Elderly Care",
    description: "Compassionate care for seniors with dementia, Alzheimer's, or age-related conditions.",
    features: ["Memory care", "Safety supervision", "Companionship"],
    expandedFeatures: [
      "Daily routine assistance",
      "Fall prevention strategies",
      "Medication reminders",
      "Cognitive stimulation activities",
      "Wandering prevention",
      "Family respite care",
    ],
    availability: "24-hour care options with trained dementia specialists",
  },
  {
    icon: HeartPulse,
    title: "Post-Surgery Care",
    description: "Recovery support after hospital discharge to ensure smooth healing and rehabilitation.",
    features: ["Wound management", "Physical therapy", "Recovery monitoring"],
    expandedFeatures: [
      "Pain management support",
      "Mobility exercises",
      "Nutrition guidance",
      "Surgical site monitoring",
      "Medication administration",
      "Follow-up appointment coordination",
    ],
    availability: "Short-term and extended recovery programs available",
  },
  {
    icon: Pill,
    title: "Chronic Disease Management",
    description: "Ongoing care for diabetes, hypertension, heart disease, and other chronic conditions.",
    features: ["Regular check-ups", "Medication reminders", "Diet guidance"],
    expandedFeatures: [
      "Blood pressure monitoring",
      "Diabetes care & insulin management",
      "Lifestyle counseling",
      "Exercise programs",
      "Health education",
      "Emergency response planning",
    ],
    availability: "Weekly, bi-weekly, or monthly care plans",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, rotateX: 15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const Services = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (title: string) => {
    setExpandedCard(expandedCard === title ? null : title);
  };

  return (
    <section id="services" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-primary font-semibold text-sm uppercase tracking-wider"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-2 mb-4"
          >
            Comprehensive Healthcare Solutions
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
            From nursing care to specialized treatments, we offer a full range of
            home healthcare services tailored to your needs.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: 1000 }}
        >
          {services.map((service) => {
            const isExpanded = expandedCard === service.title;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                layout
                whileHover={{
                  y: -6,
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.12)",
                  transition: { duration: 0.3 },
                }}
                className="bg-card border border-border rounded-xl p-6 transition-colors duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <h3 className="text-xl font-heading font-semibold text-secondary">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">{service.description}</p>

                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-gold"
                        whileHover={{ scale: 2 }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border pt-4 mt-2">
                        <p className="text-sm font-semibold text-secondary mb-3">Additional Services:</p>
                        <ul className="space-y-2 mb-4">
                          {service.expandedFeatures.map((feature, i) => (
                            <motion.li
                              key={feature}
                              className="flex items-center gap-2 text-sm text-foreground"
                              initial={{ opacity: 0, x: -15 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                        <motion.div
                          className="bg-muted rounded-lg p-3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <p className="text-sm text-muted-foreground">
                            <span className="font-semibold text-secondary">Availability: </span>
                            {service.availability}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-4"
                  onClick={() => toggleCard(service.title)}
                >
                  {isExpanded ? "Show Less" : "Learn More"}
                  <motion.span
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-2"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </Button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
