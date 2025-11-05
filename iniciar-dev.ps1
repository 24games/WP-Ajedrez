# Script para iniciar o servidor de desenvolvimento
$env:Path += ";C:\Program Files\nodejs"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Iniciando servidor de desenvolvimento" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar se node_modules existe
if (-not (Test-Path "node_modules")) {
    Write-Host "Instalando dependências..." -ForegroundColor Yellow
    npm install
    Write-Host ""
}

Write-Host "Iniciando servidor Vite..." -ForegroundColor Green
Write-Host "O site estará disponível em: http://localhost:5173" -ForegroundColor Yellow
Write-Host "Pressione Ctrl+C para parar o servidor" -ForegroundColor Gray
Write-Host ""

npm run dev



