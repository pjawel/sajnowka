import { Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-ink/5 bg-bg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-serif font-bold text-sm">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-tight text-ink leading-none">Sajnówka</span>
            <span className="text-[8px] uppercase tracking-[0.2em] text-accent font-bold">© 2026 Sala Bankietowa</span>
          </div>
        </div>

        <div className="flex items-center gap-8 text-[10px] uppercase font-bold tracking-[0.2em] text-ink/40">
          <a href="#galeria" className="hover:text-accent transition-colors">Galeria</a>
          <a href="#pamiatki" className="hover:text-accent transition-colors">Relacje</a>
          <a href="#opinie" className="hover:text-accent transition-colors">Opinie</a>
          <a href="https://www.facebook.com/sajnowka" target="_blank" rel="noopener noreferrer" className="text-ink hover:text-accent transition-colors">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
