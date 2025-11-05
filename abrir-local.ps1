# Script para abrir a página localmente em um servidor HTTP simples

Write-Host "=== Servidor Local ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "Escolha uma opção:" -ForegroundColor Yellow
Write-Host "1. Abrir diretamente no navegador (arquivo local)" -ForegroundColor White
Write-Host "2. Iniciar servidor HTTP simples (recomendado)" -ForegroundColor White
Write-Host ""

$opcao = Read-Host "Digite 1 ou 2"

if ($opcao -eq "1") {
    # Abrir diretamente
    $caminho = Join-Path $PWD "index.html"
    Start-Process $caminho
    Write-Host "Abrindo index.html no navegador..." -ForegroundColor Green
} elseif ($opcao -eq "2") {
    # Verificar se Python está instalado
    $python = Get-Command python -ErrorAction SilentlyContinue
    if ($python) {
        Write-Host "Iniciando servidor HTTP na porta 8000..." -ForegroundColor Cyan
        Write-Host "Acesse: http://localhost:8000" -ForegroundColor Green
        Write-Host "Pressione Ctrl+C para parar o servidor" -ForegroundColor Yellow
        python -m http.server 8000
    } else {
        Write-Host "Python não encontrado. Tentando com PHP..." -ForegroundColor Yellow
        $php = Get-Command php -ErrorAction SilentlyContinue
        if ($php) {
            Write-Host "Iniciando servidor PHP na porta 8000..." -ForegroundColor Cyan
            Write-Host "Acesse: http://localhost:8000" -ForegroundColor Green
            Write-Host "Pressione Ctrl+C para parar o servidor" -ForegroundColor Yellow
            php -S localhost:8000
        } else {
            Write-Host "ERRO: Python ou PHP não encontrado." -ForegroundColor Red
            Write-Host "Abra o arquivo index.html diretamente no navegador." -ForegroundColor Yellow
            $caminho = Join-Path $PWD "index.html"
            Start-Process $caminho
        }
    }
} else {
    Write-Host "Opção inválida!" -ForegroundColor Red
}

