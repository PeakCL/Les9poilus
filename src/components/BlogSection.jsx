import { Link } from "react-router-dom";

const previews = [
  { title: "Une journée type avec la tribu", excerpt: "Réveil, gamelles, et la course aux poils… le récit sans filtre." },
  { title: "Balade en montagne avec Mako", excerpt: "Sentiers, pause ruisseau, et regard qui dit tout." },
  { title: "Yellow : la joie en trois pattes", excerpt: "Leçons de résilience servies avec des ronrons en fond sonore." },
];

export default function BlogSection() {
  return (
    <section className="border-y border-poilu-roy/10 bg-poilu-creme py-20 md:py-28" aria-labelledby="blog-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <header className="mb-14 text-center">
          <h2 id="blog-title" className="font-display text-3xl font-semibold text-poilu-roy sm:text-4xl md:text-5xl">
            Contenus & <span className="text-poilu-turquoise">storytelling</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-poilu-gris">
            Articles et carnets de bord à venir — un prolongement naturel de nos collaborations marques (SEO, preuve
            d&apos;usage, témoignages longs).
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {previews.map((post, i) => (
            <article
              key={post.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-poilu-roy/10 bg-white p-8 shadow-card transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="absolute right-4 top-4 rounded-full bg-poilu-creme px-3 py-1 font-body text-xs font-medium text-poilu-gris">
                Bientôt
              </div>
              <time className="font-body text-sm text-poilu-turquoise" dateTime="2026-01-01">
                À paraître
              </time>
              <h3 className="mt-4 font-display text-xl font-semibold text-poilu-roy">{post.title}</h3>
              <p className="mt-3 flex-1 font-body text-poilu-gris">{post.excerpt}</p>
              <span className="mt-6 inline-flex items-center font-body text-sm font-semibold text-poilu-turquoise opacity-60">
                Article {i + 1}
              </span>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-2xl bg-poilu-roy px-8 py-4 font-body font-semibold text-white shadow-lg transition hover:bg-poilu-roy/90"
          >
            Voir le blog
            <span aria-hidden>📚</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
