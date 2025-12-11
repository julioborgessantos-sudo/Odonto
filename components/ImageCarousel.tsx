import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1920&auto=format&fit=crop", // Sorriso feminino clean (Fundo neutro, sem distrações)
  "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1920", // Sorriso Brilhante Close-up
  "https://images.unsplash.com/photo-1600172454557-88c96320230b?auto=format&fit=crop&q=80&w=1920"  // Textura Suave / Clean Teal
];

const ImageCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-900 select-none">
      <AnimatePresence mode='popLayout'>
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.0 }} 
          exit={{ opacity: 0 }}
          transition={{ duration: 2.0, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Ambiente odontológico e sorrisos saudáveis"
        />
      </AnimatePresence>
      
      {/* Dark Overlay com gradiente para garantir leitura perfeita do texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/60 z-10" />
    </div>
  );
};

export default ImageCarousel;