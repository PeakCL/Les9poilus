# 🐾 Les 9 Poilus - Site Web Officiel

> La vraie vie d'une famille entourée de ses animaux - Entre rires, émotions et apprentissages

## 🎨 Identité visuelle

Ce site utilise une charte graphique chaleureuse et authentique qui reflète l'univers bienveillant des animaux de compagnie. Consultez [`CHARTE-GRAPHIQUE.md`](./CHARTE-GRAPHIQUE.md) pour tous les détails.

### Palette de couleurs
- **Terre Chaleureuse** `#8B4513` - Couleur principale
- **Ocre Doux** `#D2B48C` - Backgrounds chaleureux  
- **Vert Prairie** `#7FB069` - Nature et bien-être
- **Orange Sunset** `#FF8C69` - Call-to-action énergiques

## 🚀 Installation et développement

### Prérequis
- **Node.js** (v18+)
- **Ruby** (v3.1+) 
- **Bundler** pour Jekyll

### Installation initiale

```bash
# 1. Cloner le repository
git clone https://github.com/PeakCL/Les9poilus.git
cd Les9poilus

# 2. Installer les dépendances Node.js
npm install

# 3. Installer les gems Ruby
bundle install

# 4. Build initial
npm run build-site
```

### Commandes de développement

```bash
# Serveur de développement Jekyll + TailwindCSS
npm run dev

# Compilation CSS uniquement
npm run build

# Build complet pour production
npm run build-site

# Serveur Jekyll seul
bundle exec jekyll serve
```

## 📁 Structure du projet

```
Les9poilus/
├── _layouts/           # Templates Jekyll
├── _includes/          # Composants réutilisables
├── _posts/            # Articles de blog
├── _sass/             # Fichiers Sass
├── assets/            # CSS, images, favicon
├── src/               # Sources TailwindCSS
├── _config.yml        # Configuration Jekyll
├── netlify.toml       # Configuration Netlify
├── tailwind.config.js # Configuration TailwindCSS
└── Gemfile           # Dépendances Ruby
```

## 🎨 Système de design

### Classes TailwindCSS personnalisées

```css
/* Couleurs de la marque */
.text-poilu-terre      /* #8B4513 - Textes principaux */
.bg-poilu-creme        /* #FFF8DC - Backgrounds doux */
.text-poilu-sunset     /* #FF8C69 - Call-to-action */

/* Typographies */
.font-heading          /* Poppins - Titres */
.font-body            /* Inter - Corps de texte */
.font-script          /* Dancing Script - Accents */

/* Ombres personnalisées */
.shadow-warm          /* Ombre chaleureuse */
.shadow-soft          /* Ombre douce */
```

### Composants réutilisables

- **Cards animaux** : Arrondies avec ombres douces
- **Boutons CTA** : Dégradés avec hover effects
- **Navigation** : Design chaleureux avec emojis
- **Articles** : Layout blog optimisé pour la lecture

## 📝 Création de contenu

### Nouvel article de blog

```bash
# Créer un fichier dans _posts/
touch _posts/2025-MM-DD-titre-article.md
```

Template d'article :
```yaml
---
layout: post
title: "Titre avec emoji 🐾"
date: 2025-MM-DD
categories: [chiens, moments-drôles, éducation]
author: "Les 9 Poilus"
description: "Description engageante de l'article"
---

Contenu markdown avec ton chaleureux et authentique...
```

### Guidelines éditoriales

- ✅ **Ton bienveillant** et authentique
- ✅ **Émojis** pour l'émotion (avec parcimonie)
- ✅ **Histoires vraies** du quotidien
- ✅ **Questions** pour engager la communauté
- ❌ Éviter le ton commercial ou artificiel

## 🚀 Déploiement

### Netlify (automatique)
Le site se déploie automatiquement sur chaque push via Netlify :

- **Build command** : `npm run build && bundle exec jekyll build`
- **Publish directory** : `_site`
- **Branch** : `main`

### Build local de test
```bash
npm run build-site
# Le site généré sera dans _site/
```

## 🎯 SEO et Performance

### Optimisations incluses
- ✅ Jekyll SEO Tag
- ✅ Sitemap automatique  
- ✅ Feed RSS
- ✅ Meta descriptions personnalisées
- ✅ Structure HTML sémantique
- ✅ Images optimisées

### Performance
- ✅ TailwindCSS optimisé (purge CSS)
- ✅ Fonts Google préchargées
- ✅ Lazy loading images
- ✅ Compression Netlify

## 🐾 Philosophie du projet

Ce site reflète notre mission : **partager la vraie vie avec nos animaux** de manière authentique et bienveillante. Chaque élément de design et de contenu doit servir cette vision.

### Valeurs core
- **Authenticité** : Pas de filtre, la vraie vie
- **Bienveillance** : Respect et amour des animaux  
- **Partage** : Créer du lien émotionnel
- **Simplicité** : Design accessible et chaleureux

---

## 📞 Contact

Pour toute question sur le développement ou le contenu :
- **Email** : contact@les9poilus.fr
- **Repository** : [github.com/PeakCL/Les9poilus](https://github.com/PeakCL/Les9poilus)

*Fait avec ❤️ pour nos compagnons à quatre pattes*