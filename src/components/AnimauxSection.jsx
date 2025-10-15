
export default function AnimauxSection() {
  return (
    <section
      className="py-20 bg-gradient-to-br from-indigo-800 to-purple-800 text-white"
      aria-labelledby="section-animaux-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16" tabIndex={-1} aria-labelledby="section-animaux-title">
          <h2 id="section-animaux-title" className="text-4xl font-cinzel font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] mb-4">
            Nos <span className="font-script text-poilu-soleil drop-shadow-sm">9 Poilus</span>
          </h2>
          <p className="text-lg text-white/90 font-body max-w-2xl mx-auto drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
            Découvrez le quotidien chaleureux et authentique de notre tribu à quatre pattes,
            entre moments drôles, tendres et parfois chaotiques !
          </p>
        </header>

  <section className="grid grid-cols-1 md:grid-cols-3 gap-8" aria-label="Présentation synthétique des animaux">
          {/* Carte Chien */}
          <a href="/nos-animaux/#chiens" className="bg-white/90 md:bg-gradient-to-br md:from-white md:to-poilu-creme p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-poilu-soleil border-opacity-30 group hover:border-opacity-60 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-poilu-soleil/40" aria-label="Découvrir Mako, notre chien">
            <div className="w-16 h-16 bg-gradient-to-br from-poilu-soleil to-poilu-turquoise rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl" role="img" aria-label="chien">🐕</span>
            </div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-poilu-turquoise text-center drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)]">Notre Chien</h3>
            <p className="text-gray-800 font-body text-center leading-relaxed bg-white/80 rounded px-1 py-1 shadow-sm">
              Mako, le véritable patron de la famille ! Fidèle compagnon et source inépuisable de joie,
              il fait régner l'ordre dans la troupe.
            </p>
            <div className="text-center mt-6" aria-hidden="true">
              <span className="text-2xl">👑 🐕 ✨</span>
            </div>
            <div className="text-center mt-4">
              <span className="inline-flex items-center text-poilu-roy font-semibold group-hover:text-poilu-turquoise transition-colors duration-300">
                Découvrir Mako
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </a>

          {/* Carte Chats */}
          <a href="/nos-animaux/#chats" className="bg-white/90 md:bg-gradient-to-br md:from-white md:to-poilu-creme p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-poilu-turquoise border-opacity-30 group hover:border-opacity-60 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-poilu-turquoise/40" aria-label="Découvrir nos 6 chats">
            <div className="w-16 h-16 bg-gradient-to-br from-poilu-turquoise to-poilu-roy rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl" role="img" aria-label="chat">🐱</span>
            </div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-poilu-turquoise text-center drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)]">Nos 6 Chats</h3>
            <p className="text-gray-800 font-body text-center leading-relaxed bg-white/80 rounded px-1 py-1 shadow-sm">
              Maîtres de l'art de vivre, ils nous enseignent la zen attitude !
              2 mâles et 4 femelles aux personnalités uniques.
            </p>
            <div className="text-center mt-6" aria-hidden="true">
              <span className="text-2xl">😸 😺 🙀</span>
            </div>
            <div className="text-center mt-4">
              <span className="inline-flex items-center text-poilu-roy font-semibold group-hover:text-poilu-turquoise transition-colors duration-300">
                Découvrir nos chats
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </a>

          {/* Carte Équidés */}
          <a href="/nos-animaux/#equides" className="bg-white/90 md:bg-gradient-to-br md:from-white md:to-poilu-creme p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-poilu-roy border-opacity-30 group hover:border-opacity-60 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-poilu-roy/40" aria-label="Découvrir nos équidés">
            <div className="w-16 h-16 bg-gradient-to-br from-poilu-roy to-poilu-soleil rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl" role="img" aria-label="cheval">🐎</span>
            </div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-poilu-roy text-center drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)]">Nos Équidés</h3>
            <p className="text-gray-800 font-body text-center leading-relaxed bg-white/80 rounded px-1 py-1 shadow-sm">
              Good le cheval et Comme d'habitude la jument, qui nous connectent à la nature
              et nous rappellent la beauté des relations authentiques.
            </p>
            <div className="text-center mt-6" aria-hidden="true">
              <span className="text-2xl">✨ 🦄 ✨</span>
            </div>
            <div className="text-center mt-4">
              <span className="inline-flex items-center text-poilu-roy font-semibold group-hover:text-poilu-turquoise transition-colors duration-300">
                Découvrir nos équidés
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </a>
        </section>

        {/* Lien vers nos anges gardiens */}
        <footer className="text-center mt-16" aria-label="Lien vers nos anges gardiens">
          <div className="max-w-2xl mx-auto">
            <p className="text-white mb-6 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
              Notre famille compte aussi <strong>4 anges gardiens</strong> qui veillent sur nous depuis les étoiles...
            </p>
            <a href="/nos-anges/" className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 border border-purple-200 hover:border-purple-300 focus:outline-none focus:ring-4 focus:ring-poilu-soleil/40" aria-label="Se souvenir de nos anges gardiens">
              <span className="text-lg mr-2" role="img" aria-label="colombe">🕊️</span>
              Se souvenir de nos anges gardiens
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
