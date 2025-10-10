#!/bin/bash
# Script pour compiler TailwindCSS et ajouter le front matter Jekyll

echo "🎨 Compilation de TailwindCSS..."
npx tailwindcss -i ./src/input.css -o ./assets/css/output.css

echo "📝 Ajout du front matter Jekyll..."
# Crée un fichier temporaire avec le front matter
echo "---" > temp_output.css
echo "---" >> temp_output.css
cat ./assets/css/output.css >> temp_output.css

# Remplace le fichier original
mv temp_output.css ./assets/css/output.css

echo "✅ CSS compilé avec front matter Jekyll !"