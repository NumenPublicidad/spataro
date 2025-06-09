// components/Footer.jsx
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#D0D3D0] py-10 text-center text-black">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-8">
        {/* Navegación del footer */}
        <div className="flex-1 min-w-[150px]">
          <h4 className="font-sans text-lg mb-4">Navegación</h4>
          <ul className="list-none p-0 m-0">
            <li><Link href="/" className="no-underline text-black font-sans leading-loose hover:underline">HOME</Link></li>
            <li><Link href="/giulia-campolo" className="no-underline text-black font-sans leading-loose hover:underline">GIULIA CAMPOLO</Link></li>
            <li><Link href="/luxury-treatments" className="no-underline text-black font-sans leading-loose hover:underline">LUXURY TREATMENTS</Link></li>
            <li><Link href="/lifestyle" className="no-underline text-black font-sans leading-loose hover:underline">LIFESTYLE</Link></li>
            <li><Link href="/universe-experience" className="no-underline text-black font-sans leading-loose hover:underline">BE. UNIVERSE EXPERIE</Link></li>
            <li><Link href="/emotio" className="no-underline text-black font-sans leading-loose hover:underline">EMOTIO</Link></li>
          </ul>
        </div>

        {/* Legal y créditos */}
        <div className="flex-1 min-w-[200px] text-right">
          <p className="font-sans text-sm mb-2">
            <Link href="/privacy-policy" className="no-underline text-black hover:underline">privacy policy</Link>
          </p>
          <p className="font-sans text-xs m-0">
            Another superwebsite made by <a href="https://allcreative.agency" target="_blank" rel="noopener noreferrer" className="no-underline text-black font-bold hover:underline">ALL CREATIVE. AGENCY</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;