import React from 'react';
import { BENEFITS } from '../constants';
import FadeIn from './FadeIn';

const Features: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold tracking-wider text-sm uppercase">Diferenciais</span>
          <h2 className="text-3xl font-heading font-bold text-slate-900 mt-2">Por que escolher a OdontoPrime?</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.id} delay={index * 0.1} className="h-full">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;