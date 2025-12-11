import React from 'react';
import { ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';
import ImageCarousel from './ImageCarousel';

const Hero: React.FC = () => {
  
  const handleScheduleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById('appointment');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      // Aguarda o scroll acontecer para focar no input
      setTimeout(() => {
        const nameInput = document.getElementById('name');
        if (nameInput) {
          nameInput.focus();
        }
      }, 1000);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Background Carousel */}
      <ImageCarousel />

      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <FadeIn className="max-w-5xl mx-auto text-center">
          
          <h2 className="text-white/80 uppercase tracking-[0.3em] text-xs md:text-sm mb-6 font-medium bg-white/10 inline-block px-4 py-1.5 rounded-full backdrop-blur-sm">
            Odontologia de Alta Performance
          </h2>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-tight mb-8 drop-shadow-lg">
            A arte de criar <span className="italic text-primary-100">sorrisos</span> <br className="hidden md:block" />
            que inspiram confiança.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-100 mb-10 leading-relaxed max-w-3xl mx-auto drop-shadow-md opacity-90 font-light">
            Dra. Bianca Arissa une ciência e estética para entregar resultados naturais e exclusivos. Cuide do seu sorriso com quem é referência em excelência.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a 
              href="#appointment"
              onClick={handleScheduleClick}
              className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-full font-medium text-lg shadow-2xl shadow-primary-900/30 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1"
            >
              Agendar Avaliação
              <ArrowRight size={20} />
            </a>
            <a 
              href="#services"
              className="bg-transparent hover:bg-white/10 text-white border border-white/40 px-8 py-4 rounded-full font-medium text-lg transition-all flex items-center justify-center backdrop-blur-sm"
            >
              Conhecer Tratamentos
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator subtle */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block opacity-60">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;