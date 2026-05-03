import { Link } from "react-router-dom";
import logo from "../assets/logos/logo.png";
import peakClLogo from "../assets/logos/PeakCL.svg";
import { SocialIcons } from "./SocialIcons";

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
    <footer className="relative overflow-hidden border-t border-poilu-soleil/25 bg-gradient-to-br from-[#0f172a] via-poilu-roy to-[#0c1222] text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex max-w-sm flex-col items-center text-center md:items-start md:text-left">
            <img
              src={logo}
              alt="Logo Les 9 Poilus"
              className="mb-4 h-20 w-auto rounded-2xl border border-white/15 bg-white/95 p-1 shadow-lg"
            />
            <p className="font-display text-xl font-semibold tracking-tight">La Communauté des 9 Poilus</p>
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
                className="font-body text-sm font-medium text-white/85 transition hover:text-poilu-soleil"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/65">
          <p className="font-body">© {new Date().getFullYear()} La Communauté des 9 Poilus. Tous droits réservés.</p>
          <p className="mt-3 flex flex-wrap items-center justify-center gap-1 font-body">
            <span>Développé avec</span>
            <span className="font-medium text-poilu-soleil">React</span>
            <span>&</span>
            <span className="font-medium text-poilu-turquoise">Tailwind CSS</span>
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
