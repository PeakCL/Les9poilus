import { useEffect } from "react";

export const SITE_URL = "https://les9poilus.fr";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

/** Cree ou met a jour une balise <meta {attr}="{key}" content="{value}"> */
function setMeta(attr, key, value) {
  if (!value) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

/** Cree ou met a jour une balise <link rel="{rel}" href="{href}"> */
function setLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Met a jour title, description, canonical et balises sociales de la page courante.
 * A appeler une fois par page de route.
 *
 * Limite connue : ces balises sont injectees cote client. Google les voit
 * (il execute le JS), mais la plupart des crawlers de reseaux sociaux et des
 * crawlers IA ne les voient pas. Pour ceux-la il faut un prerendu statique.
 */
export default function useSeo({ title, description, path = "/", image = DEFAULT_IMAGE }) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    if (title) document.title = title;
    setMeta("name", "description", description);
    setLink("canonical", url);

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);

    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
  }, [title, description, path, image]);
}
