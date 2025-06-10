// components/Footer.jsx
"use client"; // Mark as Client Component for Framer Motion

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  // Framer Motion variants for the footer content
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15, // Stagger items within the footer
        delayChildren: 0.2 // Delay children animation slightly
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer
      className="bg-linear-to-r from-gray-200 to-white py-12 md:py-16 text-gray-700 border-t border-gray-200"
      initial="hidden"
      whileInView="visible" // Animate when it comes into view
      viewport={{ once: true, amount: 0.1 }} // Animate once when 10% is visible
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 justify-items-center md:justify-items-start text-center md:text-left"
          variants={footerVariants}
        >
          {/* Brand/Logo Section (optional, but good for branding) */}
          <motion.div className="col-span-1 md:col-span-2 lg:col-span-1 mb-8 md:mb-0" variants={itemVariants}>
            <h3 className="font-serif text-3xl md:text-4xl text-gray-900 mb-2 tracking-tight">CARO SPATARO</h3>
            <p className="font-sans text-sm text-gray-600">MICROBLADING</p>
            <p className="font-sans text-xs mt-4 text-gray-500 max-w-xs mx-auto md:mx-0">
                Belleza auténtica, revelada.
            </p>
          </motion.div>

          {/* Navegación del footer */}
          <motion.div className="flex-1 min-w-[150px] mb-8 md:mb-0" variants={itemVariants}>
            <h4 className="font-sans text-lg md:text-xl font-semibold mb-4 text-gray-900">Navegación</h4>
            <ul className="list-none p-0 m-0 space-y-2">
              <motion.li variants={itemVariants}><Link href="/" className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-sans text-base no-underline">HOME</Link></motion.li>
              <motion.li variants={itemVariants}><Link href="/caro-spataro" className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-sans text-base no-underline">CARO SPATARO</Link></motion.li>
              <motion.li variants={itemVariants}><Link href="/microblading" className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-sans text-base no-underline">MICROBLADING</Link></motion.li>
              <motion.li variants={itemVariants}><Link href="/lifestyle" className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-sans text-base no-underline">LIFESTYLE</Link></motion.li>
              <motion.li variants={itemVariants}><Link href="/universe-experience" className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-sans text-base no-underline">BE. UNIVERSE EXPERIENCE</Link></motion.li>
              <motion.li variants={itemVariants}><Link href="/emotio" className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-sans text-base no-underline">EMOTIO</Link></motion.li>
            </ul>
          </motion.div>

          {/* Contacto Rápido / Ubicación */}
          <motion.div className="flex-1 min-w-[150px] mb-8 md:mb-0" variants={itemVariants}>
            <h4 className="font-sans text-lg md:text-xl font-semibold mb-4 text-gray-900">Contacto</h4>
            <ul className="list-none p-0 m-0 space-y-2">
              <motion.li variants={itemVariants}>
                <p className="font-sans text-base text-gray-700">Verona: Via Angelo Scarsellini 9/A</p>
                <a href="tel:+393453341924" className="text-main hover:text-rose-700 transition-colors no-underline font-sans text-base">T. 345 334 1924</a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <p className="font-sans text-base text-gray-700 mt-4">Milano: Piazza della Repubblica 5</p>
                <a href="mailto:studio@giuliacampolo.com" className="text-main hover:text-rose-700 transition-colors no-underline font-sans text-base">M. studio@giuliacampolo.com</a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Legal y Créditos */}
          <motion.div className="flex-1 min-w-[200px] text-center md:text-right" variants={itemVariants}>
            <p className="font-sans text-sm mb-4">
              <Link href="/privacy-policy" className="text-gray-700 hover:text-main transition-colors no-underline">Privacy Policy</Link>
            </p>
            <p className="font-sans text-xs text-gray-500 leading-relaxed">
              &copy; {new Date().getFullYear()} CARO SPATARO. Todos los derechos reservados.
              <br />
              Another superwebsite made by <a href="https://allcreative.agency" target="_blank" rel="noopener noreferrer" className="text-gray-800 font-bold hover:text-main transition-colors no-underline">ALL CREATIVE. AGENCY</a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;