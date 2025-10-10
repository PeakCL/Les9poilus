#!/bin/bash
# Script pour nettoyer les favicons inutiles
# Garder seulement les fichiers essentiels pour 2025

echo "🧹 Nettoyage des favicons - Gardons seulement l'essentiel..."

cd "c:\Users\ikami\Desktop\Dev\Les 9 poilus\assets\favicon"

# Fichiers à GARDER (essentiels)
KEEP_FILES=(
    "favicon.ico"
    "favicon-16x16.png"
    "favicon-32x32.png"
    "apple-icon-180x180.png"
    "android-icon-192x192.png"
    "manifest.json"
)

# Créer dossier backup
mkdir -p backup_favicon
echo "📦 Backup des fichiers actuels..."

# Backup tous les fichiers
cp *.* backup_favicon/

echo "🗑️ Suppression des fichiers obsolètes..."

# Supprimer tous les fichiers sauf ceux à garder
for file in *; do
    if [[ ! " ${KEEP_FILES[@]} " =~ " ${file} " ]]; then
        rm "$file"
        echo "  ❌ Supprimé: $file"
    else
        echo "  ✅ Gardé: $file"
    fi
done

echo "✨ Nettoyage terminé! Favicon optimisé pour 2025"
echo "📁 Backup disponible dans: backup_favicon/"