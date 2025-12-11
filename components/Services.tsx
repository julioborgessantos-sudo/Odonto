import React from 'react';
import { SERVICES } from '../constants';
import FadeIn from './FadeIn';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <span className="text-primary-600 font-semibold tracking-wider text-sm uppercase">Tratamentos</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2">
              Cuidamos do seu sorriso <br /> com excelência.
            </h2>
          </div>
          <a href="#appointment" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
            Ver todos os tratamentos &rarr;
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.id} delay={index * 0.1}>
                <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
                  <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;