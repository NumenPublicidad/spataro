// components/ServicesProductsSection.jsx
import React from 'react';
import Link from 'next/link';

const ServicesProductsSection = () => {
  return (
    <section className="bg-white py-20 text-center">
      <div className="max-w-6xl mx-auto text-black">
        <h2 className="font-serif text-4xl mb-10">NATURAL BEAUTY IS A STATE OF MIND</h2>
        <p className="font-sans text-base leading-relaxed max-w-2xl mx-auto mb-12">Il nostro modo di pensare la bellezza naturale si riflette in ogni servizio, trattamento e prodotto proposto, che rispecchia esattamente la nostra etica e filosofia.</p>
        <p className="font-sans text-lg mb-8">Ecco cosa puoi trovare da noi:</p>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Bloque LUXURY TREATMENTS */}
          <div className="bg-[#E4DED2] p-8 flex-1 min-w-[250px] max-w-[280px] text-center">
            <h3 className="font-sans text-xl text-black mb-3">LUXURY TREATMENTS</h3>
            <p className="font-sans text-sm text-black mb-4">Descubre nuestros tratamientos exclusivos para un bienestar profundo y resultados visibles.</p>
            <Link href="/treatments" className="no-underline text-black font-bold font-sans text-sm hover:underline">Más información &gt;</Link>
          </div>
          {/* Bloque EXCLUSIVE BEAUTY PRODUCTS */}
          <div className="bg-[#D0D3D0] p-8 flex-1 min-w-[250px] max-w-[280px] text-center">
            <h3 className="font-sans text-xl text-black mb-3">EXCLUSIVE BEAUTY PRODUCTS</h3>
            <p className="font-sans text-sm text-black mb-4">Una selección curada de productos de belleza natural de alta calidad.</p>
            <Link href="/products" className="no-underline text-black font-bold font-sans text-sm hover:underline">Más información &gt;</Link>
          </div>
          {/* Bloque HOME DECOR */}
          <div className="bg-[#E4DED2] p-8 flex-1 min-w-[250px] max-w-[280px] text-center">
            <h3 className="font-sans text-xl text-black mb-3">HOME DECOR</h3>
            <p className="font-sans text-sm text-black mb-4">Elementos para transformar tu hogar en un santuario de bienestar.</p>
            <Link href="/decor" className="no-underline text-black font-bold font-sans text-sm hover:underline">Más información &gt;</Link>
          </div>
          {/* Bloque GC ACADEMY */}
          <div className="bg-[#D0D3D0] p-8 flex-1 min-w-[250px] max-w-[280px] text-center">
            <h3 className="font-sans text-xl text-black mb-3">GC ACADEMY</h3>
            <p className="font-sans text-sm text-black mb-4">Formación y talleres para profesionales y amantes de la belleza natural.</p>
            <Link href="/academy" className="no-underline text-black font-bold font-sans text-sm hover:underline">Más información &gt;</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesProductsSection;