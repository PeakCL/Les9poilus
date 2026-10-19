import { Link } from "react-router-dom";
import { abonnesCumules, portee, releveLe } from "../data/audience";

const deliverables = [
  { label: "Tests & démos", desc: "Croquettes, accessoires, soins : retours détaillés.", bg: "bg-poilu-soleil" },
  { label: "UGC natif", desc: "Reels, TikTok, stories. Le ton de la maison, pas du catalogue.", bg: "bg-poilu-bonbon" },
  { label: "Avis & confiance", desc: "Une audience qui aime les animaux et déteste le faux.", bg: "bg-poilu-prairie" },
];

const engagements = [
  "On choisit les collaborations cohérentes avec nos valeurs et le produit",
  "Brief clair, création, puis livraison dans les formats convenus",
  "Des retours honnêtes, même quand ça chatouille",
  "9 profils animaux pour des usages variés : intérieur, extérieur, stress, enthousiasme…",
];

export default function CollaborationsSection() {
  return (
    <section className="bg-poilu-ciel py-20 text-poilu-roy md:py-28" aria-labelledby="collaborations-title">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <header className="max-w-3xl">
          <h2 id="collaborations-title" className="font-large text-4xl font-extrabold leading-none sm:text-6xl">
            Vous êtes une marque ? La tribu adore tester.
          </h2>
          <p className="mt-5 max-w-[60ch] font-body text-lg leading-relaxed text-poilu-roy/85">
            Petfood, accessoires, santé, équitation : si votre produit respecte le bien-être animal, on crée du contenu
            crédible, filmé dans notre vrai quotidien, et aligné avec vos valeurs.
          </p>
        </header>

        <ul className="mt-12 grid gap-5 sm:grid-cols-3">
          {deliverables.map((d, i) => (
            <li
              key={d.label}
              className={`sticker rounded-2xl p-6 ${d.bg}`}
              style={{ transform: `rotate(${[-1.5, 1, -0.5][i]}deg)` }}
            >
              <h3 className="text-2xl font-extrabold">{d.label}</h3>
              <p className="mt-2 font-body font-medium leading-relaxed">{d.desc}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <div>
            <h3 className="text-xl font-extrabold">Par publication</h3>
            <dl className="mt-4 space-y-3 font-body">
              <div className="flex items-baseline justify-between gap-4 border-b-2 border-dashed border-poilu-roy/25 pb-2">
                <dt>Personnes touchées</dt>
                <dd className="text-right text-2xl font-extrabold">{portee.personnesParPublication}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-b-2 border-dashed border-poilu-roy/25 pb-2">
                <dt>Engagement</dt>
                <dd className="text-right text-2xl font-extrabold">{portee.engagement}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt>Abonnés, 3 réseaux</dt>
                <dd className="text-right text-2xl font-extrabold">{abonnesCumules}</dd>
              </div>
            </dl>
            <p className="mt-3 font-body text-sm text-poilu-roy/70">
              Médianes Facebook et Instagram, relevées le {releveLe}.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-extrabold">Ce qu&apos;on vous promet</h3>
            <ul className="mt-4 space-y-3 font-body">
              {engagements.map((e) => (
                <li key={e} className="flex gap-3">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0" aria-hidden>
                    <circle cx="12" cy="12" r="10" fill="#2BC48A" stroke="#1B2470" strokeWidth="2" />
                    <path d="M7 12.5l3.2 3L17 9" fill="none" stroke="#1B2470" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-3">
          <Link to="/contact" className="btn-joie bg-poilu-roy text-white">
            Proposer un partenariat
          </Link>
          <Link to="/collaborations" className="btn-joie bg-white text-poilu-roy">
            Voir l&apos;offre complète
          </Link>
          <p className="w-full font-body text-sm text-poilu-roy/70 sm:ml-2 sm:w-auto">
            Media kit, tarifs ou appel découverte : écrivez-nous avec votre marque et vos objectifs.
          </p>
        </div>
      </div>
    </section>
  );
}
