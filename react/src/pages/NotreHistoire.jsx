import React from "react";

export default function NotreHistoire() {
  return (
    <section
      className="w-full min-h-screen bg-gradient-to-br from-poilu-roy via-poilu-turquoise to-poilu-soleil pb-10 sm:pb-14 md:pb-16"
      aria-labelledby="notre-histoire-title"
    >
      <header className="w-full bg-gradient-to-r from-poilu-roy to-poilu-turquoise py-8 sm:py-10 mb-8 sm:mb-10 md:mb-12" aria-labelledby="notre-histoire-title">
        <h1 id="notre-histoire-title" className="text-3xl sm:text-5xl md:text-6xl font-cinzel-bold text-white text-center drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)] tracking-tight px-3 sm:px-2">
          <span aria-hidden="true">🐴</span> Notre Histoire en Savoie
        </h1>
      </header>
      <div className="max-w-4xl mx-auto px-2 xs:px-3 sm:px-4">
        <section className="mb-8 sm:mb-10 md:mb-12" aria-label="Valeurs et vie de la famille">
          <h2 className="text-xl sm:text-2xl font-heading text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)] md:text-poilu-turquoise md:drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)] mb-2 flex items-center gap-2"><span className="text-2xl sm:text-3xl" aria-hidden="true">🐗</span> <span className="font-heading">Amour des Animaux</span></h2>
          <p className="font-body text-gray-800 bg-white/95 rounded-xl px-2 py-2 text-base sm:text-lg mb-4 sm:mb-6 shadow">Notre passion pour les animaux guide chaque décision. Chaque compagnon trouve sa place dans notre famille.</p>
          <h2 className="text-xl sm:text-2xl font-heading text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)] md:text-poilu-turquoise md:drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)] mb-2 flex items-center gap-2"><span className="text-2xl sm:text-3xl" aria-hidden="true">🏡</span> <span className="font-heading">Vie Familiale</span></h2>
          <p className="font-body text-gray-800 bg-white/95 rounded-xl px-2 py-2 text-base sm:text-lg mb-4 sm:mb-6 shadow">9 compagnons qui partagent notre quotidien en Savoie. Chaque jour apporte sa dose de joie et d'aventures.</p>
          <h2 className="text-xl sm:text-2xl font-heading text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)] md:text-poilu-turquoise md:drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)] mb-2 flex items-center gap-2"><span className="text-2xl sm:text-3xl" aria-hidden="true">🧡</span> <span className="font-heading">Partage d'Expériences</span></h2>
          <p className="font-body text-gray-800 bg-white/95 rounded-xl px-2 py-2 text-base sm:text-lg mb-4 sm:mb-6 shadow">Nous partageons nos expériences, conseils et moments de bonheur avec tous les amoureux des animaux.</p>
        </section>
        <section className="mb-8 sm:mb-10 md:mb-12" aria-label="Zone d'intervention">
          <h2 className="text-xl sm:text-2xl font-heading text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)] md:text-poilu-turquoise md:drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)] mb-3 sm:mb-4 flex items-center gap-2"><span className="text-2xl sm:text-3xl" aria-hidden="true">🗺️</span> <span className="font-heading">Zone d'Intervention en Savoie</span></h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
            <div className="bg-white/95 rounded-xl p-3 sm:p-4 shadow text-poilu-turquoise font-semibold font-heading">Albertville<br/><span className="text-poilu-roy font-normal text-xs sm:text-sm font-body">Et environs</span></div>
            <div className="bg-white/95 rounded-xl p-3 sm:p-4 shadow text-poilu-turquoise font-semibold font-heading">Chambéry<br/><span className="text-poilu-roy font-normal text-xs sm:text-sm font-body">Et métropole</span></div>
            <div className="bg-white/95 rounded-xl p-3 sm:p-4 shadow text-poilu-turquoise font-semibold font-heading">Bourg-Saint-Maurice<br/><span className="text-poilu-roy font-normal text-xs sm:text-sm font-body">Tarentaise</span></div>
            <div className="bg-white/95 rounded-xl p-3 sm:p-4 shadow text-poilu-turquoise font-semibold font-heading">Saint-Jean-de-Maurienne<br/><span className="text-poilu-roy font-normal text-xs sm:text-sm font-body">Maurienne</span></div>
          </div>
          <p className="text-center text-poilu-roy font-body text-xs sm:text-sm mt-3 sm:mt-4 bg-white/80 rounded-xl inline-block px-2 py-1">Intervention possible dans toute la Savoie selon les urgences et besoins</p>
        </section>
        <footer className="text-center mt-8 sm:mt-10 md:mt-12" aria-label="Appel à rejoindre la communauté">
          <h2 className="text-xl sm:text-2xl font-heading text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)] md:text-poilu-turquoise md:drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)] mb-2">Rejoignez Notre Communauté d'Amoureux des Animaux</h2>
          <p className="font-body text-gray-800 bg-white/95 rounded-xl px-2 py-2 text-base sm:text-lg mb-3 sm:mb-4 shadow">Que vous cherchiez à adopter, aider ou simplement découvrir nos histoires, vous êtes les bienvenus dans notre refuge familial !</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a href="/nos-animaux" className="inline-block bg-poilu-turquoise hover:bg-poilu-roy text-white font-heading px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow transition-colors focus:outline-none focus:ring-2 focus:ring-poilu-turquoise">Découvrir nos Compagnons</a>
            <a href="/contact" className="inline-block bg-poilu-soleil hover:bg-poilu-turquoise text-poilu-roy hover:text-white font-heading px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow transition-colors focus:outline-none focus:ring-2 focus:ring-poilu-turquoise">Nous Contacter</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
