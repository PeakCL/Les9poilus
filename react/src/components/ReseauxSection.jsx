import React from "react";

export default function ReseauxSection() {
  return (
    <section
      className="py-8 xs:py-10 sm:py-14 md:py-20 bg-gradient-to-r from-poilu-turquoise via-poilu-roy to-poilu-soleil"
      aria-labelledby="reseaux-title"
    >
      <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 text-center">
        <header className="mb-6 xs:mb-8 sm:mb-10 md:mb-14" aria-labelledby="reseaux-title">
          <h2 id="reseaux-title" className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-poilu-turquoise mb-3 xs:mb-4 font-heading">
            Suivez nos <span className="font-script text-poilu-soleil">aventures quotidiennes</span> !
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-body bg-white/95 text-poilu-roy rounded-2xl px-2 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 shadow-lg border border-poilu-roy/10 mb-2">
            <span className="text-poilu-roy font-semibold">Moments drôles, tendres et spontanés avec nos 9 poilus</span> –
            <span className="text-poilu-turquoise font-semibold"> En exclusivité sur nos réseaux !</span>
          </p>
        </header>
        <section className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 max-w-5xl mx-auto" aria-label="Réseaux sociaux de la communauté">
          {/* TikTok Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-4 xs:p-5 sm:p-7 md:p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-yellow-300 flex flex-col h-full min-w-0">
            <div className="mb-4 sm:mb-6 flex-1 flex flex-col justify-between">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-black to-gray-800 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg" aria-hidden="true">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-heading font-bold text-gray-900 mb-2 sm:mb-3 break-words leading-tight max-w-full whitespace-pre-line text-balance">
                <span className="break-all inline-block max-w-[80vw] xs:max-w-[60vw] sm:max-w-xs md:max-w-[180px] text-center">
                  @communaute_9_poilus
                </span>
              </h3>
              <p className="text-gray-800 drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)] mb-3 xs:mb-4 sm:mb-6 leading-relaxed text-xs xs:text-sm sm:text-base">
                <span role="img" aria-label="caméra">🎬</span> <strong>Vidéos exclusives</strong> de nos animaux<br />
                <span role="img" aria-label="rire">😂</span> Moments drôles en temps réel<br />
                <span role="img" aria-label="pattes">🐾</span> Behind the scenes de notre quotidien
              </p>
            </div>
            <a
              href="https://www.tiktok.com/@communaute_9_poilus"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-black to-gray-800 text-white px-4 py-2.5 xs:px-5 xs:py-3 sm:px-8 sm:py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 inline-flex items-center group w-full justify-center focus:outline-none focus:ring-4 focus:ring-gray-300 text-xs xs:text-sm sm:text-base"
              aria-label="TikTok - Ouvre le profil TikTok dans un nouvel onglet"
              tabIndex={0}
              title="Voir notre TikTok (@communaute_9_poilus)"
            >
              <span className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" aria-hidden="true">
                {/* TikTok SVG */}
                <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M21.5 2a1 1 0 0 1 1 1c0 3.6 2.4 6.1 6 6.1a1 1 0 0 1 1 1v4.2a1 1 0 0 1-1 1c-1.2 0-2.4-.2-3.5-.7v7.7c0 5.2-4.2 9.4-9.4 9.4S6.2 27.3 6.2 22.1c0-5.2 4.2-9.4 9.4-9.4.3 0 .6 0 .9.1a1 1 0 0 1 .8 1v4.2a1 1 0 0 1-1 1c-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3 4.3-1.9 4.3-4.3V2.9a1 1 0 0 1 1-1h2.2z" />
                </svg>
              </span>
              Suivre sur TikTok
            </a>
          </div>
          {/* Instagram Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-4 xs:p-5 sm:p-7 md:p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-poilu-turquoise flex flex-col h-full min-w-0">
            <div className="mb-4 sm:mb-6 flex-1 flex flex-col justify-between">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg" aria-hidden="true" style={{background: 'radial-gradient(circle at 30% 107%, #f9ce34 0%, #ee2a7b 45%, #6228d7 100%)'}}>
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <defs>
                    <radialGradient id="ig-gradient-reseaux" cx="0.5" cy="0.5" r="0.8">
                      <stop offset="0%" stop-color="#f9ce34"/>
                      <stop offset="45%" stop-color="#ee2a7b"/>
                      <stop offset="100%" stop-color="#6228d7"/>
                    </radialGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#ig-gradient-reseaux)"/>
                  <circle cx="12" cy="12" r="6" fill="#fff"/>
                  <circle cx="12" cy="12" r="4" fill="#ee2a7b"/>
                  <circle cx="18" cy="6" r="1.2" fill="#fff"/>
                </svg>
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-heading font-bold text-gray-900 mb-2 sm:mb-3 break-words leading-tight max-w-full whitespace-pre-line text-balance">
                <span className="break-all inline-block max-w-[80vw] xs:max-w-[60vw] sm:max-w-xs md:max-w-[180px] text-center">
                  @la_communaute_des_9_poilus
                </span>
              </h3>
              <p className="text-gray-800 drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)] mb-3 xs:mb-4 sm:mb-6 leading-relaxed text-xs xs:text-sm sm:text-base">
                <span role="img" aria-label="appareil photo">📸</span> <strong>Photos lifestyle</strong> avec nos animaux<br />
                <span role="img" aria-label="étoile">✨</span> Stories quotidiennes authentiques<br />
                <span role="img" aria-label="coeur">💝</span> Conseils et moments tendres
              </p>
            </div>
            <a
              href="https://www.instagram.com/la_communaute_des_9_poilus"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2.5 xs:px-5 xs:py-3 sm:px-8 sm:py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 inline-flex items-center group w-full justify-center focus:outline-none focus:ring-4 focus:ring-purple-300 text-xs xs:text-sm sm:text-base"
              aria-label="Instagram - Ouvre le profil Instagram dans un nouvel onglet"
              tabIndex={0}
              title="Voir notre Instagram (@la_communaute_des_9_poilus)"
            >
              <span className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" aria-hidden="true">
                {/* Instagram SVG */}
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <defs>
                    <radialGradient id="ig-gradient-reseaux-btn" cx="0.5" cy="0.5" r="0.8">
                      <stop offset="0%" stop-color="#f9ce34"/>
                      <stop offset="45%" stop-color="#ee2a7b"/>
                      <stop offset="100%" stop-color="#6228d7"/>
                    </radialGradient>
                  </defs>
                  <rect x="6" y="6" width="20" height="20" rx="6" fill="url(#ig-gradient-reseaux-btn)"/>
                  <circle cx="16" cy="16" r="6" fill="#fff"/>
                  <circle cx="16" cy="16" r="4" fill="#ee2a7b"/>
                  <circle cx="23" cy="9" r="1.5" fill="#fff"/>
                </svg>
              </span>
              Suivre sur Instagram
            </a>
          </div>
          {/* Facebook Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-4 xs:p-5 sm:p-7 md:p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-blue-600 flex flex-col h-full min-w-0">
            <div className="mb-4 sm:mb-6 flex-1 flex flex-col justify-between">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg" aria-hidden="true">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
                </svg>
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-heading font-bold text-gray-900 mb-2 sm:mb-3 break-words leading-tight">Les 9 Poilus</h3>
              <p className="text-gray-800 drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)] mb-3 xs:mb-4 sm:mb-6 leading-relaxed text-xs xs:text-sm sm:text-base">
                <span role="img" aria-label="main">👍</span> Rejoignez notre communauté Facebook<br />
                <span role="img" aria-label="partage">🔗</span> Partagez vos moments avec nous<br />
                <span role="img" aria-label="discussion">💬</span> Discussions et entraide
              </p>
            </div>
            <a
              href="https://www.facebook.com/profile.php?id=61575813491991&sk=about"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2.5 xs:px-5 xs:py-3 sm:px-8 sm:py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 inline-flex items-center group w-full justify-center focus:outline-none focus:ring-4 focus:ring-blue-300 text-xs xs:text-sm sm:text-base"
              aria-label="Facebook - Ouvre le profil Facebook dans un nouvel onglet"
              tabIndex={0}
              title="Voir notre Facebook (Les 9 Poilus)"
            >
              <span className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" aria-hidden="true">
                {/* Facebook SVG */}
                <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <circle cx="16" cy="16" r="16" fill="#1877F3"/>
                  <path d="M21.5 16H18v8h-4v-8h-2v-3h2v-2c0-2 1-3 3-3h3v3h-2c-.7 0-1 .3-1 1v1h3l-.5 3z" fill="#fff"/>
                </svg>
              </span>
              Suivre sur Facebook
            </a>
          </div>
        </section>
        {/* Appel à l'action communauté */}
        <footer className="mt-6 xs:mt-8 sm:mt-10 md:mt-14 text-white" aria-label="Appel à rejoindre la communauté">
          <p className="text-sm xs:text-base sm:text-lg opacity-95 mb-3 xs:mb-4 sm:mb-6 drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)]">
            <span role="img" aria-label="étoile">🌟</span> Rejoignez notre communauté bienveillante d'amoureux des animaux !
          </p>
          <div className="flex flex-wrap justify-center gap-1.5 xs:gap-2 sm:gap-4 text-xs sm:text-sm opacity-80">
            <span className="bg-white bg-opacity-20 px-2.5 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2 rounded-full">#Les9Poilus</span>
            <span className="bg-white bg-opacity-20 px-2.5 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2 rounded-full">#VieAvecAnimaux</span>
            <span className="bg-white bg-opacity-20 px-2.5 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2 rounded-full">#AmourAnimaux</span>
            <span className="bg-white bg-opacity-20 px-2.5 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2 rounded-full">#QuotidienPoilus</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
