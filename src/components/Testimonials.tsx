import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const initialTestimonials = [
  {
    name: "Sujal Madaan",
    role: "Son of Patient",
    content:
      "The care provided to my elderly mother was exceptional. The nurses were not just professional but treated her like family. Highly recommended!",
    rating: 5,
  },
  {
    name: "Lovepreet Kaur",
    role: "New Mother",
    content:
      "After my delivery, SHS provided wonderful post-natal care. The caregiver was experienced, helpful, and made my recovery so much easier.",
    rating: 5,
  },
  {
    name: "Dr. Rajbir Singh Patlan",
    role: "Referring Physician",
    content:
      "I regularly refer my patients to Siwan Healthcare Services for home care. Their professionalism and quality of care are consistently excellent.",
    rating: 5,
  },
  {
    name: "Davinder Kaur",
    role: "Patient",
    content:
      "Managing my diabetes at home has become so much easier with SHS. Regular monitoring and diet guidance have improved my health significantly.",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    content: "",
    rating: 5,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.content) {
      toast.error("Please fill in your name and testimonial");
      return;
    }

    // Send testimonial via email
    const subject = encodeURIComponent(`New Testimonial from ${formData.name}`);
    const body = encodeURIComponent(
      `New Testimonial Received\n\n` +
      `Name: ${formData.name}\n` +
      `Role: ${formData.role || "Customer"}\n` +
      `Rating: ${"★".repeat(formData.rating)}${"☆".repeat(5 - formData.rating)} (${formData.rating}/5)\n\n` +
      `Testimonial:\n"${formData.content}"\n\n` +
      `---\nThis testimonial was submitted via the website.`
    );
    window.location.href = `mailto:support@siwanhealthcareservices.in?subject=${subject}&body=${body}`;

    const newTestimonial = {
      name: formData.name,
      role: formData.role || "Customer",
      content: formData.content,
      rating: formData.rating,
    };

    setTestimonials([...testimonials, newTestimonial]);
    setFormData({ name: "", role: "", content: "", rating: 5 });
    setShowForm(false);
    toast.success("Your testimonial has been submitted! Please send the email to complete your submission.");
  };

  return (
    <section id="testimonials" className="py-20 bg-muted overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-primary font-semibold text-sm uppercase tracking-wider"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-2 mb-4"
          >
            What Our Clients Say
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
            Real stories from families who trusted us with their healthcare needs.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 40px -12px rgba(0,0,0,0.12)",
                transition: { duration: 0.3 },
              }}
              className="bg-card rounded-xl p-6 border border-border relative group"
            >
              <motion.div
                className="absolute top-4 right-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Quote className="w-8 h-8 text-primary/15 group-hover:text-primary/30 transition-colors" />
              </motion.div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3 + i * 0.08, type: "spring", stiffness: 300 }}
                  >
                    <Star className="w-5 h-5 fill-gold text-gold" />
                  </motion.div>
                ))}
              </div>

              <p className="text-foreground italic mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <motion.div
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </motion.div>
                <div>
                  <p className="font-semibold text-secondary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Add Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          {!showForm ? (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => setShowForm(true)}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Send className="w-4 h-4 mr-2" />
                Share Your Experience
              </Button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="max-w-xl mx-auto bg-card rounded-xl p-6 border border-border"
            >
              <h3 className="text-xl font-heading font-semibold text-secondary mb-4">
                Share Your Testimonial
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                  <Input
                    type="text"
                    placeholder="Your Role (e.g., Patient, Family)"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Your Rating
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.button
                        key={star}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: star })}
                        className="focus:outline-none"
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Star
                          className={`w-8 h-8 transition-colors ${
                            star <= formData.rating
                              ? "fill-gold text-gold"
                              : "text-muted-foreground"
                          }`}
                        />
                      </motion.button>
                    ))}
                  </div>
                </div>

                <textarea
                  placeholder="Share your experience with Siwan Healthcare Services... *"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />

                <div className="flex gap-3">
                  <Button type="submit" className="flex-1">
                    Submit Testimonial
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
