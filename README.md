# La Communauté des 9 Poilus 🐾

Bienvenue sur le site web officiel de **La Communauté des 9 Poilus** ! Ce site présente l'univers authentique de nos 9 compagnons à quatre pattes et permet à notre communauté de nous suivre sur TikTok et Instagram.

## 🎯 Notre Vision

Partager le quotidien chaleureux et authentique de nos 9 compagnons :
- **GoodVisor du Gelon** - Le protecteur sage
- **Comme d'habitude** - La stabilité rassurante  
- **Mako** - L'énergie pure
- **Hawaï** - La douceur tropicale
- **Mowgli** - L'aventurier né
- **Yellow** - La joie rayonnante
- **Téthys** - La grâce mystérieuse
- **Nyx** - L'élégance nocturne
- **Phuket** - L'esprit libre

## 🌈 Identité Visuelle

Notre charte graphique s'articule autour de couleurs chaleureuses qui reflètent l'authenticité de notre communauté :

### Couleurs Principales
- **Poilu Soleil** : `#F4D03F` - Chaleur et joie
- **Poilu Turquoise** : `#48CAE4` - Fraîcheur et sérénité  
- **Poilu Royal** : `#1E3A8A` - Confiance et stabilité
- **Poilu Gris** : `#6B7280` - Élégance et sobriété

### Optimisé pour les Réseaux Sociaux
Le design privilégie **TikTok** et **Instagram** avec des éléments visuels adaptés :
- Couleurs vives pour capturer l'attention
- Design mobile-first
- Boutons d'appel à l'action proéminents
- Contenu visuel engageant

## 🚀 Nos Réseaux Sociaux

- **TikTok** : [@communaute_9_poilus](https://www.tiktok.com/@communaute_9_poilus)
  - Vidéos courtes et amusantes
  - Behind the scenes de notre quotidien
  - Moments drôles avec nos animaux

- **Instagram** : [@la_communaute_des_9_poilus](https://www.instagram.com/la_communaute_des_9_poilus)
  - Photos lifestyle avec nos compagnons
  - Stories quotidiennes authentiques
  - Conseils et moments tendres

## 🛠️ Technologies Utilisées

### Stack Technique
- **Jekyll 4.4.1** - Générateur de site statique
- **TailwindCSS** - Framework CSS pour un design moderne
- **Node.js** - Gestion des dépendances frontend
- **Ruby 3.4+** - Backend Jekyll avec gems de compatibilité
- **Netlify** - Hébergement et déploiement

## 🎨 Développement

### Prérequis
- **Ruby 3.4+** installé
- **Node.js 16+** installé
- **Bundler** pour les gems Ruby

### Installation
```bash
# 1. Cloner le projet
cd "c:\Users\ikami\Desktop\Dev\Les 9 poilus"

# 2. Installer les dépendances Ruby
bundle install

# 3. Installer les dépendances Node.js
npm install

# 4. Compiler le CSS TailwindCSS
npm run build

# 5. Démarrer le serveur de développement
bundle exec jekyll serve
```

### Commandes Utiles
```bash
# Compilation CSS en mode watch
npm run watch

# Build de production
npm run build

# Serveur Jekyll avec rechargement automatique
bundle exec jekyll serve --watch

# Build Jekyll pour production
bundle exec jekyll build
```

## 📝 Gestion du Contenu

### Modifier les Réseaux Sociaux
Les liens sont définis dans :
- `_config.yml` → Section `social:`
- `_includes/header.html` → Liens directs dans la navigation
- `index.html` → Boutons d'appel à l'action
- `contact.html` → Page dédiée aux réseaux

## 🚀 Déploiement

### Netlify (Recommandé)
Le site est configuré pour un déploiement automatique sur Netlify :

1. **Build Command** : `npm run build && bundle exec jekyll build`
2. **Publish Directory** : `_site`
3. **Node Version** : 18 (dans netlify.toml)

## 📞 Support

Pour toute question :
- **TikTok** : [@communaute_9_poilus](https://www.tiktok.com/@communaute_9_poilus)
- **Instagram** : [@la_communaute_des_9_poilus](https://www.instagram.com/la_communaute_des_9_poilus)

---

*Fait avec 💝 pour la communauté des amoureux d'animaux par La Communauté des 9 Poilus*