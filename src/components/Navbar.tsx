import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Facebook, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#galeria", label: "Galeria" },
    { href: "#pamiatki", label: "Filmy" },
    { href: "#opinie", label: "Opinie" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-ink/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-serif font-bold text-lg shadow-lg shadow-accent/20">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-tight text-ink leading-none">Sajnówka</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-accent font-bold">Sala Bankietowa</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="https://www.facebook.com/sajnowka" 
              target="_blank" 
              rel="noopener noreferrer"
              className="editorial-pill bg-ink text-bg"
            >
              Facebook
            </a>
            <a 
              href="tel:693904256" 
              className="editorial-pill"
            >
              693 904 256
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:hidden text-ink hover:text-accent transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg border-b border-ink/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map(link => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-serif italic text-ink hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-6 border-t border-ink/5 flex flex-col gap-4">
                <a href="tel:693904256" className="flex items-center gap-3 text-ink">
                   <Phone size={18} className="text-accent" />
                   <span className="font-bold">693 904 256</span>
                </a>
                <a href="https://www.facebook.com/sajnowka" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-ink">
                   <Facebook size={18} className="text-accent" />
                   <span className="font-bold">Facebook</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
