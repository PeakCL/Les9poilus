import React from "react";

export default function Blog() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-poilu-roy via-poilu-turquoise to-poilu-soleil pb-10 xs:pb-12 sm:pb-16">
      <div className="w-full bg-gradient-to-r from-poilu-roy to-poilu-turquoise py-7 xs:py-8 sm:py-10 mb-8 xs:mb-10 sm:mb-12">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-cinzel-bold text-poilu-soleil text-center drop-shadow-lg tracking-tight">Notre Blog</h1>
        <p className="text-center text-white font-body text-base xs:text-lg mt-2 xs:mt-3 sm:mt-4">Découvrez nos derniers articles, actualités et réflexions</p>
      </div>
      <div className="max-w-3xl mx-auto px-2 xs:px-3 sm:px-4">
        <div className="bg-white/95 rounded-3xl shadow-xl p-5 xs:p-7 sm:p-10 flex flex-col items-center border border-poilu-roy/10">
          <h2 className="text-xl xs:text-2xl font-heading text-poilu-roy mb-2 xs:mb-4">Aucun article pour le moment</h2>
          <p className="text-poilu-gris font-body text-center text-sm xs:text-base leading-relaxed">Les premiers articles seront bientôt publiés. Revenez nous voir !</p>
        </div>
      </div>
    </section>
  );
}
