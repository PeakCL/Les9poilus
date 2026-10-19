import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logos/logo.png";
import { SocialIcons } from "./SocialIcons";
import { useScrollProgress } from "../hooks/useScrollProgress";

/** Ordre optimisé : collaborations visibles tôt pour les marques. */
const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Collaborations", href: "/collaborations", emphasis: true },
  { name: "Nos animaux", href: "/nos-animaux" },
  { name: "Notre histoire", href: "/notre-histoire" },
  { name: "Nos disparus", href: "/nos-disparus" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const linkClass =
  "rounded-full px-3 py-1.5 text-sm font-semibold text-poilu-roy transition hover:-rotate-2 hover:bg-poilu-soleil/50 md:text-[15px]";
const activeLinkClass = "bg-poilu-soleil";
const emphasisClass =
  "rounded-full px-3 py-1.5 text-sm font-semibold text-poilu-roy ring-2 ring-poilu-roy transition hover:-rotate-2 hover:bg-poilu-bonbon/40 md:text-[15px]";
const emphasisActiveClass = "bg-poilu-bonbon";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollP = useScrollProgress();

  return (
    <header className="sticky top-0 z-50">
      <div
        className="h-1 origin-left bg-poilu-bonbon"
        style={{ transform: `scaleX(${scrollP})` }}
        aria-hidden
      />
      <nav
        className="border-b-[3px] border-poilu-roy bg-white/90 backdrop-blur-md"
        aria-label="Navigation principale"
      >
        <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-2 px-3 sm:h-[4.5rem] sm:gap-3 sm:px-6">
          <Link to="/" className="wiggle-hover group flex min-w-0 shrink items-center gap-2 sm:gap-3">
            <img
              src={logo}
              alt="Les 9 Poilus"
              className="wiggle-cible h-10 w-auto shrink-0 rounded-xl border-2 border-poilu-roy bg-white p-0.5 sm:h-12"
            />
            <span className="hidden font-display text-base font-extrabold tracking-tight text-poilu-roy xs:inline sm:text-xl">
              Les 9 Poilus
            </span>
          </Link>

          <div className="hidden min-w-0 flex-1 items-center justify-end gap-1 md:flex lg:gap-2">
            <ul className="flex flex-wrap items-center justify-end gap-0.5 lg:gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavLink
                    to={link.href}
                    end={link.href === "/"}
                    className={({ isActive }) => {
                      if (link.emphasis) {
                        return `${emphasisClass} ${isActive ? emphasisActiveClass : ""}`;
                      }
                      return `${linkClass} ${isActive ? activeLinkClass : ""}`;
                    }}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="btn-joie ml-2 hidden shrink-0 bg-poilu-soleil px-4 py-1.5 text-sm text-poilu-roy lg:inline-flex"
            >
              Brief marque
            </Link>
            <SocialIcons className="ml-1 border-l-2 border-poilu-roy/15 pl-3 lg:ml-2 lg:pl-4" size={20} idPrefix="nav-desk" />
          </div>

          <div className="flex items-center gap-1.5 md:hidden">
            <Link
              to="/collaborations"
              className="rounded-full border-2 border-poilu-roy bg-poilu-soleil px-3 py-1 text-xs font-bold text-poilu-roy"
            >
              Marques
            </Link>
            <SocialIcons size={18} idPrefix="nav-mob-top" />
            <button
              type="button"
              className="inline-flex rounded-xl p-2.5 text-poilu-roy transition hover:bg-poilu-soleil/50"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <svg className={menuOpen ? "hidden" : "block"} width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden>
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
              <svg className={menuOpen ? "block" : "hidden"} width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden>
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`border-t-2 border-poilu-roy/15 bg-white md:hidden ${menuOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col px-4 py-3">
            {navLinks.map((link, i) => (
              <li key={link.href} className="menu-item" style={{ "--i": i }}>
                <NavLink
                  to={link.href}
                  end={link.href === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => {
                    const base = "block rounded-full px-4 py-3 text-center text-base font-bold text-poilu-roy";
                    if (link.emphasis) {
                      return `${base} ring-2 ring-poilu-roy ${isActive ? "bg-poilu-bonbon" : ""}`;
                    }
                    return `${base} ${isActive ? "bg-poilu-soleil" : ""}`;
                  }}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li className="menu-item px-2 pt-2" style={{ "--i": navLinks.length }}>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="btn-joie w-full bg-poilu-soleil text-poilu-roy"
              >
                Envoyer un brief marque
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
