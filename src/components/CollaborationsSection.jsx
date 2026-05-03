import { Link } from "react-router-dom";

const deliverables = [
  { label: "Tests & démos", desc: "Croquettes, accessoires, soins — retours détaillés." },
  { label: "UGC natif", desc: "Reels, TikTok, stories — ton famille, pas catalogue." },
  { label: "Avis & confiance", desc: "Audience qui aime les animaux et déteste le faux." },
];

export default function CollaborationsSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-poilu-roy via-[#1a3270] to-poilu-roy py-20 text-white md:py-28"
      aria-labelledby="collaborations-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-mesh-hero opacity-40 mix-blend-soft-light" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mb-14 text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-poilu-soleil/90">
            Pour les marques
          </p>
          <h2 id="collaborations-title" className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Collaborez avec une tribu{" "}
            <span className="text-poilu-turquoise">qui vit vraiment avec ses animaux</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-white/80">
            Petfood, accessoires, santé, loisirs équestres ou félin/canine : si votre produit respecte le{" "}
            <strong className="text-white">bien-être animal</strong>, nous créons du contenu{" "}
            <strong className="text-white">crédible</strong>,{" "}
            <strong className="text-white">filmable</strong> et{" "}
            <strong className="text-white">aligné avec vos valeurs</strong>.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-3">
          {deliverables.map((d) => (
            <div
              key={d.label}
              className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-6 text-left backdrop-blur-md"
            >
              <h3 className="font-display text-lg font-semibold text-poilu-soleil">{d.label}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-white/75">{d.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/[0.07] p-8 shadow-card backdrop-blur-md">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-poilu-turquoise/25 text-3xl ring-1 ring-white/20">
              📊
            </div>
            <h3 className="font-display text-xl font-semibold text-poilu-turquoise">Reach & communauté</h3>
            <ul className="mt-6 space-y-4 font-body text-white/90">
              <li className="flex justify-between gap-4 border-b border-white/10 pb-3">
                <span>TikTok</span>
                <span className="font-semibold text-poilu-soleil">733 abonnés</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-white/10 pb-3">
                <span>Instagram</span>
                <span className="font-semibold text-poilu-soleil">121 abonnés</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Profil audience</span>
                <span className="text-right font-semibold">Passionnés animaux & lifestyle</span>
              </li>
            </ul>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.07] p-8 shadow-card backdrop-blur-md">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-poilu-soleil/20 text-3xl ring-1 ring-white/20">
              🤝
            </div>
            <h3 className="font-display text-xl font-semibold text-poilu-turquoise">Ce que nous signons</h3>
            <ul className="mt-6 space-y-3 font-body text-white/88">
              <li className="flex gap-2">
                <span className="text-poilu-turquoise">✓</span>
                Sélection des collaborations (cohérence valeurs / produit)
              </li>
              <li className="flex gap-2">
                <span className="text-poilu-turquoise">✓</span>
                Brief clair → création → livraisons formats convenus
              </li>
              <li className="flex gap-2">
                <span className="text-poilu-turquoise">✓</span>
                Honnêteté dans les retours — même si ça chatouille
              </li>
              <li className="flex gap-2">
                <span className="text-poilu-turquoise">✓</span>
                9 profils animaux = usages variés (sol, extérieur, stress, enthousiasme…)
              </li>
            </ul>
          </article>
        </div>

        <div className="mt-10 rounded-3xl border border-poilu-turquoise/30 bg-gradient-to-br from-white/10 to-transparent p-8 text-center backdrop-blur-sm md:p-10">
          <p className="font-body text-lg text-white/85">
            Envie d&apos;un <strong className="text-white">media kit</strong>, de tarifs ou d&apos;un call exploratoire ?{" "}
            <strong className="text-white">Écrivez-nous</strong> avec votre marque et vos objectifs.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-poilu-soleil px-8 py-4 font-body font-semibold text-poilu-roy shadow-lg transition hover:-translate-y-0.5 hover:bg-poilu-ocre"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contacter pour un partenariat
            </Link>
            <Link
              to="/collaborations"
              className="rounded-2xl border border-white/25 px-6 py-3.5 font-body font-medium text-white transition hover:bg-white/10"
            >
              Page collaborations complète →
            </Link>
            <a
              href="https://www.instagram.com/la_communaute_des_9_poilus"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/25 px-6 py-3.5 font-body font-medium text-white transition hover:bg-white/10"
            >
              Instagram pro ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
