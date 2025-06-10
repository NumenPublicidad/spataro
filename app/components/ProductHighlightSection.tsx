// components/ProductHighlightSection.jsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ProductHighlightSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const textBlockVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
      {/* Bloque 1: Imagen Izquierda, Texto Derecha - Ocupando todo el ancho */}
      <motion.div
        className="flex flex-col md:flex-row items-stretch justify-between gap-12 md:gap-16
                   w-full bg-[#ECE0D4] overflow-hidden" // ELIMINADO: mb-20 md:mb-32
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.div
          className="w-full md:w-1/2 h-full flex-shrink-0 relative"
          variants={imageVariants}
        >
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mx-auto overflow-hidden">
            <Image
              src="/images/home/black-woman.jpg"
              alt="Colección de productos para el cuidado de la piel"
              layout="fill"
              objectFit="cover"
              quality={90}
              className="shadow-2xl"
            />
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 h-full flex flex-col justify-center text-center md:text-left
                     py-12 px-4 sm:px-8 md:px-12 lg:px-20 max-w-screen-md mx-auto"
          variants={textBlockVariants}
        >
          <motion.p
            className="text-yellow-600 text-lg md:text-xl mb-3"
            variants={buttonVariants}
          >
            Check This Out
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 md:mb-8 leading-tight tracking-tight"
            variants={buttonVariants}
          >
            Nueva Colección <br /> Para Piel Delicada
          </motion.h2>
          <motion.p
            className="font-sans text-lg md:text-xl text-gray-700 mb-6"
            variants={buttonVariants}
          >
            Nutre tu piel con productos libres de toxinas cosméticas. Con
            ofertas que no podrás rechazar.
          </motion.p>
          <motion.p
            className="font-sans text-sm md:text-base text-gray-600 leading-relaxed mb-8 md:mb-10"
            variants={buttonVariants}
          >
            Non aliqua reprehenderit culpa laboris labori nulla minim anim
            velit adipisicing ea aliqua voluptate sit do do. Non aliqua
            reprehenderit culpa laboris nulla minim anim velit.
          </motion.p>
          {/* Si quieres añadir el botón de compra descomenta esto */}
          {/* <motion.div variants={buttonVariants}>
            <Link
              href="/shop"
              className="inline-block bg-gray-900 text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300 ease-in-out uppercase text-base"
            >
              COMPRAR AHORA
            </Link>
          </motion.div> */}
        </motion.div>
      </motion.div>

      {/* Bloque 2: Texto Izquierda, Imagen Derecha - Ocupando todo el ancho */}
      <motion.div
        className="flex flex-col md:flex-row-reverse items-stretch justify-between gap-12 md:gap-16
                   w-full bg-rose-100 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.div
          className="w-full md:w-1/2 h-full flex-shrink-0 relative"
          variants={imageVariants}
        >
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mx-auto overflow-hidden">
            <Image
              src="/images/home/cejas.jpg"
              alt="Colección de productos para el cuidado de la piel"
              layout="fill"
              objectFit="cover"
              quality={90}
              className="shadow-2xl"
            />
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 h-full flex flex-col justify-center text-center md:text-left
                     py-12 px-4 sm:px-8 md:px-12 lg:px-20 max-w-screen-md mx-auto"
          variants={textBlockVariants}
        >
          <motion.p
            className="font-serif text-main text-lg md:text-xl mb-3"
            variants={buttonVariants}
          >
            Check This Out
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl  text-gray-900 mb-6 md:mb-8 leading-tight tracking-tight"
            variants={buttonVariants}
          >
            Nueva Colección <br /> Para Piel Delicada
          </motion.h2>
          <motion.p
            className="font-sans text-lg md:text-xl text-gray-700 mb-6"
            variants={buttonVariants}
          >
            Nutre tu piel con productos libres de toxinas cosméticas. Con
            ofertas que no podrás rechazar.
          </motion.p>
          <motion.p
            className="font-sans text-sm md:text-base text-gray-600 leading-relaxed mb-8 md:mb-10"
            variants={buttonVariants}
          >
            Non aliqua reprehenderit culpa laboris labori nulla minim anim
            velit adipisicing ea aliqua voluptate sit do do. Non aliqua
            reprehenderit culpa laboris nulla minim anim velit.
          </motion.p>
          {/* Si quieres añadir el botón de descubre más descomenta esto */}
          {/* <motion.div variants={buttonVariants}>
            <Link
              href="/about"
              className="inline-block bg-rose-600 text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-rose-700 hover:scale-105 transition-all duration-300 ease-in-out uppercase text-base"
            >
              DESCUBRE MÁS
            </Link>
          </motion.div> */}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProductHighlightSection;