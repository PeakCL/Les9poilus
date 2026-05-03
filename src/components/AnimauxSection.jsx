import { Link } from "react-router-dom";

const cards = [
  {
    href: "/nos-animaux",
    emoji: "🐕",
    title: "Notre chien",
    desc: "Mako — terrain idéal pour accessoires promenade, confort senior, comportement.",
    accent: "from-poilu-soleil/30 to-poilu-turquoise/20",
    border: "border-poilu-soleil/40",
  },
  {
    href: "/nos-animaux",
    emoji: "🐱",
    title: "Nos 6 chats",
    desc: "Indoor, sortie, sensibilités différentes : gamme complète pour vos tests indoor cats.",
    accent: "from-poilu-turquoise/25 to-poilu-roy/15",
    border: "border-poilu-turquoise/35",
  },
  {
    href: "/nos-animaux",
    emoji: "🐎",
    title: "Nos équidés",
    desc: "Dressage, outdoor, émotion à la main — pertinent pour marques équitation & soins.",
    accent: "from-poilu-roy/25 to-poilu-soleil/15",
    border: "border-poilu-roy/30",
  },
];

export default function AnimauxSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-poilu-roy py-20 text-white md:py-28"
      aria-labelledby="section-animaux-title"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden>
        <div className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-violet-500/40 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-poilu-turquoise/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <header className="mx-auto mb-14 max-w-3xl text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-wider text-poilu-soleil/90">
            Pour vos campagnes
          </p>
          <h2 id="section-animaux-title" className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Neuf profils,{" "}
            <span className="text-poilu-soleil">neuf façons de tester votre produit</span>
          </h2>
          <p className="mt-4 font-body text-lg text-white/80">
            Marques : voici la matière première de nos collaborations — des animaux réels, suivis au quotidien. Idéal pour
            montrer usage, durabilité et émotion sans studio.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <Link
              key={c.title}
              to={c.href}
              className={`group relative overflow-hidden rounded-3xl border bg-gradient-to-br ${c.accent} p-8 shadow-card backdrop-blur-sm transition ${c.border} hover:-translate-y-1 hover:shadow-glow`}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-3xl ring-1 ring-white/20 backdrop-blur-sm transition group-hover:scale-105">
                <span aria-hidden>{c.emoji}</span>
              </div>
              <h3 className="font-display text-xl font-semibold">{c.title}</h3>
              <p className="mt-3 font-body leading-relaxed text-white/85">{c.desc}</p>
              <span className="mt-6 inline-flex items-center font-body text-sm font-semibold text-poilu-soleil">
                Fiches détaillées
                <svg className="ml-2 h-4 w-4 transition group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <footer className="mt-16 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:gap-6">
          <Link
            to="/collaborations"
            className="inline-flex rounded-2xl bg-poilu-soleil px-6 py-3 font-body font-semibold text-poilu-roy shadow-lg transition hover:bg-poilu-ocre"
          >
            Voir notre offre marques
          </Link>
          <Link
            to="/nos-disparus"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-6 py-3 font-body font-medium backdrop-blur-sm transition hover:bg-white/15"
          >
            <span aria-hidden>🕊️</span>
            Nos anges gardiens
          </Link>
        </footer>
      </div>
    </section>
  );
}
