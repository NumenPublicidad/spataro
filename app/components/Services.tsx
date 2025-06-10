"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ServicesProductsSection = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  const introTextVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.4 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: i * 0.15 + 0.6,
      },
    }),
  };

  const services = [
    {
      title: "MICROBLADING PERSONALIZZATO",
      description:
        "Progettazione su misura per sopracciglia naturali e armoniose, adattate alla forma del tuo viso.",
      link: "/microblading",
      bgColor: "bg-gradient-to-br from-white to-gray-50",
      hoverShadow: "hover:shadow-xl",
      hoverBg: "hover:bg-gray-800",
      hoverScale: "hover:scale-105 transition-transform duration-300",
    },
    {
      title: "TECNICA COMBO BROWS",
      description:
        "Un mix di microblading e shading per un effetto realistico e definito, ideale per pelli miste.",
      link: "/combo-brows",
      bgColor: "bg-gradient-to-br from-gray-50 to-white",
      hoverShadow: "hover:shadow-xl",
      hoverBg: "hover:bg-gray-800",
      hoverScale: "hover:scale-105 transition-transform duration-300",
    },
    {
      title: "CORREZIONE E RITOCCO",
      description:
        "Ritocchi periodici o correzioni di lavori precedenti con attenzione ai dettagli e alla sicurezza.",
      link: "/ritocchi",
      bgColor: "bg-gradient-to-br from-white to-gray-50",
      hoverShadow: "hover:shadow-xl",
      hoverBg: "hover:bg-gray-800",
      hoverScale: "hover:scale-105 transition-transform duration-300",
    },
    {
      title: "FORMAZIONE PROFESSIONALE",
      description:
        "Corsi individuali e workshop per imparare le tecniche moderne del microblading in modo serio e professionale.",
      link: "/academy",
      bgColor: "bg-gradient-to-br from-gray-50 to-white",
      hoverShadow: "hover:shadow-xl",
      hoverBg: "hover:bg-gray-800",
      hoverScale: "hover:scale-105 transition-transform duration-300",
    },
  ];

  return (
    <motion.section
      className="bg-white py-16 md:py-24 text-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h2
          className="font-serif text-3xl md:text-5xl lg:text-6xl mb-6 md:mb-8 tracking-tight text-gray-900 leading-tight"
          variants={titleVariants}
        >
          LA BELLEZZA NATURALE È UNO STATO DELL’ANIMA
        </motion.h2>

        <motion.p
          className="font-sans text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8 md:mb-10 text-gray-700"
          variants={introTextVariants}
        >
          Il nostro modo di intendere la bellezza si riflette in ogni trattamento,
          prodotto e gesto: naturalezza, rispetto per la pelle e valorizzazione autentica.
        </motion.p>

        <motion.p
          className="font-sans text-lg md:text-xl font-semibold mb-10 md:mb-12 text-gray-800"
          variants={introTextVariants}
        >
          Scopri cosa possiamo offrirti:
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`group p-6 md:p-8 rounded-xl border border-gray-100 flex flex-col justify-between items-center text-center transition-all duration-300 ease-in-out ${service.bgColor} ${service.hoverShadow} ${service.hoverBg} ${service.hoverScale}`}
              variants={cardVariants}
              custom={index}
            >
              <h3 className="font-sans text-xl md:text-2xl font-semibold mb-3 text-gray-800 group-hover:text-[#8B6F5E] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="font-sans text-sm md:text-base mb-6 text-gray-800 opacity-90">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="no-underline font-bold font-sans text-sm md:text-base text-gray-700 group-hover:text-[#C98F70] hover:underline transition-colors duration-300 mt-auto"
              >
                Più informazioni &gt;
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesProductsSection;
