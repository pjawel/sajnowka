import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Lokalizacja & Kontakt</span>
            <h2 className="text-6xl font-serif text-ink mb-12 italic">Bądźmy w Kontakcie</h2>
            
            <div className="space-y-10">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-accent tracking-widest">Adres</span>
                <p className="font-serif text-2xl text-ink">11 Listopada 24, 88-300 Mogilno</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-accent tracking-widest">Telefon</span>
                <a href="tel:693904256" className="font-serif text-2xl text-ink hover:text-accent transition-colors">693 904 256</a>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-accent tracking-widest">E-mail</span>
                <a href="mailto:sajnowka@gmail.com" className="font-serif text-2xl text-ink hover:text-accent transition-colors">sajnowka@gmail.com</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[480px]"
          >
            <div className="absolute inset-0 border border-ink/10 -translate-x-4 translate-y-4 pointer-events-none" />
            <div className="w-full h-full border-dashed border border-ink/20 p-2">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2419.842104064466!2d17.939124200000002!3d52.66282950000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4704a13f8c9ac1bd%3A0xd90da75335099728!2sSala%20Bankietowa%20SAJN%C3%93WKA!5e0!3m2!1spl!2spl!4v1776842933000!5m2!1spl!2spl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.4] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
