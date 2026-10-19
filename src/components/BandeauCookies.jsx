import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { accepter, EVENEMENT_REOUVRIR, initialiser, lireConsentement, pageVue, refuser } from "../lib/analytics";

/** Envoie une page vue à chaque changement de route (après le useSeo de la page). */
export function SuiviPages() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    pageVue(pathname + search);
  }, [pathname, search]);
  return null;
}

/**
 * Bandeau de consentement : "Accepter" et "Refuser" ont le même poids visuel,
 * et le choix peut être modifié à tout moment depuis le pied de page.
 */
export default function BandeauCookies() {
  const [visible, setVisible] = useState(() => lireConsentement() === null);

  useEffect(() => {
    initialiser();
    const rouvrir = () => setVisible(true);
    window.addEventListener(EVENEMENT_REOUVRIR, rouvrir);
    return () => window.removeEventListener(EVENEMENT_REOUVRIR, rouvrir);
  }, []);

  if (!visible) return null;

  const choisir = (fn) => {
    fn();
    setVisible(false);
    // Compte la page en cours si le visiteur vient d'accepter.
    pageVue(window.location.pathname + window.location.search);
  };

  return (
    <div
      role="dialog"
      aria-labelledby="bandeau-cookies-titre"
      className="sticker fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-xl rounded-2xl bg-white p-5 text-poilu-roy sm:bottom-5"
    >
      <p id="bandeau-cookies-titre" className="font-display text-lg font-extrabold">
        On compte les visites ?
      </p>
      <p className="mt-1 font-body text-sm leading-relaxed text-poilu-roy/80">
        Avec votre accord, Google Analytics mesure la fréquentation du site (pages vues, réseau d&apos;où vous venez)
        et notre fil Instagram s&apos;affiche via Elfsight. Aucune publicité. Vous pouvez changer d&apos;avis via « Gérer les cookies » en bas de page.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={() => choisir(accepter)} className="btn-joie bg-poilu-soleil px-5 py-2 text-sm text-poilu-roy">
          Accepter
        </button>
        <button type="button" onClick={() => choisir(refuser)} className="btn-joie bg-poilu-soleil px-5 py-2 text-sm text-poilu-roy">
          Refuser
        </button>
      </div>
    </div>
  );
}
