import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const stats = [
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@communaute_9_poilus",
    lines: ["733 abonnés", "Audience engagée", "Croissance régulière"],
    icon: (
      <svg viewBox="0 0 32 32" className="h-8 w-8 text-white" fill="currentColor" aria-hidden>
        <path d="M21.5 2a1 1 0 0 1 1 1c0 3.6 2.4 6.1 6 6.1a1 1 0 0 1 1 1v4.2a1 1 0 0 1-1 1c-1.2 0-2.4-.2-3.5-.7v7.7c0 5.2-4.2 9.4-9.4 9.4S6.2 27.3 6.2 22.1c0-5.2 4.2-9.4 9.4-9.4.3 0 .6 0 .9.1a1 1 0 0 1 .8 1v4.2a1 1 0 0 1-1 1c-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3 4.3-1.9 4.3-4.3V2.9a1 1 0 0 1 1-1h2.2z" />
      </svg>
    ),
    iconWrap: "bg-black",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/la_communaute_des_9_poilus",
    lines: ["121 abonnés", "Communauté passionnée", "Stories régulières"],
    icon: (
      <svg viewBox="0 0 32 32" className="h-8 w-8 text-white" fill="none" stroke="currentColor" aria-hidden>
        <rect x="6" y="6" width="20" height="20" rx="6" strokeWidth="2" />
        <circle cx="16" cy="16" r="6" strokeWidth="2" />
        <circle cx="23" cy="9" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    iconWrap: "bg-gradient-to-br from-poilu-soleil to-poilu-turquoise",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61575813491991&sk=about",
    lines: ["Page active", "Échanges & entraide", "Moments partagés"],
    icon: (
      <svg viewBox="0 0 32 32" className="h-8 w-8 text-white" fill="currentColor" aria-hidden>
        <circle cx="16" cy="16" r="16" fill="#1877F3" />
        <path
          d="M21.5 16H18v8h-4v-8h-2v-3h2v-2c0-2 1-3 3-3h3v3h-2c-.7 0-1 .3-1 1v1h3l-.5 3z"
          fill="#fff"
        />
      </svg>
    ),
    iconWrap: "bg-[#1877F3]",
  },
];

export default function Collaborations() {
  return (
    <>
      <PageHeader
        eyebrow="Marques & animalerie"
        title="Collaborations & création de contenu"
        subtitle="UGC, tests produits, storytelling : nous associons votre marque à une famille créatrice avec neuf profils animaux réels — pour des campagnes crédibles et filmables."
      />
      <div className="bg-gradient-to-b from-white via-poilu-creme to-poilu-turquoise/10 pb-20 pt-10 md:pb-28 md:pt-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl border border-poilu-roy/10 bg-white/95 p-6 shadow-card transition hover:-translate-y-1 hover:shadow-glow"
              >
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${s.iconWrap} shadow-inner`}
                >
                  {s.icon}
                </div>
                <h2 className="font-display text-lg font-semibold text-poilu-roy">{s.name}</h2>
                <ul className="mt-3 space-y-1 font-body text-sm text-poilu-gris">
                  {s.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </a>
            ))}
            <div className="rounded-3xl border border-poilu-roy/10 bg-gradient-to-br from-poilu-turquoise/15 to-poilu-soleil/15 p-6 shadow-card">
              <span className="text-4xl" aria-hidden>
                🐾
              </span>
              <h2 className="mt-3 font-display text-lg font-semibold text-poilu-roy">Testeurs</h2>
              <p className="mt-2 font-body text-sm text-poilu-gris">9 compagnons · avis sincères · vie réelle</p>
            </div>
          </div>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-semibold text-poilu-roy">Ce que nous aimerions créer ensemble</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <article className="rounded-3xl border border-poilu-roy/10 bg-white/95 p-6 shadow-sm backdrop-blur-sm">
                <h3 className="font-display font-semibold text-poilu-turquoise">🎬 Contenu créatif</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 font-body text-sm text-poilu-gris">
                  <li>Vidéos TikTok engageantes</li>
                  <li>Stories Instagram</li>
                  <li>Posts Facebook</li>
                  <li>Reels authentiques</li>
                </ul>
              </article>
              <article className="rounded-3xl border border-poilu-roy/10 bg-white/95 p-6 shadow-sm backdrop-blur-sm">
                <h3 className="font-display font-semibold text-poilu-turquoise">🧪 Tests produits</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 font-body text-sm text-poilu-gris">
                  <li>Retours honnêtes avec nos animaux</li>
                  <li>Démonstrations en situation réelle</li>
                  <li>Avis détaillés</li>
                  <li>Feedback constructif</li>
                </ul>
              </article>
              <article className="rounded-3xl border border-poilu-roy/10 bg-white/95 p-6 shadow-sm backdrop-blur-sm">
                <h3 className="font-display font-semibold text-poilu-turquoise">📝 Articles & avis</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 font-body text-sm text-poilu-gris">
                  <li>Articles de fond</li>
                  <li>Reviews produits</li>
                  <li>Guides pratiques</li>
                  <li>Témoignages</li>
                </ul>
              </article>
              <article className="rounded-3xl border border-poilu-roy/10 bg-white/95 p-6 shadow-sm backdrop-blur-sm">
                <h3 className="font-display font-semibold text-poilu-turquoise">🎯 Campagnes intégrées</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 font-body text-sm text-poilu-gris">
                  <li>Présence multi-plateformes</li>
                  <li>Storytelling émotionnel</li>
                  <li>Engagement communautaire</li>
                  <li>Analyse simple des retours</li>
                </ul>
              </article>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-semibold text-poilu-roy">Nos valeurs</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {[
                { icon: "🌿", title: "Naturel", text: "Respect de l'environnement et des animaux." },
                { icon: "💎", title: "Qualité", text: "Exigence et durabilité dans nos retours." },
                { icon: "🤝", title: "Transparence", text: "Avis francs, toujours." },
                { icon: "❤️", title: "Passion", text: "L'amour des compagnons avant tout." },
              ].map((v) => (
                <div key={v.title} className="rounded-2xl border border-poilu-turquoise/15 bg-white/90 p-5 text-center shadow-sm">
                  <span className="text-3xl" aria-hidden>
                    {v.icon}
                  </span>
                  <h3 className="mt-3 font-display font-semibold text-poilu-turquoise">{v.title}</h3>
                  <p className="mt-2 font-body text-sm text-poilu-gris">{v.text}</p>
                </div>
              ))}
            </div>
          </section>

          <footer className="mt-16 rounded-3xl border border-poilu-roy/10 bg-gradient-to-br from-poilu-roy to-poilu-turquoise p-10 text-center text-white shadow-card">
            <h2 className="font-display text-2xl font-semibold">Un projet en commun ?</h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-white/90">
              Parlons de votre marque et créons du contenu qui parle vraiment aux amoureux des animaux.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-2xl bg-poilu-soleil px-8 py-3.5 font-body font-semibold text-poilu-roy shadow-lg transition hover:bg-poilu-ocre"
            >
              Nous contacter
            </Link>
          </footer>
        </div>
      </div>
    </>
  );
}
