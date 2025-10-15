import React from "react";

export default function CollaborationsSection() {
  return (
    <section
      className="py-16 bg-gradient-to-br from-poilu-roy via-poilu-turquoise to-poilu-soleil text-white"
      aria-labelledby="collaborations-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12" aria-labelledby="collaborations-title">
          <h2 id="collaborations-title" className="text-3xl md:text-4xl font-heading font-bold text-poilu-turquoise mb-4 font-heading">
            Ouverts aux <span className="font-script text-poilu-soleil">Collaborations</span> !
          </h2>
          <p className="text-lg text-poilu-roy font-body max-w-3xl mx-auto font-body">
            Notre communauté grandit chaque jour et nous sommes <strong>ouverts à collaborer</strong> avec des marques
            qui partagent nos valeurs : <strong>bien-être animal, authenticité et qualité</strong>.
          </p>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" aria-label="Présentation de la communauté et de l'offre">
          {/* Notre communauté actuelle */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-poilu-turquoise/20">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-poilu-turquoise to-poilu-roy rounded-2xl flex items-center justify-center mb-4 mx-auto" aria-hidden="true">
                <span className="text-3xl" role="img" aria-label="jeune pousse">🌱</span>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-poilu-turquoise font-heading">Notre Communauté</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-poilu-turquoise">TikTok</span>
                  <span className="font-bold text-poilu-turquoise">733 abonnés</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-poilu-turquoise">Instagram</span>
                  <span className="font-bold text-poilu-turquoise">121 abonnés</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-poilu-turquoise">Engagement</span>
                  <span className="font-bold text-poilu-turquoise">Authentique & sincère <span role="img" aria-label="cible">🎯</span></span>
                </div>
                <div className="bg-poilu-turquoise/10 rounded-lg p-3 mt-4">
                  <p className="text-sm text-poilu-turquoise font-medium font-body">
                    <span role="img" aria-label="étoile">🌟</span> <strong>Communauté en croissance</strong><br />
                    Des abonnés passionnés d'animaux !
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Ce que nous offrons */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-poilu-soleil/20">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-poilu-soleil to-poilu-turquoise rounded-2xl flex items-center justify-center mb-4 mx-auto" aria-hidden="true">
                <span className="text-3xl" role="img" aria-label="étoile filante">💫</span>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-poilu-turquoise font-heading">Ce que nous offrons</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <span className="text-poilu-turquoise">✓</span>
                  <span className="text-poilu-turquoise">Tests <strong>honnêtes</strong> avec nos 9 compagnons</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-poilu-turquoise">✓</span>
                  <span className="text-poilu-gris">Contenu <strong>créatif</strong> et authentique</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-poilu-turquoise">✓</span>
                  <span className="text-poilu-gris">Audience <strong>engagée</strong> d'amoureux des animaux</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-poilu-turquoise">✓</span>
                  <span className="text-poilu-gris">Approche <strong>familiale</strong> et bienveillante</span>
                </div>
                <div className="bg-poilu-soleil/10 rounded-lg p-3 mt-4">
                  <p className="text-sm text-poilu-roy font-medium font-body">
                    <span role="img" aria-label="fusée">🚀</span> <strong>Prêts à grandir ensemble</strong><br />
                    Votre marque + Notre passion !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA discret pour les marques */}
        <footer className="bg-gradient-to-r from-poilu-turquoise/10 to-poilu-roy/5 backdrop-blur-sm rounded-3xl p-8 text-center border border-poilu-turquoise/20 mt-8" aria-label="Contact marques">
          <div className="mb-6">
            <span className="text-4xl mb-4 block" aria-hidden="true">🤝</span>
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Marques d'animaux, collaborons ensemble !
            </h3>
          </div>
          <p className="text-lg text-poilu-creme mb-6 max-w-3xl mx-auto">
            Nous sommes une <strong>jeune communauté en pleine croissance</strong> avec 9 compagnons testeurs !
            Vous avez des produits pour animaux à faire découvrir ?
            <strong>Nous sommes ouverts aux collaborations</strong> avec des marques qui partagent nos valeurs.
          </p>
          <div className="bg-white/90 rounded-2xl p-6 mb-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div>
                <span className="text-2xl font-bold text-poilu-turquoise">733</span>
                <p className="text-sm text-poilu-gris">TikTok</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-poilu-soleil">121</span>
                <p className="text-sm text-poilu-gris">Instagram</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-poilu-roy">9</span>
                <p className="text-sm text-poilu-gris">Testeurs à poils !</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact" className="bg-gradient-to-r from-poilu-roy to-poilu-turquoise text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center group hover:scale-105 focus:outline-none focus:ring-4 focus:ring-poilu-turquoise/40" aria-label="Contactez-nous pour collaborer">
              <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Commençons à collaborer !
            </a>
            <a
              href="https://www.instagram.com/la_communaute_des_9_poilus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-poilu-soleil to-poilu-turquoise text-white font-mono px-4 py-2 rounded-xl text-sm font-bold tracking-wide shadow hover:from-poilu-turquoise hover:to-poilu-soleil transition-all focus:outline-none focus:ring-2 focus:ring-poilu-turquoise"
              aria-label="Instagram - Ouvre le profil Instagram dans un nouvel onglet"
              tabIndex={0}
              title="Voir notre Instagram (@la_communaute_des_9_poilus)"
            >
              <span className="w-5 h-5" aria-hidden="true">
                {/* Instagram SVG */}
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <defs>
                    <radialGradient id="ig-gradient-collab-btn" cx="0.5" cy="0.5" r="0.8">
                      <stop offset="0%" stop-color="#f9ce34"/>
                      <stop offset="45%" stop-color="#ee2a7b"/>
                      <stop offset="100%" stop-color="#6228d7"/>
                    </radialGradient>
                  </defs>
                  <rect x="6" y="6" width="20" height="20" rx="6" fill="url(#ig-gradient-collab-btn)"/>
                  <circle cx="16" cy="16" r="6" fill="#fff"/>
                  <circle cx="16" cy="16" r="4" fill="#ee2a7b"/>
                  <circle cx="23" cy="9" r="1.5" fill="#fff"/>
                </svg>
              </span>
              Instagram
            </a>
            <div className="text-poilu-creme text-sm text-center">
              <p className="font-semibold">Ou écrivez-nous directement :</p>
              <p><span role="img" aria-label="téléphone">📱</span> DM Instagram/TikTok</p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
