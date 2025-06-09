// components/ContactSection.jsx
import React from 'react';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <section className="bg-[#F0ECE5] py-20 text-center">
      <div className="max-w-3xl mx-auto text-black">
        <h2 className="font-serif text-4xl mb-8">Contáctanos</h2>
        <p className="font-sans text-lg mb-10">Contattaci per una CONSULENZA TELEFONICA o per prenotare un APPUNTAMENTO.</p>
        <div className="flex justify-center space-x-8">
          {/* Para llamadas telefónicas y emails directos, se usa <a> */}
          <a href="tel:+393453341924" className="inline-block bg-black text-white py-4 px-8 no-underline font-sans text-lg rounded-md hover:bg-gray-800 transition-colors">PARLA CON NOI</a>
          <Link href="/contact-form" className="inline-block bg-white text-black border-2 border-black py-4 px-8 no-underline font-sans text-lg rounded-md hover:bg-gray-100 transition-colors">COMPILA IL FORM</Link>
        </div>
        <div className="mt-16 font-sans text-base leading-relaxed">
          <p>VERONA | Via Angelo Scarsellini 9/A</p>
          <p>T. 345 334 1924</p>
          <p>MILANO | Piazza della Repubblica 5</p>
          <p>M. <a href="mailto:studio@giuliacampolo.com" className="text-black no-underline hover:underline">studio@giuliacampolo.com</a></p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;