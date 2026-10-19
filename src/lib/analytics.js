/**
 * Google Analytics 4 soumis au consentement (exigence CNIL) :
 * rien n'est chargé ni envoyé à Google tant que le visiteur n'a pas accepté.
 * Actif uniquement en production, pour ne pas compter nos propres tests.
 */
const GA_ID = import.meta.env.VITE_GA_ID || "G-ZGNMFQ9DSM";
const CLE_CONSENTEMENT = "poilus-consentement";
export const EVENEMENT_REOUVRIR = "poilus:gerer-cookies";

const actif = import.meta.env.PROD && Boolean(GA_ID);
let charge = false;

/** "accepte", "refuse" ou null si le visiteur n'a pas encore choisi. */
export function lireConsentement() {
  try {
    return localStorage.getItem(CLE_CONSENTEMENT);
  } catch {
    return null;
  }
}

function enregistrer(valeur) {
  try {
    localStorage.setItem(CLE_CONSENTEMENT, valeur);
  } catch {
    // Stockage indisponible (navigation privée) : le choix vaut pour cette visite.
  }
}

function charger() {
  if (!actif || charge) return;
  charge = true;
  window[`ga-disable-${GA_ID}`] = false;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  // Les pages vues sont envoyées à la main à chaque changement de route (SPA).
  window.gtag("config", GA_ID, { send_page_view: false });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

/** Supprime les cookies _ga posés par Google Analytics. */
function effacerCookies() {
  const domaines = ["", window.location.hostname, `.${window.location.hostname.replace(/^www\./, "")}`];
  document.cookie.split(";").forEach((c) => {
    const nom = c.split("=")[0].trim();
    if (!nom.startsWith("_ga")) return;
    domaines.forEach((d) => {
      document.cookie = `${nom}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
    });
  });
}

export function accepter() {
  enregistrer("accepte");
  charger();
}

export function refuser() {
  enregistrer("refuse");
  if (charge) window[`ga-disable-${GA_ID}`] = true;
  effacerCookies();
}

/** À appeler une fois au démarrage : recharge GA si le visiteur avait déjà accepté. */
export function initialiser() {
  if (lireConsentement() === "accepte") charger();
}

export function pageVue(chemin) {
  if (!charge || window[`ga-disable-${GA_ID}`]) return;
  window.gtag("event", "page_view", {
    page_path: chemin,
    page_location: window.location.href,
    page_title: document.title,
  });
}
