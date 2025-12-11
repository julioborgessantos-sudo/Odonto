import React, { useState, FormEvent } from 'react';
import { Calendar, CheckCircle, Loader2 } from 'lucide-react';
import { SERVICES } from '../constants';
import FadeIn from './FadeIn';

const AppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulação rápida de loading para feedback visual
    setTimeout(() => {
      const phoneNumber = "5519991661916";
      
      // Formatação da mensagem para o WhatsApp
      const message = `*Olá! Gostaria de agendar uma consulta na Dra. Bianca Arissa.*\n\n` +
        `*Nome:* ${formData.name}\n` +
        `*Telefone:* ${formData.phone}\n` +
        `*E-mail:* ${formData.email}\n` +
        `*Interesse:* ${formData.service}\n` +
        `*Data Preferida:* ${formData.date}\n` +
        `*Período:* ${formData.time}`;

      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      
      // Abre o WhatsApp em nova aba
      window.open(whatsappUrl, '_blank');

      setStatus('success');
      setFormData({ name: '', phone: '', email: '', service: '', date: '', time: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses = "w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-slate-400 font-light";

  return (
    <section id="appointment" className="py-24 bg-primary-50/50 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="bg-primary-700 p-10 md:w-2/5 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Texture overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            <div className="relative z-10">
              <span className="uppercase tracking-widest text-xs font-semibold mb-2 block opacity-70">Contato</span>
              <h3 className="text-3xl font-serif font-medium mb-6">Agende sua visita</h3>
              <p className="text-primary-100 mb-8 font-light leading-relaxed">
                Dê o primeiro passo para o sorriso que você merece. Preencha seus dados e nossa concierge entrará em contato.
              </p>
              
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-widest opacity-60 mb-1">Localização</p>
                  <p className="font-medium">Edifício Medical Center</p>
                  <p className="text-sm opacity-80">Av. Paulista, 1000 - Jardins</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest opacity-60 mb-1">Telefone / WhatsApp</p>
                  <p className="font-medium text-lg">(19) 99166-1916</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10 md:w-3/5">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} />
                </div>
                <h4 className="text-2xl font-heading font-bold text-slate-900 mb-2">Redirecionando...</h4>
                <p className="text-slate-600 font-light max-w-xs mx-auto">
                  Estamos abrindo o WhatsApp para finalizar seu agendamento. Caso não abra, verifique seus pop-ups.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-primary-600 font-semibold hover:underline text-sm uppercase tracking-wide"
                >
                  Novo Agendamento
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-wider font-bold text-slate-500">Nome Completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs uppercase tracking-wider font-bold text-slate-500">Telefone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-wider font-bold text-slate-500">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-xs uppercase tracking-wider font-bold text-slate-500">Interesse</label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="" disabled>Selecione o tratamento</option>
                    {SERVICES.map(s => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Avaliação Geral">Avaliação Estética</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                   <div className="space-y-2">
                    <label htmlFor="date" className="text-xs uppercase tracking-wider font-bold text-slate-500">Data Ideal</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                   <div className="space-y-2">
                    <label htmlFor="time" className="text-xs uppercase tracking-wider font-bold text-slate-500">Período</label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="" disabled>Selecione</option>
                      <option value="Manhã">Manhã</option>
                      <option value="Tarde">Tarde</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-4 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 mt-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Abrindo WhatsApp...
                    </>
                  ) : (
                    <>
                      Confirmar Solicitação
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Botão Flutuante do WhatsApp */}
      <a
        href="https://wa.me/5519991661916"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[60] bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-medium ml-0 group-hover:ml-3">
          Agende no WhatsApp
        </span>
      </a>
    </section>
  );
};

export default AppointmentForm;