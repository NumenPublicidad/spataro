// components/ServicesProductsSection.jsx
"use client"; // Marca como Client Component para usar Framer Motion

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ServicesProductsSection = () => {
  // Variantes de animación para el título principal
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  // Variantes de animación para el párrafo introductorio
  const introTextVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  // Variantes de animación para cada tarjeta de servicio/producto
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: i * 0.15 + 0.6 // Retraso escalonado para cada tarjeta
      }
    })
  };

  const services = [
    {
      title: "LUXURY TREATMENTS",
      description: "Descubre nuestros tratamientos exclusivos para un bienestar profundo y resultados visibles.",
      link: "/treatments",
      bgColor: "bg-gradient-to-br from-white to-gray-50",
      textColor: "text-gray-800",
      hoverShadow: "hover:shadow-xl",
    },
    {
      title: "EXCLUSIVE BEAUTY PRODUCTS",
      description: "Una selección curada de productos de belleza natural de alta calidad.",
      link: "/products",
      bgColor: "bg-gradient-to-br from-gray-50 to-white",
      textColor: "text-gray-800",
      hoverShadow: "hover:shadow-xl",
    },
    {
      title: "HOME DECOR",
      description: "Elementos para transformar tu hogar en un santuario de bienestar.",
      link: "/decor",
      bgColor: "bg-gradient-to-br from-white to-gray-50",
      textColor: "text-gray-800",
      hoverShadow: "hover:shadow-xl",
    },
    {
      title: "GC ACADEMY",
      description: "Formación y talleres para profesionales y amantes de la belleza natural.",
      link: "/academy",
      bgColor: "bg-gradient-to-br from-gray-50 to-white",
      textColor: "text-gray-800",
      hoverShadow: "hover:shadow-xl",
    },
  ];

  return (
    <motion.section
      className="bg-white py-16 md:py-24 text-center overflow-hidden"
      initial="hidden"
      whileInView="visible" // Anima cuando el componente entra en el viewport
      viewport={{ once: true, amount: 0.2 }} // Solo una vez y cuando el 20% del componente es visible
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h2
          className="font-serif text-3xl md:text-5xl lg:text-6xl mb-6 md:mb-8 tracking-tight text-gray-900 leading-tight"
          variants={titleVariants}
        >
          NATURAL BEAUTY IS A STATE OF MIND
        </motion.h2>

        <motion.p
          className="font-sans text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8 md:mb-10 text-gray-700"
          variants={introTextVariants}
        >
          Nuestro modo de pensar la belleza natural se refleja en cada servicio, tratamiento y producto propuesto, que respeta exactamente nuestra ética y filosofía.
        </motion.p>
        <motion.p
          className="font-sans text-lg md:text-xl font-semibold mb-10 md:mb-12 text-gray-800"
          variants={introTextVariants} // Reutilizamos la misma animación o creamos una nueva si queremos un efecto diferente
        >
          Descubre lo que tenemos para ofrecerte:
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col justify-between items-center text-center transition-all duration-300 ease-in-out ${service.bgColor} ${service.hoverShadow}`}
              variants={cardVariants}
              custom={index} // Pasa el índice para el escalonamiento de la animación
            >
              <h3 className={`font-sans text-xl md:text-2xl font-semibold mb-3 ${service.textColor}`}>
                {service.title}
              </h3>
              <p className={`font-sans text-sm md:text-base mb-6 ${service.textColor} opacity-90`}>
                {service.description}
              </p>
              <Link
                href={service.link}
                className="no-underline text-rose-600 font-bold font-sans text-sm md:text-base hover:text-rose-700 hover:underline transition-colors duration-200 mt-auto" // mt-auto empuja el link hacia abajo
              >
                Más información &gt;
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesProductsSection;