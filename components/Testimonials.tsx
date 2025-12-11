import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import FadeIn from './FadeIn';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-primary-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">O que dizem nossos pacientes</h2>
          <p className="text-primary-100 text-lg">
            A satisfação de quem já transformou o sorriso conosco é a nossa maior garantia de qualidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, index) => (
            <FadeIn key={t.id} delay={index * 0.1}>
              <div className="bg-white/10 backdrop-blur-md p-6 lg:p-8 rounded-2xl border border-white/10 h-full flex flex-col hover:bg-white/15 transition-colors">
                <Quote className="text-primary-400 mb-4 opacity-50" size={32} />
                
                <p className="text-primary-50 mb-6 italic flex-grow text-sm md:text-base leading-relaxed">
                  "{t.content}"
                </p>
                
                {/* Footer do Card com Flex Wrap para responsividade */}
                <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <img 
                      src={`https://picsum.photos/50/50?random=${300 + index}`} 
                      alt={t.name} 
                      className="w-10 h-10 rounded-full border-2 border-primary-400 shrink-0 object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-white text-sm leading-tight">{t.name}</h4>
                      <span className="text-xs text-primary-300 block mt-0.5">{t.role}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 shrink-0">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;