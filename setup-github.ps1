# Script para configurar o repositório Git e enviar para o GitHub
# Execute: .\setup-github.ps1

Write-Host "=== Configuração do Repositório GitHub ===" -ForegroundColor Cyan
Write-Host ""

# Verificar se o Git está instalado
try {
    $gitVersion = git --version
    Write-Host "Git encontrado: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "ERRO: Git não está instalado ou não está no PATH." -ForegroundColor Red
    Write-Host "Por favor, instale o Git em: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}

# Verificar se já é um repositório Git
if (Test-Path .git) {
    Write-Host "Repositório Git já inicializado." -ForegroundColor Yellow
} else {
    Write-Host "Inicializando repositório Git..." -ForegroundColor Cyan
    git init
    Write-Host "Repositório inicializado com sucesso!" -ForegroundColor Green
}

# Adicionar todos os arquivos
Write-Host "Adicionando arquivos..." -ForegroundColor Cyan
git add .

# Verificar se há mudanças para commitar
$status = git status --porcelain
if ($status) {
    Write-Host "Fazendo commit inicial..." -ForegroundColor Cyan
    git commit -m "Primeiro commit: site Xadrez Brilhante"
    Write-Host "Commit realizado com sucesso!" -ForegroundColor Green
} else {
    Write-Host "Não há mudanças para commitar." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "=== Próximos Passos ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Crie um repositório no GitHub: https://github.com/new" -ForegroundColor Yellow
Write-Host "2. Execute o comando abaixo (substitua SEU_USUARIO e SEU_REPOSITORIO):" -ForegroundColor Yellow
Write-Host "   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git" -ForegroundColor White
Write-Host "3. Envie o código para o GitHub:" -ForegroundColor Yellow
Write-Host "   git branch -M main" -ForegroundColor White
Write-Host "   git push -u origin main" -ForegroundColor White
Write-Host ""
Write-Host "Para mais informações, consulte o arquivo GITHUB_SETUP.md" -ForegroundColor Cyan

