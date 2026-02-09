import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "Siwan, Haryana, INDIA (136033)",
    href: "https://www.google.com/maps?q=29.88875,76.35026",
    geoHref: "geo:29.88875,76.35026?q=29.88875,76.35026",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 98962 27706",
    href: "tel:+919896227706",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: "Chat with us",
    href: "https://wa.me/919896227706",
  },
  {
    icon: Mail,
    title: "Email",
    content: "support@siwanhealthcareservices.in",
    href: "mailto:support@siwanhealthcareservices.in",
  },
  {
    icon: Clock,
    title: "Hours",
    content: "24/7 Emergency Care Available",
    href: null,
  },
];

const handleLocationClick = (e: React.MouseEvent) => {
  e.preventDefault();
  const lat = 29.88875;
  const lng = 76.35026;
  const geoUri = `geo:${lat},${lng}?q=${lat},${lng}`;
  const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
  const appleMapsUrl = `https://maps.apple.com/?q=${lat},${lng}`;
  const userAgent = navigator.userAgent.toLowerCase();
  const isIOS = /iphone|ipad|ipod/.test(userAgent);
  const isAndroid = /android/.test(userAgent);
  if (isIOS) {
    window.location.href = appleMapsUrl;
  } else if (isAndroid) {
    window.location.href = geoUri;
    setTimeout(() => { window.open(googleMapsUrl, '_blank'); }, 500);
  } else {
    window.open(googleMapsUrl, '_blank');
  }
};

const serviceOptions = [
  "General Nursing Care",
  "Home Health Aide",
  "Mother & Baby Care",
  "Dementia & Elderly Care",
  "Post-Surgery Care",
  "Chronic Disease Management",
  "Other",
];

const contactItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const formFieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.08, duration: 0.4 },
  }),
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    preferredDate: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const subject = encodeURIComponent(`Booking Request: ${formData.service || "Healthcare Service"}`);
    const body = encodeURIComponent(
      `New Booking Request\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nPreferred Date: ${formData.preferredDate || "Not specified"}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:support@siwanhealthcareservices.in?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success("Your email client has been opened. Please send the email to complete your booking request.");
      setFormData({ name: "", phone: "", email: "", service: "", preferredDate: "", message: "" });
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section id="contact" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-wider"
          >
            Book an Appointment
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-2 mb-4"
          >
            Schedule Your Care Today
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 bg-primary mx-auto rounded-full mb-4"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Ready to experience quality home healthcare? Fill out the form below
            and we'll get back to you within 24 hours.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-heading font-semibold text-secondary mb-6"
            >
              Contact Information
            </motion.h3>
            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.title}
                  className="flex items-start gap-4"
                  custom={i}
                  variants={contactItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {info.title === "Address" ? (
                    <motion.button
                      onClick={handleLocationClick}
                      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 hover:bg-primary/20 transition-colors cursor-pointer"
                      aria-label="Open location in maps"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <info.icon className="w-6 h-6 text-primary" />
                    </motion.button>
                  ) : info.href ? (
                    <motion.a
                      href={info.href}
                      target={info.href.startsWith("https") ? "_blank" : undefined}
                      rel={info.href.startsWith("https") ? "noopener noreferrer" : undefined}
                      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 hover:bg-primary/20 transition-colors cursor-pointer"
                      aria-label={info.title}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <info.icon className="w-6 h-6 text-primary" />
                    </motion.a>
                  ) : (
                    <motion.div
                      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                    >
                      <info.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                  )}
                  <div>
                    <h4 className="font-semibold text-secondary">{info.title}</h4>
                    {info.title === "Address" ? (
                      <button
                        onClick={handleLocationClick}
                        className="text-muted-foreground hover:text-primary transition-colors text-left cursor-pointer"
                      >
                        {info.content}
                      </button>
                    ) : info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("https") ? "_blank" : undefined}
                        rel={info.href.startsWith("https") ? "noopener noreferrer" : undefined}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                <Input key="name" type="text" placeholder="Your Full Name *" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="h-12" />,
                <div key="phone-email" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input type="tel" placeholder="Phone Number *" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className="h-12" />
                  <Input type="email" placeholder="Email Address *" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="h-12" />
                </div>,
                <div key="service-date" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} required className="h-12 w-full px-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Select a Service *</option>
                    {serviceOptions.map((service) => (<option key={service} value={service}>{service}</option>))}
                  </select>
                  <Input type="date" placeholder="Preferred Date" value={formData.preferredDate} onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })} className="h-12" min={new Date().toISOString().split("T")[0]} />
                </div>,
                <textarea key="message" placeholder="Tell us about your healthcare needs..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={5} className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />,
              ].map((field, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={formFieldVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {field}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Opening Email..." : "Book Appointment"}
                  </Button>
                </motion.div>
                <p className="text-xs text-muted-foreground text-center mt-4">
                  By submitting this form, your email client will open with the booking details.
                  Send the email to complete your request.
                </p>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
