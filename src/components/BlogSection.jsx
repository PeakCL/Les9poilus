import React from "react";

export default function BlogSection() {
  return (
    <section
      className="py-20 bg-gradient-to-br from-poilu-roy via-poilu-turquoise to-poilu-soleil text-white"
      aria-labelledby="blog-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16" aria-labelledby="blog-title">
          <h2 id="blog-title" className="text-4xl font-heading font-bold text-poilu-turquoise mb-4 font-heading">
            Nos dernières <span className="font-script text-poilu-soleil drop-shadow-sm">aventures</span>
          </h2>
          <p className="text-lg text-poilu-roy font-body max-w-2xl mx-auto font-body">
            Plongez dans notre quotidien avec nos compagnons à quatre pattes
          </p>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" aria-label="Aperçu des articles du blog">
          {/* Exemples d'articles */}
          {[1,2,3].map((i) => (
            <article key={i} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-poilu-turquoise border-opacity-30 hover:border-poilu-soleil/60" aria-labelledby={`blog-article-title-${i}`}> 
              <div className="p-8">
                <div className="flex items-center text-sm text-poilu-turquoise mb-4">
                  <span className="text-2xl mr-2" aria-hidden="true">📅</span>
                  <time className="font-body" dateTime="2025-10-12">12 octobre 2025</time>
                </div>
                <h3 id={`blog-article-title-${i}`} className="text-xl font-heading font-semibold mt-2 mb-4 font-heading">
                  <a href="#" className="text-poilu-turquoise hover:text-poilu-roy transition-colors focus:outline-none focus:ring-2 focus:ring-poilu-turquoise" tabIndex={0} aria-label={`Lire l'article ${i}`}>
                    Titre de l'article {i}
                  </a>
                </h3>
                <p className="text-poilu-roy font-body mb-6 leading-relaxed font-body">Petit résumé de l'article {i}... (exemple statique)</p>
                <a href="#" className="inline-flex items-center bg-poilu-turquoise hover:bg-poilu-roy text-white font-medium px-4 py-2 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-poilu-turquoise" tabIndex={0} aria-label={`Lire la suite de l'article ${i}`}>
                  <span>Lire la suite</span>
                  <span className="ml-2" aria-hidden="true">🧾</span>
                </a>
              </div>
            </article>
          ))}
        </section>
        <div className="text-center mt-12">
          <a href="/blog" className="bg-poilu-turquoise hover:bg-poilu-roy text-white px-8 py-4 rounded-2xl inline-block font-heading font-semibold shadow-lg transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-poilu-turquoise/40 transition-all duration-300" aria-label="Voir tous les articles du blog">
            <span role="img" aria-label="livre">📚</span> Toutes nos histoires
          </a>
        </div>
      </div>
    </section>
  );
}
