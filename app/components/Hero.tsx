// components/HeroSection.jsx
"use client";

import React, { useState } from "react"; // Importa useState
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; // Importa AnimatePresence

const HeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado para controlar el menú móvil

  // Varianets de animación para Framer Motion
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const sloganVariants = {
    hidden: { x: -200, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: i * 0.2 + 0.5,
      },
    }),
  };

  const ctaVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut", delay: 1.2 },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
  };

  // Variantes para el menú móvil
  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: "0%",
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { ease: "easeOut", duration: 0.3 },
    },
  };

  const mobileMenuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <section className="relative min-h-screen bg-gray-100 overflow-hidden">
      {/* Encabezado */}
      <motion.header
        className="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-4 px-4 md:py-5 md:px-8 lg:px-24 bg-white bg-opacity-95 backdrop-blur-sm shadow-md"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <div className="text-left flex-shrink-0">
          <h1 className="font-serif text-2xl md:text-3xl lg:text-5xl text-gray-900 tracking-tight leading-none">
            CARO SPATARO
          </h1>
          <h2 className="font-sans text-sm md:text-base lg:text-2xl text-gray-700 mt-1">
            MICROBLADING
          </h2>
        </div>

        {/* Botón de Hamburguesa para Móviles */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-500 rounded p-2"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Navegación para Desktop */}
        <nav className="hidden md:block">
          <ul className="list-none m-0 p-0 flex space-x-6 lg:space-x-10">
            {["HOME", "CARO SPATARO", "MICROBLADING"].map((item, index) => (
              <motion.li
                key={item}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <Link
                  href={
                    item === "HOME"
                      ? "/"
                      : `/${item.toLowerCase().replace(" ", "-")}`
                  }
                  className="text-gray-800 font-sans text-sm md:text-base uppercase tracking-wider hover:text-rose-600 transition-colors duration-200"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.header>

      {/* Menú Móvil (Framer Motion) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-98 backdrop-blur-sm z-40 flex flex-col items-center justify-center md:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <ul className="list-none p-0 flex flex-col space-y-8 text-center">
              {["HOME", "CARO SPATARO", "MICROBLADING"].map((item, index) => (
                <motion.li
                  key={item}
                  variants={mobileMenuItemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link
                    href={
                      item === "HOME"
                        ? "/"
                        : `/${item.toLowerCase().replace(" ", "-")}`
                    }
                    className="text-gray-900 font-sans text-2xl uppercase tracking-wider hover:text-rose-600 transition-colors duration-200 block py-2"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Sección de imagen principal con eslogan */}
      <div className="relative w-full h-screen flex items-center justify-center md:justify-start pt-20 md:pt-0">
        <Image
          src="/images/home/close-woman-face.jpg"
          alt="Natural is better"
          layout="fill"
          objectFit="cover"
          quality={90}
          priority
          className="absolute inset-0 z-0 filter brightness-75 transition-all duration-500 ease-in-out hover:brightness-90"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center md:justify-start p-4 md:p-8 lg:p-24 z-10 text-center md:text-left">
          <div className="text-white max-w-full md:max-w-3xl">
            <motion.h1
              className="font-serif text-5xl md:text-7xl lg:text-7xl md:mt-12 leading-tight drop-shadow-lg"
              initial="hidden"
              animate="visible"
              variants={sloganVariants}
              custom={0}
            >
              LA BELLEZA
            </motion.h1>
            <motion.h1
              className="font-serif text-5xl md:text-7xl lg:text-7xl leading-tight drop-shadow-lg"
              initial="hidden"
              animate="visible"
              variants={sloganVariants}
              custom={1}
            >
              AUTENTICA
            </motion.h1>
            <motion.h2
              className="font-sans text-2xl md:text-4xl lg:text-5xl mt-2 md:mt-2 tracking-wide drop-shadow-md"
              initial="hidden"
              animate="visible"
              variants={sloganVariants}
              custom={2}
            >
              Rivelata
            </motion.h2>
            <motion.p
              className="mt-4 text-base md:text-lg lg:text-xl text-gray-200 px-2 md:px-0"
              initial="hidden"
              animate="visible"
              variants={sloganVariants}
              custom={3}
            >
              In uno spazio dove la bellezza incontra la calma, il tuo sguardo torna a parlare con sicurezza.
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={ctaVariants}
            >
              <Link
                href="/services"
                className="mt-8 md:mt-10 inline-block px-8 py-3 md:px-10 md:py-4 bg-acento  font-semibold tracking-wider uppercase text-base md:text-lg rounded-full shadow-xl hover:bg-main transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Scopri il mio lavoro
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
