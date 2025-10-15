import React from "react";

export default function Collaborations() {
  return ( 
    <section className="w-full min-h-screen bg-gradient-to-br from-poilu-roy via-poilu-turquoise to-poilu-soleil pb-10 xs:pb-12 sm:pb-16">
      <div className="w-full bg-gradient-to-r from-poilu-roy to-poilu-turquoise py-7 xs:py-8 sm:py-10 mb-8 xs:mb-10 sm:mb-12">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-cinzel-bold text-poilu-soleil text-center drop-shadow-lg tracking-tight">Ouverts aux Collaborations !</h1>
        <p className="text-center text-white font-body text-base xs:text-lg mt-2 xs:mt-3 sm:mt-4">Une communauté en croissance qui fait confiance à notre authenticité</p>
      </div>
      <div className="max-w-4xl mx-auto px-2 xs:px-3 sm:px-4">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 xs:gap-6 mb-8 xs:mb-10">
          <div className="bg-white/95 rounded-2xl shadow p-4 xs:p-6 flex flex-col items-center min-w-0">
            <a
              href="https://www.tiktok.com/@communaute_9_poilus"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 w-10 h-10 flex items-center justify-center rounded-full bg-black/90 hover:bg-poilu-roy transition-colors focus:outline-none focus:ring-2 focus:ring-poilu-turquoise"
              aria-label="TikTok - Ouvre le profil TikTok dans un nouvel onglet"
              tabIndex={0}
              title="Voir notre TikTok (@communaute_9_poilus)"
            >
              <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                <path d="M21.5 2a1 1 0 0 1 1 1c0 3.6 2.4 6.1 6 6.1a1 1 0 0 1 1 1v4.2a1 1 0 0 1-1 1c-1.2 0-2.4-.2-3.5-.7v7.7c0 5.2-4.2 9.4-9.4 9.4S6.2 27.3 6.2 22.1c0-5.2 4.2-9.4 9.4-9.4.3 0 .6 0 .9.1a1 1 0 0 1 .8 1v4.2a1 1 0 0 1-1 1c-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3 4.3-1.9 4.3-4.3V2.9a1 1 0 0 1 1-1h2.2z" />
              </svg>
            </a>
            <h2 className="text-base xs:text-xl font-heading text-poilu-roy mb-1">TikTok</h2>
            <p className="text-poilu-gris font-body text-center text-xs xs:text-base">733 abonnés<br/>Abonnés engagés<br/>Croissance quotidienne</p>
          </div>
          <div className="bg-white/95 rounded-2xl shadow p-4 xs:p-6 flex flex-col items-center min-w-0">
            <a
              href="https://www.instagram.com/la_communaute_des_9_poilus"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-poilu-soleil to-poilu-turquoise hover:from-poilu-turquoise hover:to-poilu-soleil transition-colors focus:outline-none focus:ring-2 focus:ring-poilu-turquoise"
              aria-label="Instagram - Ouvre le profil Instagram dans un nouvel onglet"
              tabIndex={0}
              title="Voir notre Instagram (@la_communaute_des_9_poilus)"
            >
              <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                <rect x="6" y="6" width="20" height="20" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="16" cy="16" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="23" cy="9" r="1.5" />
              </svg>
            </a>
            <h2 className="text-base xs:text-xl font-heading text-poilu-roy mb-1">Instagram</h2>
            <p className="text-poilu-gris font-body text-center text-xs xs:text-base">121 abonnés<br/>Communauté passionnée<br/>Stories quotidiennes</p>
          </div>
          <div className="bg-white/95 rounded-2xl shadow p-4 xs:p-6 flex flex-col items-center min-w-0">
            <a
              href="https://www.facebook.com/profile.php?id=61575813491991&sk=about"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Facebook - Ouvre le profil Facebook dans un nouvel onglet"
              tabIndex={0}
              title="Voir notre Facebook (Les 9 Poilus)"
            >
              <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                <circle cx="16" cy="16" r="16" fill="#1877F3"/>
                <path d="M21.5 16H18v8h-4v-8h-2v-3h2v-2c0-2 1-3 3-3h3v3h-2c-.7 0-1 .3-1 1v1h3l-.5 3z" fill="#fff"/>
              </svg>
            </a>
            <h2 className="text-base xs:text-xl font-heading text-poilu-roy mb-1">Facebook</h2>
            <p className="text-poilu-gris font-body text-center text-xs xs:text-base">Rejoignez-nous<br/>Partagez vos moments<br/>Communauté active</p>
          </div>
          <div className="bg-white/95 rounded-2xl shadow p-4 xs:p-6 flex flex-col items-center min-w-0">
            <span className="text-4xl mb-2">🐾</span>
            <h2 className="text-base xs:text-xl font-heading text-poilu-roy mb-1">Testeurs</h2>
            <p className="text-poilu-gris font-body text-center text-xs xs:text-base">9 compagnons testeurs<br/>Avis authentiques</p>
          </div>
        </div>
        <div className="mb-8 xs:mb-10">
          <h2 className="text-xl xs:text-2xl font-heading text-poilu-roy mb-3 xs:mb-4">Ce que nous aimerions créer ensemble</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 xs:gap-6">
            <div className="bg-white/90 rounded-xl p-4 xs:p-6 shadow min-w-0">
              <h3 className="font-heading text-poilu-turquoise mb-2">🎬 Contenu Créatif</h3>
              <ul className="list-disc pl-4 xs:pl-6 text-poilu-gris text-xs xs:text-base space-y-1 font-body">
                <li>
                  <a
                    href="https://www.tiktok.com/@communaute_9_poilus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-poilu-turquoise hover:text-poilu-roy font-semibold focus:outline-none focus:ring-2 focus:ring-poilu-turquoise"
                    aria-label="Voir nos vidéos TikTok"
                    tabIndex={0}
                    title="Voir nos vidéos TikTok (@communaute_9_poilus)"
                  >
                    <span className="w-5 h-5" aria-hidden="true">
                      <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                        <path d="M21.5 2a1 1 0 0 1 1 1c0 3.6 2.4 6.1 6 6.1a1 1 0 0 1 1 1v4.2a1 1 0 0 1-1 1c-1.2 0-2.4-.2-3.5-.7v7.7c0 5.2-4.2 9.4-9.4 9.4S6.2 27.3 6.2 22.1c0-5.2 4.2-9.4 9.4-9.4.3 0 .6 0 .9.1a1 1 0 0 1 .8 1v4.2a1 1 0 0 1-1 1c-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3 4.3-1.9 4.3-4.3V2.9a1 1 0 0 1 1-1h2.2z" />
                      </svg>
                    </span>
                    Vidéos TikTok engageantes
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/la_communaute_des_9_poilus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-poilu-turquoise hover:text-poilu-roy font-semibold focus:outline-none focus:ring-2 focus:ring-poilu-turquoise"
                    aria-label="Voir nos stories Instagram"
                    tabIndex={0}
                    title="Voir nos stories Instagram (@la_communaute_des_9_poilus)"
                  >
                    <span className="w-5 h-5" aria-hidden="true">
                      <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                        <rect x="6" y="6" width="20" height="20" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
                        <circle cx="16" cy="16" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
                        <circle cx="23" cy="9" r="1.5" />
                      </svg>
                    </span>
                    Stories Instagram quotidiennes
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61575813491991&sk=about"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-poilu-turquoise hover:text-poilu-roy font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400"
                    aria-label="Voir notre page Facebook"
                    tabIndex={0}
                    title="Voir notre page Facebook (Les 9 Poilus)"
                  >
                    <span className="w-5 h-5" aria-hidden="true">
                      <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                        <circle cx="16" cy="16" r="16" fill="#1877F3"/>
                        <path d="M21.5 16H18v8h-4v-8h-2v-3h2v-2c0-2 1-3 3-3h3v3h-2c-.7 0-1 .3-1 1v1h3l-.5 3z" fill="#fff"/>
                      </svg>
                    </span>
                    Posts Facebook exclusifs
                  </a>
                </li>
                <li>Reels créatifs et authentiques</li>
              </ul>
            </div>
            <div className="bg-white/90 rounded-xl p-4 xs:p-6 shadow min-w-0">
              <h3 className="font-heading text-poilu-turquoise mb-2">� Tests Produits</h3>
              <ul className="list-disc pl-4 xs:pl-6 text-poilu-gris text-xs xs:text-base space-y-1 font-body">
                <li>Tests authentiques avec nos animaux</li>
                <li>Avis honnêtes et détaillés</li>
                <li>Démonstrations en situation réelle</li>
                <li>Retours constructifs</li>
              </ul>
            </div>
            <div className="bg-white/90 rounded-xl p-4 xs:p-6 shadow min-w-0">
              <h3 className="font-heading text-poilu-turquoise mb-2">📝 Articles & Reviews</h3>
              <ul className="list-disc pl-4 xs:pl-6 text-poilu-gris text-xs xs:text-base space-y-1 font-body">
                <li>Articles blog SEO optimisés</li>
                <li>Reviews produits détaillées</li>
                <li>Guides et conseils pratiques</li>
                <li>Témoignages d'expérience</li>
              </ul>
            </div>
            <div className="bg-white/90 rounded-xl p-4 xs:p-6 shadow min-w-0">
              <h3 className="font-heading text-poilu-turquoise mb-2">🎯 Campagnes Intégrées</h3>
              <ul className="list-disc pl-4 xs:pl-6 text-poilu-gris text-xs xs:text-base space-y-1 font-body">
                <li>Stratégie multi-plateformes</li>
                <li>Storytelling émotionnel</li>
                <li>Engagement communautaire</li>
                <li>Analyse des performances</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-8 xs:mb-10">
          <h2 className="text-xl xs:text-2xl font-heading text-poilu-roy mb-3 xs:mb-4 font-heading">Nos Valeurs</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6">
            <div className="bg-white/90 rounded-xl p-4 xs:p-6 shadow flex flex-col items-center min-w-0">
              <span className="text-3xl mb-2">🌿</span>
              <h3 className="font-heading text-poilu-turquoise mb-1 font-heading">Naturel</h3>
              <p className="text-poilu-gris text-center text-xs xs:text-sm font-body">Produits respectueux de l'environnement et de la santé animale</p>
            </div>
            <div className="bg-white/90 rounded-xl p-4 xs:p-6 shadow flex flex-col items-center min-w-0">
              <span className="text-3xl mb-2">💎</span>
              <h3 className="font-heading text-poilu-turquoise mb-1 font-heading">Qualité</h3>
              <p className="text-poilu-gris text-center text-xs xs:text-sm font-body">Excellence et durabilité dans chaque produit testé</p>
            </div>
            <div className="bg-white/90 rounded-xl p-4 xs:p-6 shadow flex flex-col items-center min-w-0">
              <span className="text-3xl mb-2">🤝</span>
              <h3 className="font-heading text-poilu-turquoise mb-1 font-heading">Transparence</h3>
              <p className="text-poilu-gris text-center text-xs xs:text-sm font-body">Avis honnêtes et authentiques, toujours</p>
            </div>
            <div className="bg-white/90 rounded-xl p-4 xs:p-6 shadow flex flex-col items-center min-w-0">
              <span className="text-3xl mb-2">❤️</span>
              <h3 className="font-heading text-poilu-turquoise mb-1 font-heading">Passion</h3>
              <p className="text-poilu-gris text-center text-xs xs:text-sm font-body">Amour véritable pour nos compagnons à quatre pattes</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 xs:mt-12">
          <h2 className="text-xl xs:text-2xl font-heading text-poilu-roy mb-1 xs:mb-2 font-heading">Commençons notre collaboration !</h2>
          <p className="font-body text-poilu-gris text-base xs:text-lg mb-2 xs:mb-4 font-body">Nous serions ravis de discuter de votre marque et créer ensemble du contenu authentique qui touchera notre communauté grandissante !</p>
          <a href="/contact" className="inline-block bg-poilu-turquoise text-white font-heading px-4 xs:px-6 py-2 xs:py-3 rounded-full shadow hover:bg-poilu-roy transition-colors font-heading">Nous contacter !</a>
        </div>
      </div>
    </section>
  );
}
