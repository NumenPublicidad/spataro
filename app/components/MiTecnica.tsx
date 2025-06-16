'use client'

import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const highlightVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
};

const MiTecnica = () => {
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
         <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight leading-tight mb-4 font-serif">
            El Arte del Maquillaje Semipermanente (PMU): Mi Especialidad
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Mi viaje en el mundo de la belleza me llevó a especializarme en el Maquillaje Semipermanente (PMU), un arte que permite realzar y armonizar los rasgos faciales de forma duradera y natural. Este campo abarca diversas técnicas, cada una con su magia particular:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Column: Microblading and Dermopigmentación */}
          <div className="space-y-8 md:space-y-12">
            {/* Microblading Card */}
            <motion.div
              className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-100"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <svg className="w-10 h-10 text-acento mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                </svg>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-serif">Microblading</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Una técnica japonesa manual, realizada con un inductor llamado tebori. Es ideal para crear trazos finos que simulan a la perfección el vello natural de las cejas, logrando un acabado increíblemente realista y definido.
              </p>
            </motion.div>

            {/* Dermopigmentación Card */}
            <motion.div
              className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-100"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <svg className="w-10 h-10 text-acento mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-serif">Dermopigmentación</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Utilizando un inductor eléctrico, el dermógrafo, aplico esta técnica para embellecer cejas, ojos (delineado) y labios. Además, también realizo la reconstrucción estética de la aureola mamilar, ofreciendo soluciones para una recuperación integral.
              </p>
            </motion.div>
          </div>

          {/* Right Column: TANGOBROWS (Highlighted) */}
          <div className="flex justify-center items-center md:pl-10">
            <motion.div
              className="bg-secundario/30 p-8 rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-300 ease-in-out border-2 border-main/40 relative group"
              variants={highlightVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              {/* Optional: Background pattern or texture for extra emphasis */}
              <div className="absolute inset-0 bg-dots opacity-20 z-0 rounded-xl"></div> {/* Requires custom bg-dots in tailwind.config.js */}

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <svg className="w-14 h-14 text-main mr-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.05 6L8.45 21m.8-18L13.65 6.35m1.5 5.8L18 10l-4.5-3m1.5 5.8L18 17l-4.5-3m-6.5-4L6 4l-4.5 3m1.5 5.8L6 17l-4.5-3"></path>
                  </svg>
                  <h3 className="text-3xl md:text-4xl font-bold text-main leading-tight font-serif">TANGOBROWS: Mi Técnica Exclusiva</h3>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg md:text-xl">
                  Con los años y la experiencia, he desarrollado mi propia técnica, a la que orgullosamente he llamado <span className="font-bold text-marronitenso">TANGOBROWS</span>. Esta es una fusión magistral del microblading y la dermopigmentación, permitiéndome lograr resultados únicos y personalizados. Es mi sello personal, una combinación que maximiza la belleza, la naturalidad y la durabilidad, convirtiéndose en un verdadero diferenciador.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiTecnica;