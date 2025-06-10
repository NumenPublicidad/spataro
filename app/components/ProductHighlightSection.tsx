"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
        staggerChildren: 0.3, // Stagger blocks
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
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24"> {/* CAMBIO CLAVE AQUÍ: Fondo de negro a degradado claro */}
      <div className="">
        {/* Bloque 1: Imagen Izquierda, Texto Derecha */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 w-full  bg-[#ECE0D4]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.div
            className="w-full md:w-1/2 flex-shrink-0 "
            variants={imageVariants}
          >
            <Image
              src="/images/home/black-woman.jpg" 
              alt="Colección de productos para el cuidado de la piel"
              width={700}
              height={500}
              layout="responsive"
              objectFit="contain"
              quality={90}
              className="shadow-2xl"
            />
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 text-center md:text-left px-20"
            variants={textBlockVariants}
          >
            <motion.p
              className="font-serif text-rose-600 text-lg md:text-xl mb-3"
              variants={buttonVariants}
            >
              Check This Out
            </motion.p>
            <motion.h2
              className="font-sans text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 md:mb-8 leading-tight tracking-tight"
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
              velit adipisicing ea aliqua voluptate sit do do.Non aliqua
              reprehenderit reprehenderit culpa laboris nulla minim anim velit
              adipisicing ea aliqua voluptate sit do do.Non aliqua reprehenderit
              reprehenderit culpa laboris nulla minim anim velit.
            </motion.p>
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
        {/* Bloque 2: Texto Izquierda, Imagen Derecha */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 md:gap-16 w-full bg-[#a7878d]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.div
            className="w-full md:w-1/2 flex-shrink-0 "
            variants={imageVariants}
          >
            <Image
              src="/images/home/cejas.jpg" 
              alt="Colección de productos para el cuidado de la piel"
              width={700}
              height={500}
              layout="responsive"
              objectFit="contain"
              quality={90}
              className="shadow-2xl"
            />
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 text-center md:text-left px-20"
            variants={textBlockVariants}
          >
            <motion.p
              className="font-serif text-rose-600 text-lg md:text-xl mb-3"
              variants={buttonVariants}
            >
              Check This Out
            </motion.p>
            <motion.h2
              className="font-sans text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 md:mb-8 leading-tight tracking-tight"
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
              velit adipisicing ea aliqua voluptate sit do do.Non aliqua
              reprehenderit reprehenderit culpa laboris nulla minim anim velit
              adipisicing ea aliqua voluptate sit do do.Non aliqua reprehenderit
              reprehenderit culpa laboris nulla minim anim velit.
            </motion.p>
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

        
      </div>
    </section>
  );
};

export default ProductHighlightSection;