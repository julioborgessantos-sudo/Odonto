import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
             <a href="#" className="flex items-center gap-3 text-white mb-6 group">
               <div className="w-10 h-10 border border-slate-600 rounded-full flex items-center justify-center font-serif italic text-lg group-hover:border-primary-500 group-hover:text-primary-500 transition-colors">
                 BA
               </div>
               <div className="flex flex-col">
                  <span className="font-heading font-bold text-lg leading-none">Dra. Bianca Arissa</span>
               </div>
            </a>
            <p className="text-sm leading-relaxed opacity-70 mb-6 font-light">
              Odontologia com alma e precisão técnica. Agende sua visita e descubra uma nova experiência em cuidado bucal.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-primary-600 hover:border-primary-600 transition-all text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-primary-600 hover:border-primary-600 transition-all text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-primary-600 hover:border-primary-600 transition-all text-white">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:pl-8">
            <h4 className="text-white font-serif font-medium text-lg mb-6">Navegação</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map(item => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-primary-400 transition-colors text-sm tracking-wide">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif font-medium text-lg mb-6">Contato</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-500 shrink-0 mt-0.5" size={18} />
                <span>Edifício Medical Center<br />Av. Paulista, 1000 - Cj. 1205</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary-500 shrink-0" size={18} />
                <span>(19) 99166-1916</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary-500 shrink-0" size={18} />
                <span>contato@drabianca.com.br</span>
              </li>
            </ul>
          </div>

           {/* Hours */}
           <div>
            <h4 className="text-white font-serif font-medium text-lg mb-6">Atendimento</h4>
            <ul className="space-y-4 text-sm font-light">
               <li className="flex items-start gap-3">
                <Clock className="text-primary-500 shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-white mb-1">Segunda a Sexta</p>
                  <p className="opacity-60">09:00 às 19:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                 <div className="w-[18px]"></div> {/* Spacer */}
                <div>
                  <p className="text-white mb-1">Sábados (Quinzenal)</p>
                  <p className="opacity-60">09:00 às 13:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-50 font-light">
          <p>&copy; {new Date().getFullYear()} Dra. Bianca Arissa. Todos os direitos reservados.</p>
          <p>Responsável Técnico: Dra. Bianca Arissa - CRO/SP 123456</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;