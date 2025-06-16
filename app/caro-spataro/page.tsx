'use client'

import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Animations for Framer Motion
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const MiHistoriaPersonal = () => {
  return (
    <>
      <Head>
        <title>Mi Historia - Caro Spataro</title>
        <meta name="description" content="Conoce la filosofía personal de Caro Spataro y su enfoque holístico para potenciar la belleza auténtica y la autoestima." />
      </Head>

      <motion.section
        className="relative bg-gradient-to-br from-white via-gray-50 to-pink-50 py-16 md:py-24 overflow-hidden"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Subtle background element (can be adapted from your current site, e.g., small brand logo pattern) */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="#fbcfe8" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="30" stroke="#fbcfe8" strokeWidth="0.7" />
            {/* You could add a tiny version of your logo here if it fits the aesthetic */}
          </svg>
        </div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          {/* Hero Section: Title and Introduction */}
          <div className="text-center mb-16 md:mb-20">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gray-800 tracking-tight leading-tight mb-4 font-serif"
              variants={textVariants}
            >
              Mi Historia: Más Allá de la Estética
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto"
              variants={textVariants}
            >
              Soy Caro Spataro, y mi propósito es acompañarte en un viaje de transformación, revelando tu belleza auténtica desde el alma.
            </motion.p>
          </div>

          {/* Core Philosophy & Image - Emphasizing Holistic Approach */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-20">
            <motion.div
              className="relative rounded-xl overflow-hidden shadow-2xl"
              variants={imageVariants}
            >
              <Image
                src="/images/caro.enc" // A warm, inviting portrait of you
                alt="Caro Spataro, retrato inspirador"
                width={700}
                height={850}
                layout="responsive"
                objectFit="cover"
                className="rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 rounded-xl"></div>
              <p className="absolute bottom-6 left-6 text-white text-xl font-semibold drop-shadow-lg">
                La verdadera belleza reside en la armonía de tu mundo interno y externo.
              </p>
            </motion.div>
            <motion.div variants={textVariants}>
              <h2 className="text-3xl md:text-4xl font-semibold text-acento mb-6 font-serif">
                Mi Pasión: Conectar Contigo desde el Corazón
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Desde siempre, he comprendido que la belleza es mucho más que lo que vemos en el espejo. Es un reflejo de cómo nos sentimos por dentro, una luz que irradia desde el alma. Mi camino me ha llevado a crear un espacio donde la estética es solo el punto de partida para algo más profundo: tu bienestar y tu confianza.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Mi valor agregado es trabajar contigo como una persona integral. No se trata solo de un procedimiento estético; se trata de un diálogo, de encontrar ese equilibrio justo en cada obra que realizo, abrazando tu autoestima y potenciando tu mejor versión.
              </p>
            </motion.div>
          </div>

          {/* My Unique Approach: The 5 Senses & Transformation */}
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl mb-20 border border-gray-100">
            <motion.h2
              className="text-3xl md:text-4xl font-semibold text-acento mb-8 text-center font-serif"
              variants={textVariants}
            >
              Mi Metodología: Un Proceso de Transformación Consciente
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-10">
              <motion.div variants={cardVariants}>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif">
                  Los 5 Sentidos: Enfoque y Presencia
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Cada sesión conmigo es un momento dedicado exclusivamente a ti. Trabajo siempre con los 5 sentidos, enfocada en cada persona, en su energía, en sus expectativas. Este enfoque me permite crear un ambiente de calma y confianza, donde cada detalle, desde la música hasta el tacto, contribuye a una experiencia transformadora.
                </p>
              </motion.div>
              <motion.div variants={cardVariants}>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif">
                  Más Allá de la Estética: Juntas hacia tu Mejor Versión
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Para mí, abrazar la autoestima no es hacer solo cejas lindas o labios perfectos. Es un profundo proceso de transformación. Se trata de potenciar tu mejor versión, no solo en tu exterior, sino trabajando juntas tu mundo interno. Mi mayor recompensa es verte irte con una nueva seguridad y una armonía renovada.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Call to Action - Invitation to connect */}
          <div className="text-center pt-10">
            <motion.p
              className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
              variants={textVariants}
            >
              Te invito a conectar conmigo y a iniciar tu propio proceso de revelación y empoderamiento.
            </motion.p>
            <motion.a
              href="/contacto" // Link to your contact page
              className="inline-block bg-acento text-white font-semibold py-4 px-12 rounded-full text-lg shadow-xl hover:bt-acento transform hover:scale-105 transition-all duration-300 ease-in-out tracking-wide uppercase"
              variants={textVariants}
            >
              Conversemos
            </motion.a>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default MiHistoriaPersonal;