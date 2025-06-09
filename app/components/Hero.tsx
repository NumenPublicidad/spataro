// components/HeroSection.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-[#E4DED2] relative">
      {/* Encabezado */}
      <header className="flex justify-between items-center py-5 px-12 bg-[#E4DED2] text-black">
        <div className="text-left">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-0">CARO SPATARO</h1>
          <h2 className="font-sans text-xl md:text-lg lg:text-xl">MICROBLADING</h2>
        </div>
        <nav>
          <ul className="list-none m-0 p-0 flex space-x-5">
            <li><Link href="/" className="no-underline text-black font-sans">HOME</Link></li>
            <li><Link href="/giulia-campolo" className="no-underline text-black font-sans">CARO SPATARO</Link></li>
            <li><Link href="/luxury-treatments" className="no-underline text-black font-sans">MICROBLADING</Link></li>
          </ul>
        </nav>
      </header>

      {/* Sección de imagen principal con eslogan */}
      <div className="relative text-center text-white">
        <Image
          src="/images/home/close-woman-face.jpg" 
          alt="Natural is better"
          layout="responsive"
          width={1920}
          height={600}
          objectFit="cover"
          priority
          className="max-h-[800px] w-full block object-cover"
        />
        <div className="absolute text-white top-0 left-0  w-full bg-black/40 h-full">
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl mt-10 px-12 text-start">LA BELLEZA</h1>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl px-12 text-start">AUTENTICA</h1>
          <h2 className="font-sans text-3xl text-start md:text-4xl lg:text-5xl px-12 m-0">Rivelata</h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;