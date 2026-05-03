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
  "rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-poilu-soleil md:text-[15px]";
const activeLinkClass = "bg-white/15 text-poilu-soleil";
const emphasisClass =
  "rounded-lg px-3 py-2 text-sm font-semibold text-poilu-soleil ring-1 ring-poilu-soleil/50 transition hover:bg-poilu-soleil/15 md:text-[15px]";
const emphasisActiveClass = "bg-poilu-soleil/25 text-poilu-soleil ring-poilu-soleil";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollP = useScrollProgress();

  return (
    <header className="sticky top-0 z-50">
      <div
        className="h-0.5 origin-left bg-gradient-to-r from-poilu-soleil via-poilu-turquoise to-poilu-soleil"
        style={{ transform: `scaleX(${scrollP})` }}
        aria-hidden
      />
      <nav
        className="border-b border-white/10 bg-poilu-roy/85 backdrop-blur-xl backdrop-saturate-150"
        aria-label="Navigation principale"
      >
        <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-2 px-3 sm:h-[4.5rem] sm:gap-3 sm:px-6">
          <Link to="/" className="group flex min-w-0 shrink items-center gap-2 sm:gap-3">
            <img
              src={logo}
              alt="Les 9 Poilus"
              className="h-10 w-auto shrink-0 rounded-xl border border-white/20 bg-white/95 p-0.5 shadow-md transition group-hover:border-poilu-soleil/50 sm:h-12"
            />
            <span className="hidden font-display text-base font-semibold tracking-tight text-white drop-shadow-sm xs:inline sm:text-xl">
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
              className="ml-2 hidden shrink-0 rounded-full bg-poilu-soleil px-4 py-2 text-sm font-semibold text-poilu-roy shadow-md transition hover:bg-poilu-ocre lg:inline-flex"
            >
              Brief marque
            </Link>
            <SocialIcons className="ml-1 border-l border-white/15 pl-3 lg:ml-2 lg:pl-4" size={20} idPrefix="nav-desk" />
          </div>

          <div className="flex items-center gap-1.5 md:hidden">
            <Link
              to="/collaborations"
              className="rounded-full bg-poilu-soleil px-3 py-1.5 text-xs font-bold text-poilu-roy shadow-sm"
            >
              Marques
            </Link>
            <SocialIcons size={18} idPrefix="nav-mob-top" />
            <button
              type="button"
              className="inline-flex rounded-xl p-2.5 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-poilu-soleil"
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
          className={`border-t border-white/10 bg-poilu-roy/98 backdrop-blur-lg md:hidden ${menuOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col px-4 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  end={link.href === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => {
                    const base = "block rounded-xl px-4 py-3 text-center text-base font-medium";
                    if (link.emphasis) {
                      return `${base} ${isActive ? "bg-poilu-soleil/25 text-poilu-soleil ring-1 ring-poilu-soleil" : "text-poilu-soleil ring-1 ring-poilu-soleil/40"}`;
                    }
                    return `${base} ${isActive ? "bg-white/15 text-poilu-soleil" : "text-white/95"}`;
                  }}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li className="px-2 pt-2">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl bg-poilu-soleil py-3 text-center text-base font-bold text-poilu-roy"
              >
                Brief marque — contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
