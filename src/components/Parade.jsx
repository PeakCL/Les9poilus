import { useEffect, useRef, useState } from "react";
import poilus from "../data/poilus";

const tailles = {
  xl: "w-24 sm:w-32 xl:w-36",
  lg: "w-20 sm:w-24 xl:w-28",
  md: "w-14 sm:w-[4.5rem] xl:w-20",
};

/** Placement de la bulle pour qu'elle ne sorte pas de la file aux extrémités. */
function placementBulle(i) {
  if (i < 2) return "left-0";
  if (i > poilus.length - 3) return "right-0";
  return "left-1/2 -translate-x-1/2";
}

/**
 * La file indienne des 9 poilus : elle entre en marchant au chargement,
 * puis chaque poilu saute et parle quand on clique dessus.
 */
export default function Parade() {
  const [auRepos, setAuRepos] = useState(false);
  const [actif, setActif] = useState(null);
  const [saut, setSaut] = useState(0);
  const timer = useRef();

  useEffect(() => {
    const t = setTimeout(() => setAuRepos(true), 3200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => () => clearTimeout(timer.current), []);

  const direBonjour = (i) => {
    setActif(i);
    setSaut((n) => n + 1);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setActif(null), 3500);
  };

  return (
    <div className="-mx-4 overflow-x-auto px-4 pt-20 sm:-mx-6 sm:px-6 lg:mx-0 lg:overflow-visible lg:px-0">
      <ul className="parade-file flex w-max items-end gap-2 sm:gap-4 lg:mx-auto" aria-label="Les 9 poilus en file indienne">
        {poilus.map((p, i) => {
          const estActif = actif === i;
          return (
            <li key={p.nom} className="relative flex flex-col items-center">
              {estActif && (
                <p
                  key={saut}
                  role="status"
                  className={`parade-bulle sticker absolute bottom-full z-10 mb-3 w-44 rounded-2xl bg-white px-3 py-2 text-left font-body text-sm font-semibold leading-snug text-poilu-roy ${placementBulle(i)}`}
                >
                  <span className="block font-script text-lg leading-none" style={{ color: p.couleur === "#FFC93C" ? "#B07A00" : p.couleur }}>
                    {p.nom}
                  </span>
                  {p.bulle}
                </p>
              )}
              <button
                type="button"
                onClick={() => direBonjour(i)}
                aria-label={`Dire bonjour à ${p.nomComplet}, ${p.espece.toLowerCase()}`}
                className={`${tailles[p.taille]} rounded-full`}
              >
                <span
                  key={estActif ? `saut-${saut}` : "marche"}
                  className={`parade-marche block ${estActif ? "saute" : auRepos ? "au-repos" : ""}`}
                  style={{ "--i": i }}
                >
                  <img
                    src={p.image}
                    alt=""
                    width="128"
                    height="128"
                    className="aspect-square w-full rounded-full border-[3px] border-poilu-roy object-cover"
                    style={{ boxShadow: `0 0 0 4px #fff, 0 0 0 7px ${p.couleur}` }}
                  />
                </span>
              </button>
              <span className="mt-2 h-2 w-3/4 rounded-full bg-poilu-roy/15" aria-hidden />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
