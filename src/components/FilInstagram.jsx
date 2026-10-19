import { useEffect, useState } from "react";
import { EVENEMENT_CONSENTEMENT, lireConsentement } from "../lib/analytics";

const SCRIPT_ELFSIGHT = "https://elfsightcdn.com/platform.js";
const APP_ID = "elfsight-app-7b916146-be15-4132-a33e-61bca7a5cd46";

function chargerElfsight() {
  if (document.querySelector(`script[src="${SCRIPT_ELFSIGHT}"]`)) return;
  const script = document.createElement("script");
  script.src = SCRIPT_ELFSIGHT;
  script.async = true;
  document.body.appendChild(script);
}

/**
 * Fil Instagram Elfsight : chargé seulement si le visiteur a accepté les cookies
 * ou clique sur "Afficher le fil Instagram" (aucun appel à Elfsight avant).
 */
export default function FilInstagram() {
  const [affiche, setAffiche] = useState(() => lireConsentement() === "accepte");

  useEffect(() => {
    const suivre = () => {
      if (lireConsentement() === "accepte") setAffiche(true);
    };
    window.addEventListener(EVENEMENT_CONSENTEMENT, suivre);
    return () => window.removeEventListener(EVENEMENT_CONSENTEMENT, suivre);
  }, []);

  useEffect(() => {
    if (affiche) chargerElfsight();
  }, [affiche]);

  if (affiche) {
    return (
      <div className="sticker mt-12 overflow-hidden rounded-2xl bg-white p-3 sm:p-5">
        <div className={APP_ID} data-elfsight-app-lazy />
      </div>
    );
  }

  return (
    <div className="sticker mt-12 flex flex-col items-start gap-4 rounded-2xl bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-xl font-extrabold">Nos dernières photos Instagram</p>
        <p className="mt-1 max-w-[52ch] font-body text-sm text-poilu-roy/75">
          Le fil est fourni par Elfsight et Instagram. Il ne se charge qu&apos;avec votre accord.
        </p>
      </div>
      <button type="button" onClick={() => setAffiche(true)} className="btn-joie shrink-0 bg-poilu-soleil text-poilu-roy">
        Afficher le fil Instagram
      </button>
    </div>
  );
}
