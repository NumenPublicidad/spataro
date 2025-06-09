// components/PhilosophySection.jsx
import React from 'react';
import Link from 'next/link';

const PhilosophySection = () => {
  return (
    <section className="bg-[#F0ECE5] py-20 text-center">
      <div className="max-w-4xl mx-auto text-black">
        <h2 className="font-serif text-4xl mb-10">CARO SPATARO PHILOSOPHY</h2>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="flex-1 min-w-[300px] max-w-[400px] text-left">
            <p className="font-sans text-lg leading-relaxed">UN MODO DI PENSARE, UN MODO DI SENTIRE, UN MODO DI ESSERE.</p>
            <p className="font-sans text-base leading-relaxed mt-4">Una storia che si ispira alla bellezza naturale, dentro e fuori, e a ciò che ci differenzia rendendoci autentici.</p>
          </div>
          <div className="flex-1 min-w-[300px] max-w-[400px] text-left">
            <p className="font-sans text-base leading-relaxed">Un viaggio che celebra la bellezza, in un ambiente che è in realtà un'esperienza che risuona con l'armonia della natura che lo contraddistingue.</p>
            <Link href="/about" className="inline-block bg-black text-white py-4 px-8 no-underline font-sans text-base mt-8 hover:bg-gray-800 transition-colors">SCOPRI DI PIÙ</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;