// components/ContactSection.jsx
"use client"; // Mark as Client Component for Framer Motion

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ContactSection = () => {
  // Animation variants for the main title
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  // Animation variants for the introductory paragraph
  const introTextVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  // Animation variants for the contact buttons
  const buttonGroupVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.6,
        staggerChildren: 0.2 // Stagger individual buttons
      }
    }
  };

  const buttonItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Animation variants for the address/contact info block
  const infoBlockVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 1.0
      }
    }
  };

  return (
    <motion.section
      className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24 text-center overflow-hidden"
      initial="hidden"
      whileInView="visible" // Animate when the component enters the viewport
      viewport={{ once: true, amount: 0.2 }} // Only once and when 20% of the component is visible
    >
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-gray-800">
        <motion.h2
          className="font-serif text-3xl md:text-5xl lg:text-6xl mb-6 md:mb-8 tracking-tight text-gray-900 leading-tight"
          variants={titleVariants}
        >
          Contáctanos
        </motion.h2>

        <motion.p
          className="font-sans text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10 md:mb-12 text-gray-700"
          variants={introTextVariants}
        >
          Contattaci per una <span className="font-semibold text-rose-600">CONSULENZA TELEFONICA</span> o per prenotare un <span className="font-semibold text-rose-600">APPUNTAMENTO</span>. Siamo qui per te.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8"
          variants={buttonGroupVariants}
        >
          <motion.a
            href="tel:+393453341924"
            className="flex-1 sm:flex-none inline-flex items-center justify-center bg-rose-600 text-white py-4 px-8 md:py-5 md:px-10 no-underline font-semibold text-base md:text-lg rounded-full shadow-lg hover:bg-rose-700 hover:scale-105 transition-all duration-300 ease-in-out whitespace-nowrap"
            variants={buttonItemVariants}
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.135a11.042 11.042 0 005.516 5.516l1.135-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            PARLA CON NOSOTROS
          </motion.a>
          <motion.div variants={buttonItemVariants}>
            <Link
              href="/contact-form"
              className="flex-1 sm:flex-none inline-flex items-center justify-center bg-white text-gray-900 border-2 border-gray-300 py-4 px-8 md:py-5 md:px-10 no-underline font-semibold text-base md:text-lg rounded-full shadow-lg hover:bg-gray-50 hover:border-gray-400 hover:scale-105 transition-all duration-300 ease-in-out whitespace-nowrap"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 1 012.828 0L19 7.586m-4.5-4.5l-4.5 4.5M10 14H6.001M10 17H6"></path></svg>
              COMPILA IL FORM
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 md:mt-24 font-sans text-sm md:text-base leading-relaxed text-gray-700"
          variants={infoBlockVariants}
        >
          <p className="mb-2">
            <span className="font-semibold text-gray-900">VERONA</span> | Via Angelo Scarsellini 9/A
          </p>
          <p className="mb-6">
            <span className="font-semibold text-gray-900">T.</span> <a href="tel:+393453341924" className="text-gray-700 hover:text-gray-900 transition-colors no-underline">345 334 1924</a>
          </p>
          <p className="mb-2">
            <span className="font-semibold text-gray-900">MILANO</span> | Piazza della Repubblica 5
          </p>
          <p>
            <span className="font-semibold text-gray-900">M.</span> <a href="mailto:studio@giuliacampolo.com" className="text-rose-600 hover:text-rose-700 transition-colors no-underline">studio@giuliacampolo.com</a>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;