import React from "react";
import logo from '../assets/logos/logo.png';

export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-br from-[#1a2233] via-poilu-roy to-[#0e1624] text-white pt-12 pb-6 font-cinzel-bold border-t-4 border-poilu-soleil/30 shadow-2xl">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                {/* Bloc logo + titre */}
                <div className="flex flex-col items-center md:items-start gap-3 mb-6 md:mb-0">
                    <img src={logo} alt="Logo Les 9 Poilus" className="h-20 w-auto drop-shadow-2xl rounded-2xl bg-white/90 border-2 border-poilu-soleil" />
                    <span className="text-2xl tracking-wide drop-shadow font-cinzel-bold text-center md:text-left">La Communauté des 9 Poilus</span>
                </div>
                {/* Navigation */}
                <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-white font-cinzel-bold text-lg bg-white/10 rounded-xl px-6 py-4 shadow-lg backdrop-blur-md">
                    <a href="/" className="hover:text-poilu-soleil transition-colors font-cinzel-bold">Accueil</a>
                    <a href="/nos-animaux" className="hover:text-poilu-soleil transition-colors font-cinzel-bold">Nos Animaux</a>
                    <a href="/nos-disparus" className="hover:text-poilu-soleil transition-colors font-cinzel-bold">Nos Disparus</a>
                    <a href="/notre-histoire" className="hover:text-poilu-soleil transition-colors font-cinzel-bold">Notre Histoire</a>
                    <a href="/blog" className="hover:text-poilu-soleil transition-colors font-cinzel-bold">Blog</a>
                    <a href="/collaborations" className="hover:text-poilu-soleil transition-colors font-cinzel-bold">Collaborations</a>
                    <a href="/contact" className="hover:text-poilu-soleil transition-colors font-cinzel-bold">Contact</a>
                </nav>
                {/* Réseaux sociaux modernisés */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex gap-4 mb-2">
                                {/* TikTok */}
                                <a href="https://www.tiktok.com/@communaute_9_poilus" target="_blank" rel="noopener noreferrer" aria-label="TikTok Les 9 Poilus" title="TikTok : @communaute_9_poilus"
                                    className="group rounded-full bg-gradient-to-br from-[#232526] via-[#414345] to-[#232526] p-2 shadow-xl border-2 border-white/10 hover:border-poilu-soleil/80 hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-poilu-soleil">
                                    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline align-middle">
                                        <circle cx="24" cy="24" r="22" fill="#000" stroke="#fff" strokeWidth="2"/>
                                        <path d="M32.5 19.5c-1.7 0-3.1-1.4-3.1-3.1V13h-4.1v14.2c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1 1.4-3.1 3.1-3.1c.2 0 .4 0 .6.1v-4.2c-.2 0-.4-.1-.6-.1-4 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3v-5.1c1 .6 2.1.9 3.1.9h1.1v-4.1h-1.1z" fill="#fff"/>
                                    </svg>
                                </a>
                                {/* Instagram */}
                                <a href="https://www.instagram.com/la_communaute_des_9_poilus" target="_blank" rel="noopener noreferrer" aria-label="Instagram Les 9 Poilus" title="Instagram : @la_communaute_des_9_poilus"
                                    className="group rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-2 shadow-xl border-2 border-white/10 hover:border-poilu-soleil/80 hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-poilu-turquoise">
                                    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline align-middle">
                                        <rect x="4" y="4" width="40" height="40" rx="12" fill="url(#ig-gradient-footer)"/>
                                        <defs>
                                            <radialGradient id="ig-gradient-footer" cx="0.5" cy="0.5" r="0.8">
                                                <stop offset="0%" stop-color="#f9ce34"/>
                                                <stop offset="45%" stop-color="#ee2a7b"/>
                                                <stop offset="100%" stop-color="#6228d7"/>
                                            </radialGradient>
                                        </defs>
                                        <circle cx="24" cy="24" r="9" fill="#fff"/>
                                        <circle cx="24" cy="24" r="6" fill="#ee2a7b"/>
                                        <circle cx="32" cy="16" r="2" fill="#fff"/>
                                    </svg>
                                </a>
                                {/* Facebook */}
                                <a href="https://www.facebook.com/profile.php?id=61575813491991&sk=about" target="_blank" rel="noopener noreferrer" aria-label="Facebook Les 9 Poilus" title="Facebook : Les 9 Poilus"
                                    className="group rounded-full bg-gradient-to-br from-[#1877F3] via-[#4267B2] to-[#0e1624] p-2 shadow-xl border-2 border-white/10 hover:border-poilu-soleil/80 hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-poilu-soleil">
                                    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline align-middle">
                                        <circle cx="24" cy="24" r="22" fill="#1877F3" stroke="#fff" strokeWidth="2"/>
                                        <path d="M29.5 24H26v12h-5V24h-3v-4h3v-2.5c0-3.1 1.7-5 5-5h3v4h-2c-1.1 0-1 .4-1 1V20h4l-1 4z" fill="#fff"/>
                                    </svg>
                                </a>
                            </div>
                            <span className="text-poilu-creme text-xs font-body">Suivez-nous sur les réseaux !</span>
                        </div>
            </div>
            {/* Mentions légales et crédits */}
            <div className="mt-10 pt-6 border-t border-poilu-soleil/30 max-w-4xl mx-auto text-center text-poilu-creme/90 text-sm font-body backdrop-blur-sm">
                <div className="mb-2">
                    © 2025 La Communauté des 9 Poilus. Tous droits réservés.
                </div>
                <div>
                    Développé avec <span className="text-poilu-soleil font-bold">React</span> & <span className="text-poilu-turquoise font-bold">TailwindCSS</span> par
                    <a href="https://www.peakcl.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline hover:text-poilu-soleil ml-1">
                        <img src="src/assets/logos/PeakCL.svg" alt="logo PeakCL" className="inline-block h-7 mr-1" />
                        PeakCL
                    </a>
                </div>
            </div>
        </footer>
    );
}
