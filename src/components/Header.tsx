import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "https://siwanhealthcareservices.in/wp-content/uploads/2026/01/LOGO.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center">
            <img 
              src={LOGO_URL} 
              alt="Siwan Healthcare Services" 
              className="h-12 md:h-14"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Button key={link.label} variant="nav" size="sm" asChild>
                <a href={link.href}>{link.label}</a>
              </Button>
            ))}
            <Button size="sm" className="ml-4" asChild>
              <a href="#contact">Book Appointment</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute left-0 right-0 top-full bg-background border-b border-border shadow-lg z-50"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-3 px-4 rounded-lg text-secondary hover:bg-muted transition-colors font-medium"
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4 rotate-[-90deg] text-muted-foreground" />
                    </a>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="pt-2 mt-2 border-t border-border"
                >
                  <Button className="w-full" asChild>
                    <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                      Book Appointment
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
