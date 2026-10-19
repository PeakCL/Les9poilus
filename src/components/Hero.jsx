import { Link } from "react-router-dom";
import Parade from "./Parade";
import TolkienSection from "./TolkienSection";
import CollaborationsSection from "./CollaborationsSection";
import AnimauxSection from "./AnimauxSection";
import BlogSection from "./BlogSection";
import ReseauxSection from "./ReseauxSection";

const lignes = ["Neuf poilus,", "deux humains,", "zéro jour pareil."];

/** Découpe le titre en lettres animées, mots insécables, invisible pour les lecteurs d'écran. */
function TitreRebond() {
  let i = 0;
  return (
    <span aria-hidden>
      {lignes.map((ligne) => (
        <span key={ligne} className="block">
          {ligne.split(" ").map((mot, m) => (
            <span key={m} className="inline-block whitespace-nowrap">
              {[...mot].map((c, k) => (
                <span key={k} className="lettre" style={{ "--i": i++ }}>
                  {c}
                </span>
              ))}
              {m < ligne.split(" ").length - 1 && " "}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}

function Soleil() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="pointer-events-auto absolute right-3 top-3 h-16 w-16 transition-transform duration-[1.2s] ease-out hover:rotate-180 sm:right-10 sm:top-10 sm:h-36 sm:w-36"
      aria-hidden
    >
      <g stroke="#1B2470" strokeWidth="4" strokeLinecap="round">
        {Array.from({ length: 12 }, (_, k) => (
          <line key={k} x1="60" y1="8" x2="60" y2="22" transform={`rotate(${k * 30} 60 60)`} />
        ))}
      </g>
      <circle cx="60" cy="60" r="28" fill="#FFC93C" stroke="#1B2470" strokeWidth="4" />
      <path d="M48 62 q12 12 24 0" fill="none" stroke="#1B2470" strokeWidth="4" strokeLinecap="round" />
      <circle cx="50" cy="53" r="3.5" fill="#1B2470" />
      <circle cx="70" cy="53" r="3.5" fill="#1B2470" />
    </svg>
  );
}

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-poilu-ciel text-poilu-roy" aria-labelledby="hero-title">
        <Soleil />

        <div className="relative mx-auto max-w-6xl px-4 pt-14 sm:px-6 sm:pt-20">
          <h1
            id="hero-title"
            aria-label="Neuf poilus, deux humains, zéro jour pareil."
            className="font-large max-w-[14ch] text-[clamp(2.9rem,9.5vw,7.25rem)] font-extrabold leading-[0.92]"
          >
            <TitreRebond />
          </h1>

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-[46ch] font-body text-lg leading-relaxed text-poilu-roy/85 sm:text-xl">
              Deux humains en Savoie et toute une ménagerie : un chien, six chats, deux chevaux. On partage les balades, les siestes, les bêtises
              et les grandes histoires de sauvetage de la tribu.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/nos-animaux" className="btn-joie bg-poilu-soleil text-poilu-roy">
                Rencontrer la tribu
              </Link>
              <Link to="/collaborations" className="btn-joie bg-white text-poilu-roy">
                Travailler avec nous
              </Link>
            </div>
          </div>

          <p className="mt-8 flex items-center gap-2 font-script text-2xl text-poilu-turquoise sm:justify-center" aria-hidden>
            Clique sur un poilu pour lui dire bonjour
            <svg viewBox="0 0 40 30" className="h-7 w-9" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M4 4 C 18 4, 30 10, 32 24" />
              <path d="M25 19 L32 25 L36 17" />
            </svg>
          </p>

          <Parade />
        </div>

        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="-mt-3 block h-16 w-full sm:h-24" aria-hidden>
          <path d="M0 40 C 240 0, 480 70, 720 36 S 1200 0, 1440 44 V120 H0 Z" fill="#2BC48A" stroke="#1B2470" strokeWidth="3" />
          <path d="M0 78 C 300 48, 560 104, 860 72 S 1300 60, 1440 84 V120 H0 Z" fill="#1FA874" />
        </svg>
      </section>

      <AnimauxSection />
      <TolkienSection />
      <CollaborationsSection />
      <BlogSection />
      <ReseauxSection />
    </>
  );
}
