import { motion } from 'motion/react';

const reels = [
  "733373736177819",
  "2465736646956854",
  "292969840061437"
];

export default function Videos() {
  return (
    <section id="pamiatki" className="py-24 px-6 bg-accent-light overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <span className="section-label">Media & Relacje</span>
            <h2 className="text-5xl font-serif text-ink italic leading-tight">Filmowe <br /> Wspomnienia</h2>
          </div>
          <p className="text-ink/60 font-light italic max-w-xs text-right hidden md:block">
            Zajrzyj za kulisy naszych najważniejszych wydarzeń. Zobacz emocje uchwycone w krótkich formach.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {reels.map((id, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-full sm:w-[320px] h-[580px] bg-bg relative"
            >
              <div className="absolute inset-0 border border-ink/10 pointer-events-none z-10" />
              <iframe 
                src={`https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F${id}%2F&show_text=false&width=320&t=0`} 
                width="100%" 
                height="100%" 
                style={{ border: 'none', overflow: 'hidden' }} 
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              ></iframe>
              <div className="absolute inset-x-0 bottom-4 flex justify-center z-20 pointer-events-none">
                 <div className="bg-bg/80 backdrop-blur-sm px-4 py-1 text-[10px] uppercase font-bold tracking-widest text-ink/50 border border-ink/5">Relacja {index + 1}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
