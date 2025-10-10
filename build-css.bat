@echo off
echo Compilation TailwindCSS...

REM Compiler TailwindCSS
npx tailwindcss -i ./src/input.css -o ./assets/css/output.css --watch=false

if %ERRORLEVEL% EQU 0 (
    echo Compilation reussie!
    
    REM Ajouter le front matter Jekyll si nécessaire
    powershell -Command ^
        "$content = Get-Content -Path './assets/css/output.css' -Raw; ^
         if (-not $content.StartsWith('---')) { ^
             $frontMatter = '---`r`n---`r`n'; ^
             $newContent = $frontMatter + $content; ^
             Set-Content -Path './assets/css/output.css' -Value $newContent -NoNewline; ^
             Write-Host 'Front matter Jekyll ajoute!' -ForegroundColor Green; ^
         } else { ^
             Write-Host 'Front matter deja present.' -ForegroundColor Cyan; ^
         }"
) else (
    echo Erreur lors de la compilation!
    exit /b 1
)