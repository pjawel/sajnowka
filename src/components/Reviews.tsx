import { motion } from 'motion/react';
import { Star, Quote, Facebook } from 'lucide-react';

export default function Reviews() {
  return (
    <section id="opinie" className="py-24 px-6 bg-ink text-bg overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
        >
          <span className="section-label text-accent">Zaufanie & Opinie</span>
          <h2 className="text-5xl md:text-6xl font-serif mb-12 italic leading-tight">Głos Naszych <br /> Gości</h2>
          
          <div className="flex justify-center gap-1 mb-12">
            {[1, 2, 3, 4, 5].map((s) => <Star key={s} fill="#8b7355" color="#8b7355" size={20} />)}
          </div>

          <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-16 text-bg/90 max-w-2xl mx-auto">
            "Najlepsze miejsce na wesele w okolicy! Jedzenie pyszne, obsługa na najwyższym poziomie, a sala prezentuje się przepięknie."
          </p>

          <a 
            href="https://www.facebook.com/sajnowka/reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="editorial-pill text-bg border-accent hover:bg-accent hover:border-accent"
          >
            Zobacz opinie na Facebooku
          </a>
        </motion.div>
      </div>
    </section>
  );
}
