// components/PhilosophySection.jsx
"use client"; // Marca como Client Component para usar Framer Motion

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const PhilosophySection = () => {
  // Variantes de animación para el título
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  // Variantes de animación para los bloques de texto
  const textBlockVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: i * 0.3 + 0.5, // Retraso escalonado
      },
    }),
  };

  // Variantes de animación para el botón
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 1.2,
      },
    },
  };

  return (
    <motion.section
      className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24 text-center overflow-hidden"
      initial="hidden"
      whileInView="visible" // Anima cuando el componente entra en el viewport
      viewport={{ once: true, amount: 0.3 }} // Solo una vez y cuando el 30% del componente es visible
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-gray-800">
        <motion.h2
          className="font-serif text-3xl md:text-5xl mb-8 md:mb-12 tracking-tight text-gray-900"
          variants={titleVariants}
        >
          CARO SPATARO PHILOSOPHY
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-16">
          {/* Primer Bloque de Texto */}
          <motion.div
            className="flex-1 max-w-md bg-white p-6 md:p-10 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out border border-gray-200 text-left flex flex-col justify-between"
            variants={textBlockVariants}
            custom={0} // Índice para el escalonamiento
          >
            <div>
              <p className="font-sans text-xl md:text-2xl leading-relaxed font-light text-gray-700 mb-4">
                LA TUA ESSENZA MERITA DI ESSERE VISTA, NON CAMBIATA.
              </p>
              <p className="font-sans text-base md:text-lg leading-relaxed text-texto">
                Lavoriamo con precisione e sensibilità, per esaltare la tua
                immagine senza artifici. Perché sentirsi belle non è un trucco:
                è un diritto.
              </p>
            </div>
          </motion.div>

          {/* Segundo Bloque de Texto y Botón */}
          <motion.div
            className="flex-1 max-w-md bg-white p-6 md:p-10 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out border border-gray-200 text-left flex flex-col justify-between"
            variants={textBlockVariants}
            custom={1} // Índice para el escalonamiento
          >
            <div>
              <p className="font-sans text-base md:text-lg leading-relaxed text-texto mb-6 md:mb-8">
                Ogni volto ha un equilibrio che va rispettato. Con il
                microblading, lo accompagniamo, non lo stravolgiamo.
              </p>
            </div>
            <motion.div
              variants={buttonVariants}
              className="mt-auto" // Empuja el botón hacia abajo si el contenido es más corto
            >
              <Link
                href="/about"
                className="inline-block bg-acento text-white py-3 px-8 md:py-4 md:px-10 no-underline font-semibold text-base uppercase tracking-wider rounded-full shadow-lg hover:bg-main hover:scale-105 transition-all duration-300 ease-in-out"
              >
                SCOPRI DI PIÙ
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default PhilosophySection;
