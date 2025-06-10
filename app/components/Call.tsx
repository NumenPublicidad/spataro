// components/CallToActionFullWidth.jsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CallToAcion = () => {
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut", delay: 0.6 } },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.7, ease: "easeOut", delay: 1.0 } },
  };

  return (
    <motion.section
      className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Image
        src="/images/home/eyes.jpg" 
        alt="Transforma tu belleza con Caro Spataro"
        layout="fill"
        objectFit="cover"
        quality={90}
        priority
        className="z-0 filter brightness-75 hover:brightness-85 transition-all duration-500 ease-in-out"
      />

      <motion.div
        className="absolute inset-0 bg-black/50 z-10 flex flex-col items-center justify-center p-4 md:p-8 text-white text-center"
        variants={overlayVariants}
      >
        <motion.h2
          className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-4 md:mb-6 drop-shadow-lg"
          variants={textVariants}
        >
          ¿LISTA PARA REVELAR <br /> TU BELLEZA ?
        </motion.h2>
        <motion.p
          className="font-sans text-base md:text-lg lg:text-xl max-w-2xl mb-8 md:mb-10 drop-shadow"
          variants={textVariants}
        >
          Agenda una consulta personalizada y comienza tu viaje hacia la confianza y armonía natural.
        </motion.p>
        <motion.div variants={buttonVariants}>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 md:px-12 md:py-5 bg-acento text-black font-semibold tracking-wider uppercase text-lg md:text-xl rounded-full shadow-xl hover:bg-main hover:scale-105 transition-all duration-300 ease-in-out"
          >
            AGENDA TU CITA
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default CallToAcion;