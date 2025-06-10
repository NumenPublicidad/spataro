// components/ImageGallerySection.jsx
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ImageGallerySection = () => {
  const images = [
    { src: '/images/home/beautiful-female-eyes.jpg', alt: 'Tratamiento de Microblading de cerca', title: 'Miradas Transformadas' },
    { src: '/images/home/natural-face.jpg', alt: 'Mujer sonriendo con cejas perfectas', title: 'Belleza Natural' },
    { src: '/images/home/cejas.jpg', alt: 'Detalle de pigmentación', title: 'Precisión Artística' },
    { src: '/images/home/asian-woman.jpg', alt: 'Ambiente de estudio elegante', title: 'Espacio de Bienestar' },
    { src: '/images/home/eyes.jpg', alt: 'Herramientas de microblading', title: 'Calidad y Detalle' },
    { src: '/images/home/black-woman.jpg', alt: 'Clienta satisfecha con cejas microblading', title: 'Confianza y Armonía' },
  ];

  const galleryVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.section
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <motion.h2
          className="font-serif text-3xl md:text-5xl lg:text-6xl mb-6 md:mb-8 tracking-tight text-gray-900 leading-tight"
          variants={galleryVariants} // Uses parent variants for the initial fade-in
        >
          NUESTRO TRABAJO. TU BELLEZA.
        </motion.h2>
        <motion.p
          className="font-sans text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-12 md:mb-16 text-gray-700"
          variants={galleryVariants} // Uses parent variants for the initial fade-in
        >
          Explora la esencia de la belleza natural a través de nuestra galería. Cada imagen cuenta una historia de transformación y armonía.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={galleryVariants} // Apply staggerChildren from here
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="relative aspect-square overflow-hidden rounded-xl shadow-xl group cursor-pointer border border-gray-200"
              variants={itemVariants}
              whileHover={{ scale: 1.03, zIndex: 1 }} // Subtle zoom on hover
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                layout="fill"
                objectFit="cover"
                quality={80}
                className="transition-transform duration-500 ease-out group-hover:scale-110 filter group-hover:brightness-90" // Image zoom and brightness on hover
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-sans text-lg md:text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-0 translate-y-4">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ImageGallerySection;