import React from "react";

import img9Poilus from '../assets/images/9-poilus.png';
import TolkienSection from './TolkienSection';
import CollaborationsSection from './CollaborationsSection';
import AnimauxSection from './AnimauxSection';
import BlogSection from './BlogSection';
import ReseauxSection from './ReseauxSection';

export default function Hero() {
  return (
    <>
      <section
        className="bg-gradient-to-br from-poilu-roy via-poilu-turquoise to-poilu-soleil text-white relative overflow-hidden"
        role="banner"
        aria-label="Section d'accueil principale"
        tabIndex={-1}
      >
        {/* Petites icônes animées décoratives */}
        <div className="pointer-events-none select-none absolute inset-0 z-0" aria-hidden="true">
          <span className="absolute left-8 top-8 text-4xl animate-bounce-slow" aria-hidden="true">🐾</span>
          <span className="absolute right-10 top-16 text-3xl animate-wiggle" aria-hidden="true">🦴</span>
          <span className="absolute left-1/4 top-24 text-3xl animate-bounce" aria-hidden="true">🐱</span>
          <span className="absolute right-1/4 top-32 text-4xl animate-spin-slow" aria-hidden="true">🐎</span>
          <span className="absolute left-10 bottom-16 text-3xl animate-pulse" aria-hidden="true">☀️</span>
          <span className="absolute right-8 bottom-8 text-4xl animate-bounce" aria-hidden="true">❤️</span>
          <span className="absolute left-1/2 bottom-10 text-2xl animate-wiggle" aria-hidden="true">🐶</span>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <header className="text-center" aria-labelledby="hero-title">
            <div className="mb-6">
              <span className="inline-block text-6xl mb-4 animate-pulse" aria-hidden="true">🐾</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-6xl font-heading font-bold mb-6 font-heading text-poilu-turquoise">
              <span className="font-script text-poilu-soleil drop-shadow-lg">Famille Passionnée d'Animaux</span><br />
              <span className="text-3xl md:text-4xl font-cinzel-bold">La Communauté des 9 Poilus</span>
            </h1>
            <img
              src={img9Poilus}
              alt="La communauté des 9 poilus"
              className="mx-auto my-8 w-full max-w-2xl rounded-3xl shadow-2xl border-4 border-poilu-soleil/30 bg-white/80"
              style={{objectFit:'contain', background:'#fffbe6'}}
            />
            <p className="text-xl md:text-2xl mb-8 text-poilu-roy font-body font-body">
              Le <strong>quotidien authentique d'une famille</strong> vivant avec ses animaux en Savoie<br />
              <span className="font-script text-poilu-soleil">9 compagnons, 1 famille, des histoires d'amour au quotidien</span>
            </p>
          </header>
        </div>
      </section>
      <TolkienSection />
      <CollaborationsSection />
      <AnimauxSection />
      <BlogSection />
      <ReseauxSection />
    </>
  );
}
