import { Link } from "react-router-dom";

const previews = [
  { title: "Une journée type avec la tribu", excerpt: "Réveil, gamelles, et la course aux poils… le récit sans filtre." },
  { title: "Balade en montagne avec Mako", excerpt: "Sentiers, pause ruisseau, et regard qui dit tout." },
  { title: "Yellow : la joie en trois pattes", excerpt: "Leçons de résilience servies avec des ronrons en fond sonore." },
];

export default function BlogSection() {
  return (
    <section className="bg-white py-20 text-poilu-roy md:py-28" aria-labelledby="blog-title">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <header className="max-w-2xl">
          <h2 id="blog-title" className="font-large text-4xl font-extrabold leading-none sm:text-6xl">
            Le carnet de bord
          </h2>
          <p className="mt-4 font-body text-lg text-poilu-roy/80">
            Les premiers récits arrivent bientôt : journées types, balades et histoires de la tribu.
          </p>
        </header>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {previews.map((post) => (
            <li
              key={post.title}
              className="sticker relative rounded-2xl bg-poilu-ciel p-6"
              style={{
                backgroundImage: "repeating-linear-gradient(transparent 0 31px, rgba(27,36,112,0.12) 31px 32px)",
                backgroundPosition: "0 18px",
              }}
            >
              <span className="absolute -top-4 right-4 rotate-3 rounded-md border-2 border-poilu-roy bg-poilu-soleil px-3 font-script text-xl">
                Bientôt
              </span>
              <h3 className="text-xl font-extrabold leading-tight">{post.title}</h3>
              <p className="mt-3 font-body leading-8 text-poilu-roy/80">{post.excerpt}</p>
            </li>
          ))}
        </ul>

        <Link to="/blog" className="btn-joie mt-12 bg-poilu-roy text-white">
          Ouvrir le blog
        </Link>
      </div>
    </section>
  );
}
