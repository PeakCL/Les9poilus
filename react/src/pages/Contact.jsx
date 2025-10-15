import React from "react";

export default function Contact() {
  return (
    <section
      className="w-full min-h-screen bg-gradient-to-br from-poilu-roy via-poilu-turquoise to-poilu-soleil pb-10 xs:pb-12 sm:pb-16"
      aria-labelledby="contact-title"
    >
      {/* Bandeau principal */}
      <header className="w-full bg-gradient-to-r from-poilu-roy to-poilu-turquoise py-7 xs:py-8 sm:py-10 mb-8 xs:mb-10 sm:mb-12" aria-labelledby="contact-title">
        <h1 id="contact-title" className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-cinzel-bold text-white text-center drop-shadow-lg tracking-tight">
          Rejoignez Notre Communauté
        </h1>
        <p className="text-center text-poilu-creme font-body text-base xs:text-lg mt-2 xs:mt-3 sm:mt-4">
          Entrons en contact et partageons ensemble notre passion pour nos compagnons à quatre pattes !
        </p>
      </header>
      {/* Bloc d'intro réseaux & communauté */}
      <div className="max-w-6xl mx-auto px-2 xs:px-3 sm:px-4 mb-10 xs:mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row gap-6 xs:gap-8">
          {/* Colonne gauche : Suivez-nous */}
          <section className="flex-1 min-w-0" aria-label="Réseaux sociaux">
            <h2 className="text-xl xs:text-2xl font-cinzel-bold text-poilu-turquoise mb-4 xs:mb-6">Suivez-nous</h2>
            <div className="flex flex-col gap-4 xs:gap-6">
              {/* TikTok */}
              <div className="rounded-3xl bg-white/95 shadow-lg p-4 xs:p-6 mb-2 border border-poilu-turquoise/10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl" aria-hidden="true">🎵</span>
                  <span className="font-heading text-base xs:text-lg text-poilu-turquoise font-bold drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)]">TikTok</span>
                </div>
                <div className="text-gray-800 font-body text-sm xs:text-base mb-1 xs:mb-2">Vidéos courtes et amusantes</div>
                <div className="text-gray-800 font-body text-xs xs:text-sm mb-2 xs:mb-3">Découvrez nos moments quotidiens en vidéo ! Behind the scenes, moments drôles et attendrissants avec nos 9 compagnons.</div>
                <a href="https://www.tiktok.com/@communaute_9_poilus" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white font-mono px-3 xs:px-4 py-1.5 xs:py-2 rounded-xl text-xs xs:text-sm font-bold tracking-wide shadow hover:bg-poilu-roy transition-all focus:outline-none focus:ring-2 focus:ring-poilu-turquoise" aria-label="Voir notre TikTok">@communaute_9_poilus ↗</a>
              </div>
              {/* Instagram */}
              <div className="rounded-3xl bg-white/95 shadow-lg p-4 xs:p-6 border border-poilu-turquoise/10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl" aria-hidden="true">📸</span>
                  <span className="font-heading text-base xs:text-lg text-poilu-turquoise font-bold drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)]">Instagram</span>
                </div>
                <div className="text-gray-800 font-body text-sm xs:text-base mb-1 xs:mb-2">Photos et stories</div>
                <div className="text-gray-800 font-body text-xs xs:text-sm mb-2 xs:mb-3">Les plus belles photos de nos aventures ! Portraits, paysages et moments de complicité avec GoodVisor, Yellow, Téthys et tous les autres.</div>
                <a href="https://www.instagram.com/la_communaute_des_9_poilus" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-poilu-soleil to-poilu-turquoise text-white font-mono px-3 xs:px-4 py-1.5 xs:py-2 rounded-xl text-xs xs:text-sm font-bold tracking-wide shadow hover:from-poilu-turquoise hover:to-poilu-soleil transition-all focus:outline-none focus:ring-2 focus:ring-poilu-turquoise" aria-label="Voir notre Instagram">@la_communaute_des_9_poilus ↗</a>
              </div>
            </div>
          </section>
          {/* Colonne droite : Parlez-nous */}
          <section className="flex-1 min-w-0" aria-label="Communauté et contact">
            <h2 className="text-xl xs:text-2xl font-cinzel-bold text-poilu-turquoise mb-4 xs:mb-6">Parlons Ensemble</h2>
            <div className="flex flex-col gap-4 xs:gap-6">
              {/* Notre Communauté */}
              <div className="rounded-3xl bg-gradient-to-br from-poilu-soleil/10 via-white to-poilu-turquoise/10 shadow-lg p-4 xs:p-6 mb-2 border border-poilu-turquoise/10">
                <h3 className="text-base xs:text-lg font-heading text-poilu-turquoise font-bold mb-2 xs:mb-3 flex items-center gap-2"><span className="text-lg xs:text-xl" aria-hidden="true">🌞</span> Notre Communauté</h3>
                <ul className="space-y-3 xs:space-y-4 text-left">
                  <li className="flex items-start gap-2 xs:gap-3">
                    <span className="text-base xs:text-lg mt-1" aria-hidden="true">📝</span>
                    <div>
                      <span className="font-bold text-poilu-turquoise">Partagez vos histoires</span><br />
                      <span className="text-poilu-roy font-body text-xs xs:text-sm">Vous avez aussi des compagnons à quatre pattes ? Taguez-nous dans vos publications avec #Les9Poilus pour partager vos moments !</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2 xs:gap-3">
                    <span className="text-base xs:text-lg mt-1" aria-hidden="true">💙</span>
                    <div>
                      <span className="font-bold text-poilu-turquoise">Communauté bienveillante</span><br />
                      <span className="text-poilu-roy font-body text-xs xs:text-sm">Notre communauté est un espace de partage, de conseils et de soutien entre amoureux des animaux. Respectons-nous mutuellement !</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2 xs:gap-3">
                    <span className="text-base xs:text-lg mt-1" aria-hidden="true">🤝</span>
                    <div>
                      <span className="font-bold text-poilu-turquoise">Collaborations</span><br />
                      <span className="text-poilu-roy font-body text-xs xs:text-sm">Marques éthiques et responsables, refuges, associations... N'hésitez pas à nous contacter via nos réseaux sociaux pour des partenariats alignés avec nos valeurs.</span>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Rejoignez l'aventure */}
              <div className="rounded-3xl bg-gradient-to-br from-poilu-soleil via-poilu-turquoise to-poilu-roy shadow-lg p-4 xs:p-6 border border-poilu-turquoise/10">
                <h3 className="text-base xs:text-lg font-heading text-white font-bold mb-2 xs:mb-3">Rejoignez l'Aventure !</h3>
                <div className="text-white font-body text-xs xs:text-base mb-2 xs:mb-4">Ne ratez aucun moment de notre quotidien avec GoodVisor du Gelon, Comme d'habitude, Mako, Hawaï, Mowgli, Yellow, Téthys, Nyx et Phuket !</div>
                <div className="flex flex-wrap gap-2 xs:gap-4 justify-center">
                  <a
                    href="https://www.tiktok.com/@communaute_9_poilus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-black/80 text-white font-mono px-3 xs:px-4 py-1.5 xs:py-2 rounded-xl text-xs xs:text-sm font-bold tracking-wide shadow hover:bg-poilu-roy transition-all focus:outline-none focus:ring-2 focus:ring-poilu-turquoise"
                    aria-label="TikTok - Ouvre le profil TikTok dans un nouvel onglet"
                    tabIndex={0}
                    title="Voir notre TikTok (@communaute_9_poilus)"
                  >
                    <span className="w-5 h-5" aria-hidden="true">
                      {/* TikTok SVG */}
                      <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                        <path d="M21.5 2a1 1 0 0 1 1 1c0 3.6 2.4 6.1 6 6.1a1 1 0 0 1 1 1v4.2a1 1 0 0 1-1 1c-1.2 0-2.4-.2-3.5-.7v7.7c0 5.2-4.2 9.4-9.4 9.4S6.2 27.3 6.2 22.1c0-5.2 4.2-9.4 9.4-9.4.3 0 .6 0 .9.1a1 1 0 0 1 .8 1v4.2a1 1 0 0 1-1 1c-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3 4.3-1.9 4.3-4.3V2.9a1 1 0 0 1 1-1h2.2z" />
                      </svg>
                    </span>
                    TikTok
                  </a>
                  <a
                    href="https://www.instagram.com/la_communaute_des_9_poilus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-poilu-soleil to-poilu-turquoise text-white font-mono px-3 xs:px-4 py-1.5 xs:py-2 rounded-xl text-xs xs:text-sm font-bold tracking-wide shadow hover:from-poilu-turquoise hover:to-poilu-soleil transition-all focus:outline-none focus:ring-2 focus:ring-poilu-turquoise"
                    aria-label="Instagram - Ouvre le profil Instagram dans un nouvel onglet"
                    tabIndex={0}
                    title="Voir notre Instagram (@la_communaute_des_9_poilus)"
                  >
                    <span className="w-5 h-5" aria-hidden="true">
                      {/* Instagram SVG */}
                      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                        <defs>
                          <radialGradient id="ig-gradient-contact" cx="0.5" cy="0.5" r="0.8">
                            <stop offset="0%" stop-color="#f9ce34"/>
                            <stop offset="45%" stop-color="#ee2a7b"/>
                            <stop offset="100%" stop-color="#6228d7"/>
                          </radialGradient>
                        </defs>
                        <rect x="6" y="6" width="20" height="20" rx="6" fill="url(#ig-gradient-contact)"/>
                        <circle cx="16" cy="16" r="6" fill="#fff"/>
                        <circle cx="16" cy="16" r="4" fill="#ee2a7b"/>
                        <circle cx="23" cy="9" r="1.5" fill="#fff"/>
                      </svg>
                    </span>
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61575813491991&sk=about"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white font-mono px-3 xs:px-4 py-1.5 xs:py-2 rounded-xl text-xs xs:text-sm font-bold tracking-wide shadow hover:bg-blue-800 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
                    aria-label="Facebook - Ouvre le profil Facebook dans un nouvel onglet"
                    tabIndex={0}
                    title="Voir notre Facebook (Les 9 Poilus)"
                  >
                    <span className="w-5 h-5" aria-hidden="true">
                      {/* Facebook SVG */}
                      <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                        <circle cx="16" cy="16" r="16" fill="#1877F3"/>
                        <path d="M21.5 16H18v8h-4v-8h-2v-3h2v-2c0-2 1-3 3-3h3v3h-2c-.7 0-1 .3-1 1v1h3l-.5 3z" fill="#fff"/>
                      </svg>
                    </span>
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-2 xs:px-3 sm:px-4">
        {/* Formulaire */}
        <div className="bg-white rounded-3xl shadow-xl p-5 xs:p-7 sm:p-10 mb-8 xs:mb-10 sm:mb-12 border border-poilu-roy/10">
          <h2 className="text-xl xs:text-2xl font-heading text-poilu-turquoise mb-4 xs:mb-6">Écrivez-nous</h2>
          <form className="space-y-4 xs:space-y-6">
            <div>
              <label className="block mb-1 xs:mb-2 font-heading font-semibold text-poilu-turquoise" htmlFor="nom">Votre nom *</label>
              <input className="w-full px-3 xs:px-4 py-1.5 xs:py-2 rounded-xl border border-poilu-turquoise text-poilu-roy font-body placeholder:text-poilu-gris focus:outline-none focus:ring-2 focus:ring-poilu-turquoise" type="text" id="nom" name="nom" required />
            </div>
            <div>
              <label className="block mb-1 xs:mb-2 font-heading font-semibold text-poilu-turquoise" htmlFor="email">Votre email *</label>
              <input className="w-full px-3 xs:px-4 py-1.5 xs:py-2 rounded-xl border border-poilu-turquoise text-poilu-roy font-body placeholder:text-poilu-gris focus:outline-none focus:ring-2 focus:ring-poilu-turquoise" type="email" id="email" name="email" required />
            </div>
            <div>
              <label className="block mb-1 xs:mb-2 font-heading font-semibold text-poilu-turquoise" htmlFor="sujet">Sujet</label>
              <input className="w-full px-3 xs:px-4 py-1.5 xs:py-2 rounded-xl border border-poilu-turquoise text-poilu-roy font-body placeholder:text-poilu-gris focus:outline-none focus:ring-2 focus:ring-poilu-turquoise" type="text" id="sujet" name="sujet" />
            </div>
            <div>
              <label className="block mb-1 xs:mb-2 font-heading font-semibold text-poilu-turquoise" htmlFor="message">Votre message *</label>
              <textarea className="w-full px-3 xs:px-4 py-1.5 xs:py-2 rounded-xl border border-poilu-turquoise text-poilu-roy font-body placeholder:text-poilu-gris focus:outline-none focus:ring-2 focus:ring-poilu-turquoise" id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="bg-poilu-turquoise hover:bg-poilu-roy text-white font-heading px-6 xs:px-8 py-3 xs:py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-poilu-turquoise">
              Envoyer le message
            </button>
          </form>
        </div>
        {/* Suivez-nous */}
        <div className="bg-gradient-to-br from-poilu-turquoise/10 to-poilu-roy/5 rounded-3xl p-5 xs:p-8 mb-8 xs:mb-12 shadow flex flex-col md:flex-row gap-4 xs:gap-8 items-center justify-center">
          <div className="flex-1 text-center min-w-0">
            <h3 className="text-lg xs:text-xl font-heading text-poilu-turquoise mb-1 xs:mb-2">Suivez-nous</h3>
            <div className="flex flex-col md:flex-row gap-3 xs:gap-6 justify-center items-center">
              <a
                href="https://www.tiktok.com/@communaute_9_poilus"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-poilu-turquoise hover:bg-poilu-roy text-white font-heading px-4 xs:px-6 py-2 xs:py-3 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 text-base xs:text-lg mb-2 md:mb-0 focus:outline-none focus:ring-2 focus:ring-poilu-turquoise"
                aria-label="TikTok - Ouvre le profil TikTok dans un nouvel onglet"
                tabIndex={0}
                title="Voir notre TikTok (@communaute_9_poilus)"
              >
                <span className="w-6 h-6 mr-3" aria-hidden="true">
                  {/* TikTok SVG */}
                  <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M21.5 2a1 1 0 0 1 1 1c0 3.6 2.4 6.1 6 6.1a1 1 0 0 1 1 1v4.2a1 1 0 0 1-1 1c-1.2 0-2.4-.2-3.5-.7v7.7c0 5.2-4.2 9.4-9.4 9.4S6.2 27.3 6.2 22.1c0-5.2 4.2-9.4 9.4-9.4.3 0 .6 0 .9.1a1 1 0 0 1 .8 1v4.2a1 1 0 0 1-1 1c-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3 4.3-1.9 4.3-4.3V2.9a1 1 0 0 1 1-1h2.2z" />
                  </svg>
                </span>
                TikTok
              </a>
              <a
                href="https://www.instagram.com/la_communaute_des_9_poilus"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-poilu-soleil hover:bg-poilu-turquoise text-poilu-roy hover:text-white font-heading px-4 xs:px-6 py-2 xs:py-3 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 text-base xs:text-lg focus:outline-none focus:ring-2 focus:ring-poilu-turquoise"
                aria-label="Instagram - Ouvre le profil Instagram dans un nouvel onglet"
                tabIndex={0}
                title="Voir notre Instagram (@la_communaute_des_9_poilus)"
              >
                <span className="w-6 h-6 mr-3" aria-hidden="true">
                  {/* Instagram SVG */}
                  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <defs>
                      <radialGradient id="ig-gradient-contact-btn" cx="0.5" cy="0.5" r="0.8">
                        <stop offset="0%" stop-color="#f9ce34"/>
                        <stop offset="45%" stop-color="#ee2a7b"/>
                        <stop offset="100%" stop-color="#6228d7"/>
                      </radialGradient>
                    </defs>
                    <rect x="6" y="6" width="20" height="20" rx="6" fill="url(#ig-gradient-contact-btn)"/>
                    <circle cx="16" cy="16" r="6" fill="#fff"/>
                    <circle cx="16" cy="16" r="4" fill="#ee2a7b"/>
                    <circle cx="23" cy="9" r="1.5" fill="#fff"/>
                  </svg>
                </span>
                Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61575813491991&sk=about"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-800 text-white font-heading px-4 xs:px-6 py-2 xs:py-3 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 text-base xs:text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Facebook - Ouvre le profil Facebook dans un nouvel onglet"
                tabIndex={0}
                title="Voir notre Facebook (Les 9 Poilus)"
              >
                <span className="w-6 h-6 mr-3" aria-hidden="true">
                  {/* Facebook SVG */}
                  <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <circle cx="16" cy="16" r="16" fill="#1877F3"/>
                    <path d="M21.5 16H18v8h-4v-8h-2v-3h2v-2c0-2 1-3 3-3h3v3h-2c-.7 0-1 .3-1 1v1h3l-.5 3z" fill="#fff"/>
                  </svg>
                </span>
                Facebook
              </a>
            </div>
          </div>
        </div>
        {/* Communauté bienveillante */}
        <div className="bg-white rounded-3xl p-5 xs:p-8 shadow text-center border border-poilu-turquoise/10">
          <h3 className="text-lg xs:text-xl font-heading text-poilu-turquoise mb-1 xs:mb-2">Communauté bienveillante</h3>
          <p className="text-poilu-roy font-body text-base xs:text-lg mb-1 xs:mb-2">Notre communauté est un espace de partage, de conseils et de soutien entre amoureux des animaux. Respectons-nous mutuellement !</p>
          <p className="text-poilu-turquoise font-body text-xs xs:text-base">Vous avez aussi des compagnons à quatre pattes ? Taguez-nous dans vos publications avec <span className="font-heading font-semibold">#Les9Poilus</span> pour partager vos moments !</p>
        </div>
      </div>
    </section>
  );
}
