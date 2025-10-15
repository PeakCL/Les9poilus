import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logos/logo.png';

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Nos animaux", href: "/nos-animaux" },
  { name: "Nos disparus", href: "/nos-disparus" },
  { name: "Notre histoire", href: "/notre-histoire" },
  { name: "Collaborations", href: "/collaborations" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full bg-poilu-roy shadow-md border-b border-poilu-soleil/20 sticky top-0 z-50 text-white">
      <div className="max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 flex items-center justify-between h-16 xs:h-18 sm:h-20">
        <Link to="/" className="flex items-center gap-2 xs:gap-3">
          <img src={logo} alt="Logo Les 9 Poilus" className="h-12 xs:h-14 sm:h-16 w-auto drop-shadow-xl rounded-lg p-1 bg-white/90 border-2 border-poilu-soleil" />
          <span className="font-cinzel-bold text-white text-lg xs:text-xl sm:text-2xl tracking-wide drop-shadow-sm font-cinzel-bold">Les 9 Poilus</span>
        </Link>
        {/* Menu desktop */}
        <div className="hidden md:flex items-center gap-4 xs:gap-6">
          <ul className="flex space-x-3 xs:space-x-4 sm:space-x-6 items-center h-full">
            {navLinks.map((link) => (
              <li key={link.name} className="flex items-center h-16 xs:h-18 sm:h-20">
                <Link
                  to={link.href}
                  className="flex items-center h-full text-white text-base xs:text-lg sm:text-2xl font-semibold hover:text-poilu-soleil transition-colors duration-200 px-1.5 xs:px-2 py-1 rounded-lg font-script focus:outline-none focus:ring-2 focus:ring-poilu-soleil"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* Réseaux sociaux */}
          <div className="flex gap-1 xs:gap-2 ml-2 xs:ml-4 items-center h-16 xs:h-18 sm:h-20">
            {/* ...SVGs identiques... */}
            <a href="https://www.tiktok.com/@communaute_9_poilus" target="_blank" rel="noopener noreferrer" aria-label="TikTok Les 9 Poilus" className="hover:text-poilu-soleil transition-colors" title="TikTok : @communaute_9_poilus">
              {/* ...SVG TikTok... */}
              <svg width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline align-middle">
                <circle cx="24" cy="24" r="24" fill="#000"/>
                <path d="M32.5 19.5c-1.7 0-3.1-1.4-3.1-3.1V13h-4.1v14.2c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1 1.4-3.1 3.1-3.1c.2 0 .4 0 .6.1v-4.2c-.2 0-.4-.1-.6-.1-4 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3v-5.1c1 .6 2.1.9 3.1.9h1.1v-4.1h-1.1z" fill="#fff"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/la_communaute_des_9_poilus" target="_blank" rel="noopener noreferrer" aria-label="Instagram Les 9 Poilus" className="hover:text-poilu-soleil transition-colors" title="Instagram : @la_communaute_des_9_poilus">
              <svg width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline align-middle">
                <defs>
                  <radialGradient id="ig-gradient-nav" cx="0.5" cy="0.5" r="0.8">
                    <stop offset="0%" stopColor="#f9ce34"/>
                    <stop offset="45%" stopColor="#ee2a7b"/>
                    <stop offset="100%" stopColor="#6228d7"/>
                  </radialGradient>
                </defs>
                <rect x="4" y="4" width="40" height="40" rx="12" fill="url(#ig-gradient-nav)"/>
                <circle cx="24" cy="24" r="9" fill="#fff"/>
                <circle cx="24" cy="24" r="6" fill="#ee2a7b"/>
                <circle cx="32" cy="16" r="2" fill="#fff"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61575813491991&sk=about" target="_blank" rel="noopener noreferrer" aria-label="Facebook Les 9 Poilus" className="hover:text-poilu-soleil transition-colors" title="Facebook : Les 9 Poilus">
              <svg width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline align-middle">
                <circle cx="24" cy="24" r="24" fill="#1877F3"/>
                <path d="M29.5 24H26v12h-5V24h-3v-4h3v-2.5c0-3.1 1.7-5 5-5h3v4h-2c-1.1 0-1 .4-1 1V20h4l-1 4z" fill="#fff"/>
              </svg>
            </a>
          </div>
        </div>
        {/* Burger menu mobile */}
        <div className="md:hidden flex items-center">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-poilu-roy/80 focus:outline-none focus:ring-2 focus:ring-poilu-soleil"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg className={menuOpen ? 'hidden' : 'block'} width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg className={menuOpen ? 'block' : 'hidden'} width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      {/* Menu mobile */}
      <div className={`md:hidden bg-poilu-roy/95 border-t border-poilu-soleil/20 shadow-lg transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center py-2">
          {navLinks.map((link) => (
            <li key={link.name} className="w-full">
              <Link
                to={link.href}
                className="block w-full text-white text-lg font-semibold hover:text-poilu-soleil transition-colors duration-200 px-4 py-3 text-center font-script focus:outline-none focus:ring-2 focus:ring-poilu-soleil"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="flex gap-4 justify-center py-3">
            <a href="https://www.tiktok.com/@communaute_9_poilus" target="_blank" rel="noopener noreferrer" aria-label="TikTok Les 9 Poilus" title="TikTok : @communaute_9_poilus">
              <svg width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline align-middle">
                <circle cx="24" cy="24" r="24" fill="#000"/>
                <path d="M32.5 19.5c-1.7 0-3.1-1.4-3.1-3.1V13h-4.1v14.2c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1 1.4-3.1 3.1-3.1c.2 0 .4 0 .6.1v-4.2c-.2 0-.4-.1-.6-.1-4 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3v-5.1c1 .6 2.1.9 3.1.9h1.1v-4.1h-1.1z" fill="#fff"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/la_communaute_des_9_poilus" target="_blank" rel="noopener noreferrer" aria-label="Instagram Les 9 Poilus" title="Instagram : @la_communaute_des_9_poilus">
              <svg width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline align-middle">
                <defs>
                  <radialGradient id="ig-gradient-nav-mobile" cx="0.5" cy="0.5" r="0.8">
                    <stop offset="0%" stopColor="#f9ce34"/>
                    <stop offset="45%" stopColor="#ee2a7b"/>
                    <stop offset="100%" stopColor="#6228d7"/>
                  </radialGradient>
                </defs>
                <rect x="4" y="4" width="40" height="40" rx="12" fill="url(#ig-gradient-nav-mobile)"/>
                <circle cx="24" cy="24" r="9" fill="#fff"/>
                <circle cx="24" cy="24" r="6" fill="#ee2a7b"/>
                <circle cx="32" cy="16" r="2" fill="#fff"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61575813491991&sk=about" target="_blank" rel="noopener noreferrer" aria-label="Facebook Les 9 Poilus" title="Facebook : Les 9 Poilus">
              <svg width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline align-middle">
                <circle cx="24" cy="24" r="24" fill="#1877F3"/>
                <path d="M29.5 24H26v12h-5V24h-3v-4h3v-2.5c0-3.1 1.7-5 5-5h3v4h-2c-1.1 0-1 .4-1 1V20h4l-1 4z" fill="#fff"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
