import { Link } from "react-router-dom";
import img9Poilus from "../assets/images/9-poilus.png";
import TolkienSection from "./TolkienSection";
import CollaborationsSection from "./CollaborationsSection";
import AnimauxSection from "./AnimauxSection";
import BlogSection from "./BlogSection";
import ReseauxSection from "./ReseauxSection";

export default function Hero() {
  return (
    <>
      <section
        className="relative overflow-hidden bg-poilu-roy text-white"
        role="banner"
        aria-labelledby="hero-title"
      >
        <div className="absolute inset-0 bg-mesh-hero" aria-hidden />
        <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-poilu-turquoise/25 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-poilu-soleil/20 blur-3xl" aria-hidden />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pb-20 pt-16 sm:px-6 lg:flex-row lg:items-center lg:gap-12 lg:pb-24 lg:pt-20">
          <div className="max-w-xl text-center lg:flex-1 lg:text-left">
            <p className="inline-flex rounded-full border border-poilu-soleil/40 bg-poilu-soleil/15 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-wider text-poilu-soleil">
              Partenariats marques · bien-être animal
            </p>
            <h1 id="hero-title" className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Contenu authentique pour{" "}
              <span className="bg-gradient-to-r from-poilu-soleil to-poilu-turquoise bg-clip-text text-transparent">
                votre marque
              </span>
            </h1>
            <p className="mt-6 font-body text-lg leading-relaxed text-white/85 sm:text-xl">
              Nous sommes une famille créatrice en Savoie avec{" "}
              <strong className="font-semibold text-white">9 compagnons testeurs</strong> (chien, chats, équidés) et une
              audience sensible au monde animal.{" "}
              <strong className="font-semibold text-white">Tests produits, UGC, avis honnêtes</strong> — le tout avec le
              ton vrai du quotidien.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link
                to="/collaborations"
                className="inline-flex items-center justify-center rounded-2xl bg-poilu-soleil px-6 py-3.5 font-body text-base font-semibold text-poilu-roy shadow-lg shadow-poilu-roy/20 transition hover:-translate-y-0.5 hover:bg-poilu-ocre focus-visible:ring-2 focus-visible:ring-poilu-soleil focus-visible:ring-offset-2 focus-visible:ring-offset-poilu-roy"
              >
                Dossier marques & offres
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-6 py-3.5 font-body text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Envoyer un brief
              </Link>
              <Link
                to="/nos-animaux"
                className="inline-flex items-center justify-center rounded-2xl px-4 py-3 font-body text-sm font-medium text-white/80 underline-offset-4 transition hover:text-white hover:underline"
              >
                Voir les 9 testeurs
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/15 pt-8 text-center sm:gap-6 lg:text-left">
              <div>
                <dt className="font-body text-xs uppercase tracking-wider text-white/55">Testeurs</dt>
                <dd className="mt-1 font-display text-lg font-semibold text-poilu-soleil">9 profils</dd>
              </div>
              <div>
                <dt className="font-body text-xs uppercase tracking-wider text-white/55">Formats</dt>
                <dd className="mt-1 font-display text-lg font-semibold text-poilu-turquoise">UGC & avis</dd>
              </div>
              <div>
                <dt className="font-body text-xs uppercase tracking-wider text-white/55">Valeurs</dt>
                <dd className="mt-1 font-display text-lg font-semibold text-white/95">Transparence</dd>
              </div>
            </dl>
          </div>

          <div className="relative mt-14 w-full max-w-lg lg:mt-0 lg:flex-1">
            <p className="mb-3 text-center font-body text-xs text-white/60 lg:text-right">
              Aperçu de la tribu — votre futur terrain de test et de contenu.
            </p>
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-poilu-turquoise/40 via-transparent to-poilu-soleil/35 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/20 bg-white/10 p-2 shadow-card backdrop-blur-md">
              <img
                src={img9Poilus}
                alt="Les 9 Poilus — famille et animaux, créateurs de contenu pour marques du secteur animalier"
                className="w-full rounded-2xl object-contain"
                style={{ background: "linear-gradient(180deg, #fffbe8 0%, #fff 100%)" }}
              />
            </div>
          </div>
        </div>
      </section>

      <CollaborationsSection />
      <AnimauxSection />
      <TolkienSection />
      <BlogSection />
      <ReseauxSection />
    </>
  );
}
