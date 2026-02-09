import { motion } from "framer-motion";
import { Heart, Phone, MessageCircle, MapPin } from "lucide-react";

const LOGO_URL = "https://siwanhealthcareservices.in/wp-content/uploads/2026/01/LOGO.png";

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "General Nursing Care",
    "Home Health Aide",
    "Mother & Baby Care",
    "Dementia Care",
    "Post-Surgery Care",
    "Chronic Disease Management",
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

  return (
    <footer className="bg-secondary text-secondary-foreground overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <motion.div
            className="lg:col-span-1"
            custom={0}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <motion.img
              src={LOGO_URL}
              alt="Siwan Healthcare Services"
              className="h-16 w-auto mb-4 brightness-0 invert opacity-90"
              onError={(e) => { e.currentTarget.src = "/placeholder.svg"; }}
              whileHover={{ scale: 1.05 }}
            />
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Siwan Healthcare Services provides compassionate, professional home
              healthcare services to individuals and families. Serving since 2024.
            </p>
            <p className="text-secondary-foreground/60 text-xs mt-2">
              MSME Reg: UDYAM-HR-09-0056985
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            custom={1}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <h4 className="font-heading font-semibold text-lg mb-4 text-gold">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-gold transition-colors text-sm hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            custom={2}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <h4 className="font-heading font-semibold text-lg mb-4 text-gold">
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((service, i) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                >
                  <span className="text-secondary-foreground/80 text-sm">
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            custom={3}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <h4 className="font-heading font-semibold text-lg mb-4 text-gold">
              Contact Us
            </h4>
            <div className="space-y-3 text-secondary-foreground/80 text-sm">
              <motion.button
                onClick={handleLocationClick}
                className="flex items-center gap-2 hover:text-gold transition-colors text-left cursor-pointer"
                whileHover={{ x: 3 }}
              >
                <MapPin className="w-4 h-4" />
                Siwan, Haryana, INDIA (136033)
              </motion.button>
              <div className="flex items-center gap-3">
                <motion.a
                  href="tel:+919896227706"
                  className="flex items-center gap-2 hover:text-gold transition-colors"
                  whileHover={{ x: 3 }}
                >
                  <Phone className="w-4 h-4" />
                  +91 98962 27706
                </motion.a>
              </div>
              <div className="flex items-center gap-3">
                <motion.a
                  href="https://wa.me/919896227706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-green-400 transition-colors"
                  whileHover={{ x: 3 }}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </motion.a>
              </div>
              <p>
                <motion.a
                  href="mailto:support@siwanhealthcareservices.in"
                  className="hover:text-gold transition-colors"
                  whileHover={{ x: 3 }}
                >
                  support@siwanhealthcareservices.in
                </motion.a>
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-secondary-foreground/20 mt-10 pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-secondary-foreground/60 text-sm text-center md:text-left">
              © 2024-{new Date().getFullYear()} Siwan Healthcare Services. All rights reserved.
            </p>
            <p className="text-secondary-foreground/60 text-sm flex items-center gap-1">
              Made with{" "}
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
              >
                <Heart className="w-4 h-4 fill-gold text-gold" />
              </motion.span>{" "}
              for better healthcare
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
