/**
 * Chiffres d'audience affichés aux marques. Un seul endroit à mettre à jour.
 *
 * Règles d'affichage :
 * - la portée médiane récente passe avant le nombre d'abonnés ;
 * - les vidéos virales sont des pics ("jusqu'à"), jamais une moyenne ;
 * - les chiffres par publication cumulent Facebook + Instagram (publications croisées).
 */
export const releveLe = "19 octobre 2026";

export const portee = {
  personnesParPublication: "800 à\u00a01\u00a0300",
  vuesParPublication: "1\u00a0900 à\u00a02\u00a0400",
  engagement: "4,8 à\u00a05,2\u00a0%",
  pic: "173\u00a0K",
  note:
    "Médianes par publication, Facebook et Instagram cumulés : 4 dernières semaines (bas de la fourchette) et 90 derniers jours (haut). Engagement calculé sur la portée, avec et sans les deux vidéos virales.",
};

export const abonnesCumules = "≈\u00a08\u00a0400";

export const plateformes = [
  {
    nom: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61575813491991&sk=about",
    abonnes: "1\u00a0192",
    chiffre: { valeur: "64,7\u00a0K", label: "vues sur 28 jours" },
    audience: ["82\u00a0%\u00a0en France", "68\u00a0%\u00a0de femmes", "60\u00a0%\u00a0de 55 ans et plus"],
  },
  {
    nom: "Instagram",
    href: "https://www.instagram.com/la_communaute_des_9_poilus",
    abonnes: "6\u00a0126",
    chiffre: { valeur: "18\u00a0K", label: "personnes touchées sur 28 jours" },
    audience: ["Audience internationale : 45\u00a0%\u00a0Inde, 9,3\u00a0%\u00a0France", "65\u00a0%\u00a0d'hommes", "Portée surtout hors abonnés"],
  },
  {
    nom: "TikTok",
    href: "https://www.tiktok.com/@communaute_9_poilus",
    abonnes: "1\u00a0097",
    chiffre: { valeur: "≈\u00a08\u00a0%", label: "d'interactions par vue sur 28 jours" },
    audience: ["71\u00a0%\u00a0en France", "62\u00a0%\u00a0de femmes", "47\u00a0%\u00a0de 45 ans et plus"],
  },
];
