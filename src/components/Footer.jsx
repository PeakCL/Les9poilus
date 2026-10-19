import { Link } from "react-router-dom";
import logo from "../assets/logos/logo.png";
import peakClLogo from "../assets/logos/PeakCL.svg";
import { SocialIcons } from "./SocialIcons";
import { EVENEMENT_REOUVRIR } from "../lib/analytics";

const footerLinks = [
  { label: "Accueil", to: "/" },
  { label: "Collaborations marques", to: "/collaborations" },
  { label: "Nos animaux", to: "/nos-animaux" },
  { label: "Notre histoire", to: "/notre-histoire" },
  { label: "Nos disparus", to: "/nos-disparus" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t-[3px] border-poilu-roy bg-poilu-roy text-white">
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex max-w-sm flex-col items-center text-center md:items-start md:text-left">
            <img
              src={logo}
              alt="Logo Les 9 Poilus"
              className="mb-4 h-20 w-auto -rotate-3 rounded-2xl border-[3px] border-poilu-soleil bg-white p-1"
            />
            <p className="font-display text-2xl font-extrabold tracking-tight">La Communauté des 9 Poilus</p>
            <p className="mt-2 font-body text-sm text-white/75">
              Créateurs pour marques du monde animal : tests produits, UGC et storytelling authentique avec 9 compagnons en
              Savoie.
            </p>
            <div className="mt-6">
              <SocialIcons size={26} idPrefix="footer" />
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:justify-end" aria-label="Pied de page">
            {footerLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="font-body text-sm font-medium text-white/85 underline-offset-4 transition hover:text-poilu-soleil hover:underline"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/65">
          <p className="font-body">© {new Date().getFullYear()} La Communauté des 9 Poilus. Tous droits réservés.</p>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event(EVENEMENT_REOUVRIR))}
            className="mt-2 font-body underline underline-offset-4 transition hover:text-poilu-soleil"
          >
            Gérer les cookies
          </button>
          <p className="mt-3 flex flex-wrap items-center justify-center gap-1 font-body">
            <span>Développé avec</span>
            <span className="font-medium text-poilu-soleil">React</span>
            <span>&</span>
            <span className="font-medium text-poilu-bonbon">Tailwind CSS</span>
            <span>par</span>
            <a
              href="https://www.peakcl.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg px-1 font-medium text-white transition hover:text-poilu-soleil"
            >
              <img src={peakClLogo} alt="" className="h-6 w-auto" width={28} height={28} />
              PeakCL
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
