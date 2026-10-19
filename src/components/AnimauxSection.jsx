import { Link } from "react-router-dom";
import poilus from "../data/poilus";

const inclinaisons = [-4, 3, -2, 5, -5, 2, 4, -3, 1];

export default function AnimauxSection() {
  return (
    <section className="relative bg-[#1FA874] pb-20 pt-10 text-poilu-roy md:pb-28" aria-labelledby="section-animaux-title">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <header className="max-w-2xl">
          <h2 id="section-animaux-title" className="font-large text-4xl font-extrabold leading-none sm:text-6xl">
            La tribu au complet
          </h2>
          <p className="mt-4 font-body text-lg font-medium">
            Des sauvetages de la SPA, un trotteur réformé, une petite chatte à trois pattes et un vieux chien qui a encore
            des étoiles dans les yeux. Chacun a son histoire.
          </p>
        </header>

        <ul className="mt-12 grid grid-cols-3 gap-3 sm:gap-8">
          {poilus.map((p, i) => (
            <li key={p.nom}>
              <Link
                to="/nos-animaux"
                className="polaroid sticker block rounded-md bg-white p-1.5 pb-2 sm:p-3 sm:pb-4"
                style={{ "--r": `${inclinaisons[i]}deg` }}
              >
                <img
                  src={p.image}
                  alt={`${p.nomComplet}, ${p.espece.toLowerCase()}`}
                  loading="lazy"
                  width="480"
                  height="480"
                  className="aspect-square w-full rounded-sm object-cover"
                />
                <span className="mt-1 block text-center font-script text-lg leading-tight sm:mt-2 sm:text-3xl">{p.nom}</span>
                <span className="hidden text-center font-body text-sm text-poilu-roy/70 sm:block">{p.espece}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-wrap items-center gap-3">
          <Link to="/nos-animaux" className="btn-joie bg-poilu-soleil text-poilu-roy">
            Lire leurs histoires
          </Link>
          <Link to="/nos-disparus" className="btn-joie bg-white text-poilu-roy">
            Nos anges gardiens
          </Link>
        </div>
      </div>
    </section>
  );
}
