import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import useSeo from "../hooks/useSeo";

const blocks = [
  {
    icon: "🐗",
    title: "Amour des animaux",
    text: "Notre passion pour les animaux guide chaque décision. Chaque compagnon trouve sa place dans notre famille.",
  },
  {
    icon: "🏡",
    title: "Vie familiale",
    text: "Neuf compagnons qui partagent notre quotidien en Savoie. Chaque jour apporte sa dose de joie et d'aventures.",
  },
  {
    icon: "🧡",
    title: "Partage d'expériences",
    text: "Nous partageons nos expériences, conseils et moments de bonheur avec tous les amoureux des animaux.",
  },
];

const zones = [
  { city: "Albertville", note: "Et environs" },
  { city: "Chambéry", note: "Et métropole" },
  { city: "Bourg-Saint-Maurice", note: "Tarentaise" },
  { city: "Saint-Jean-de-Maurienne", note: "Maurienne" },
];

export default function NotreHistoire() {
  useSeo({
    title: "Notre histoire : une famille et neuf compagnons en Savoie | Les 9 Poilus",
    description: "Comment est nee La Communaute des 9 Poilus : nos valeurs, notre quotidien avec neuf animaux et notre zone d'intervention en Savoie.",
    path: "/notre-histoire",
  });

  return (
    <>
      <PageHeader
        eyebrow="Savoie"
        title="Notre histoire"
        subtitle="Une famille, une tribu à quatre pattes, et le désir de tout partager avec bienveillance."
      />
      <div className="bg-gradient-to-b from-white via-poilu-creme to-poilu-turquoise/10 pb-20 pt-12 md:pb-28 md:pt-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <section className="space-y-8" aria-label="Valeurs">
            {blocks.map((b) => (
              <article key={b.title} className="rounded-3xl border border-poilu-roy/10 bg-white/90 p-6 shadow-card backdrop-blur-sm md:p-8">
                <h2 className="flex items-center gap-3 font-display text-xl font-semibold text-poilu-turquoise md:text-2xl">
                  <span className="text-3xl" aria-hidden>
                    {b.icon}
                  </span>
                  {b.title}
                </h2>
                <p className="mt-4 font-body text-lg leading-relaxed text-poilu-roy">{b.text}</p>
              </article>
            ))}
          </section>

          <section className="mt-14" aria-labelledby="zones-title">
            <h2 id="zones-title" className="flex items-center gap-3 font-display text-xl font-semibold text-poilu-roy md:text-2xl">
              <span className="text-3xl" aria-hidden>
                🗺️
              </span>
              Zone d&apos;intervention en Savoie
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {zones.map((z) => (
                <div
                  key={z.city}
                  className="rounded-2xl border border-poilu-turquoise/20 bg-white p-4 text-center shadow-sm"
                >
                  <p className="font-display font-semibold text-poilu-turquoise">{z.city}</p>
                  <p className="mt-1 font-body text-xs text-poilu-gris">{z.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center font-body text-sm text-poilu-gris">
              Intervention possible dans toute la Savoie selon urgences et besoins.
            </p>
          </section>

          <footer className="mt-14 rounded-3xl border border-poilu-roy/10 bg-gradient-to-br from-poilu-roy to-poilu-turquoise/90 p-8 text-center text-white shadow-card md:p-10">
            <h2 className="font-display text-2xl font-semibold">Communauté & collaborations</h2>
            <p className="mx-auto mt-4 max-w-lg font-body text-white/90">
              Curieux du quotidien ou marque qui veut du contenu sincère avec nos animaux : même maison, deux portes
              d&apos;entrée — choisissez la vôtre.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                to="/collaborations"
                className="inline-flex justify-center rounded-2xl bg-poilu-soleil px-6 py-3 font-body font-semibold text-poilu-roy shadow-lg transition hover:bg-poilu-ocre"
              >
                Offre marques
              </Link>
              <Link
                to="/nos-animaux"
                className="inline-flex justify-center rounded-2xl border border-white/40 bg-white/10 px-6 py-3 font-body font-semibold backdrop-blur-sm transition hover:bg-white/20"
              >
                Nos compagnons
              </Link>
              <Link
                to="/contact"
                className="inline-flex justify-center rounded-2xl border border-white/40 bg-transparent px-6 py-3 font-body font-semibold text-white transition hover:bg-white/10"
              >
                Brief contact
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
