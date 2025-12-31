import logo from "@/assets/logo.png";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Siwan Healthcare Services" className="h-14 mb-4 bg-background rounded p-2" />
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Siwan Healthcare Services provides compassionate, professional home
              healthcare services to individuals and families across Bihar.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-gold">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-gold">
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-secondary-foreground/80 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-gold">
              Contact Us
            </h4>
            <div className="space-y-2 text-secondary-foreground/80 text-sm">
              <p>Siwan, Bihar, India</p>
              <p>+91 XXXXX XXXXX</p>
              <p>
                <a href="mailto:info@siwanhealthcare.com" className="hover:text-gold transition-colors">
                  info@siwanhealthcare.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-secondary-foreground/60 text-sm text-center md:text-left">
              © {currentYear} Siwan Healthcare Services. All rights reserved.
            </p>
            <p className="text-secondary-foreground/60 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 fill-gold text-gold" /> for better healthcare
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
