import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 py-12"
        >
          <span className="section-label">Elegancja & Profesjonalizm</span>
          <h1 className="text-7xl md:text-8xl lg:text-[110px] font-serif text-ink leading-[0.85] tracking-[-0.04em] mb-8">
            Wyjątkowe <br /> <span className="italic">Chwile.</span>
          </h1>
          <p className="text-ink/70 text-lg md:text-xl font-light max-w-md leading-relaxed mb-10">
            Profesjonalna obsługa wesel, bankietów oraz imprez okolicznościowych w sercu Mogilna. Tworzymy wspomnienia, które zostają na zawsze.
          </p>
          
          <div className="flex items-center gap-6">
            <div className="w-12 h-[1px] bg-accent" />
            <a 
              href="#kontakt" 
              className="font-serif italic text-xl text-accent hover:text-ink transition-colors"
            >
              Zapraszamy do kontaktu
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-full flex justify-center lg:justify-end py-12"
        >
          <div className="w-full max-w-[500px] aspect-[4/5] bg-accent-light rounded-t-[250px] border border-accent/20 overflow-hidden relative group">
            <div className="absolute inset-0 bg-accent/5 z-10" />
            <img 
              src="https://scontent-waw2-2.xx.fbcdn.net/v/t51.82787-15/559416618_18093942274770958_5746697178324289551_n.jpg?stp=dst-jpegr_tt6&_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_ohc=4r5hUyGmUuIQ7kNvwFxpC-5&_nc_oc=AdpjlZRcBmTGw7P40pDPjjgchFITMJc8j-rGhffOaLBUUVh_n24_GbBvJfr2yELFBxE&_nc_zt=23&se=-1&_nc_ht=scontent-waw2-2.xx&_nc_gid=XtK8hptgTqdYHGqxk--iaQ&_nc_ss=7a3a8&oh=00_Af1s81ZCIJa7HaBr0-4l0JObClQEsBw7byGZapIg4-CrUQ&oe=69EE3032" 
              alt="Sala Sajnówka" 
              className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
               <span className="font-serif italic text-3xl text-white/20 select-none pointer-events-none -rotate-90 origin-center whitespace-nowrap">SAJNÓWKA</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent/30 hidden lg:block">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll Down</span>
      </div>
    </section>
  );
}
