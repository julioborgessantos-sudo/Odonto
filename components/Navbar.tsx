import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Text color logic based on scroll state
  const textColorClass = scrolled ? 'text-slate-600' : 'text-white/90';
  const logoColorClass = scrolled ? 'text-primary-900' : 'text-white';
  const hoverColorClass = scrolled ? 'hover:text-primary-600' : 'hover:text-white';
  const buttonClass = scrolled 
    ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-primary-500/30' 
    : 'bg-white text-primary-600 hover:bg-primary-50 shadow-white/10';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center lg:gap-12">
        {/* Logo Moderno */}
        <a href="#" className={`flex items-center gap-3 shrink-0 hover:opacity-90 transition-opacity duration-300 ${logoColorClass}`}>
          <div className={`w-10 h-10 border-2 rounded-full flex items-center justify-center font-serif italic font-bold text-xl ${scrolled ? 'border-primary-600 text-primary-600' : 'border-white text-white'}`}>
            BA
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg leading-tight tracking-wide">Dra. Bianca Arissa</span>
            <span className={`text-[10px] uppercase tracking-[0.2em] ${scrolled ? 'text-slate-500' : 'text-white/70'}`}>Odontologia</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className={`${textColorClass} ${hoverColorClass} font-medium transition-colors text-sm whitespace-nowrap tracking-wide`}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#appointment"
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-medium text-sm transition-all shadow-lg whitespace-nowrap ${buttonClass}`}
          >
            Agendar Consulta
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-slate-700' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl lg:hidden flex flex-col p-4 border-t">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="py-3 px-4 text-slate-700 hover:bg-primary-50 rounded-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#appointment"
            className="mt-4 bg-primary-600 text-white text-center py-3 rounded-lg font-bold flex items-center justify-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <Phone size={18} />
            Agendar Consulta
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;