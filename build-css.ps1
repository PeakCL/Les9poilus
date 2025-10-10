# Script pour compiler TailwindCSS avec front matter Jekyll
Write-Host "Compilation TailwindCSS..." -ForegroundColor Yellow

# Compiler TailwindCSS
npx tailwindcss -i ./src/input.css -o ./assets/css/output.css --watch=false

if ($LASTEXITCODE -eq 0) {
    Write-Host "Compilation réussie!" -ForegroundColor Green
    
    # Lire le fichier compilé
    $content = Get-Content -Path "./assets/css/output.css" -Raw
    
    # Ajouter le front matter au début si ce n'est pas déjà fait
    if (-not $content.StartsWith("---")) {
        $frontMatter = "---`r`n---`r`n"
        $newContent = $frontMatter + $content
        
        # Écrire le nouveau contenu
        Set-Content -Path "./assets/css/output.css" -Value $newContent -NoNewline
        
        Write-Host "Front matter Jekyll ajouté!" -ForegroundColor Green
    } else {
        Write-Host "Front matter déjà présent." -ForegroundColor Cyan
    }
} else {
    Write-Host "Erreur lors de la compilation!" -ForegroundColor Red
    exit 1
}