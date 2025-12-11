import React from 'react';
import { Star, Award, Heart } from 'lucide-react';
import FadeIn from './FadeIn';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side - Portrait of the Doctor */}
          <FadeIn className="relative order-2 lg:order-1">
            <div className="relative rounded-t-full rounded-b-[100px] overflow-hidden border-[8px] border-primary-50 shadow-2xl max-w-md mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" 
                alt="Dra. Bianca Arissa" 
                className="w-full h-auto object-cover aspect-[3/4]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
              <div className="absolute bottom-8 left-0 w-full text-center text-white">
                <p className="font-serif italic text-2xl">Dra. Bianca Arissa</p>
                <p className="text-xs tracking-widest uppercase opacity-80 mt-1">CRO 123456</p>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute top-10 -right-4 md:right-0 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-pulse-slow">
               <div className="bg-primary-100 p-2 rounded-full text-primary-600">
                 <Award size={24} />
               </div>
               <div>
                 <p className="text-xs text-slate-500 font-semibold">Especialista em</p>
                 <p className="text-sm font-bold text-slate-900">Estética Dental</p>
               </div>
            </div>
          </FadeIn>

          {/* Text Side */}
          <FadeIn delay={0.2} className="order-1 lg:order-2">
            <span className="text-primary-600 font-semibold tracking-wider text-sm uppercase">Sobre a Especialista</span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-slate-900 mt-3 mb-6 leading-tight">
              Paixão por detalhes, <br/> compromisso com você.
            </h2>
            
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              "Acredito que a odontologia vai muito além de tratar dentes. É sobre devolver a autoestima e a liberdade de sorrir sem medos."
            </p>

            <p className="text-slate-600 mb-8 leading-relaxed">
              Formada com honras e pós-graduada em Odontologia Estética e Reabilitação Oral, a Dra. Bianca Arissa dedica sua carreira a aperfeiçoar técnicas minimamente invasivas. Seu consultório foi desenhado para ser um refúgio de tranquilidade, onde a tecnologia de ponta encontra o acolhimento humano.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="bg-primary-50 w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-primary-600">
                  <Star size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Excelência Técnica</h4>
                  <p className="text-sm text-slate-500 mt-1">Atualização constante em congressos internacionais.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary-50 w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-primary-600">
                  <Heart size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Atendimento Exclusive</h4>
                  <p className="text-sm text-slate-500 mt-1">Apenas um paciente por horário, sem pressa.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;