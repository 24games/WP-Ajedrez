# Como Enviar o Código para o GitHub

## Pré-requisitos

1. **Instalar Git**: Se o Git não estiver instalado, baixe em: https://git-scm.com/download/win

2. **Criar conta no GitHub**: Se ainda não tiver, crie em: https://github.com

3. **Criar um repositório no GitHub**:
   - Acesse https://github.com/new
   - Dê um nome ao repositório (ex: "WhitePage" ou "xadrez-brilhante")
   - Escolha se será público ou privado
   - **NÃO** marque "Initialize this repository with a README"
   - Clique em "Create repository"

## Passos para Enviar o Código

Abra o PowerShell ou Prompt de Comando na pasta do projeto (`C:\Users\PC BRANCO\Downloads\WhitePage`) e execute os seguintes comandos:

### 1. Inicializar o repositório Git (se ainda não estiver inicializado)
```bash
git init
```

### 2. Adicionar todos os arquivos
```bash
git add .
```

### 3. Fazer o primeiro commit
```bash
git commit -m "Primeiro commit: site Xadrez Brilhante"
```

### 4. Adicionar o repositório remoto do GitHub
```bash
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
```
*(Substitua `SEU_USUARIO` e `SEU_REPOSITORIO` pelos valores do seu repositório)*

### 5. Enviar o código para o GitHub
```bash
git branch -M main
git push -u origin main
```

## Atualizações Futuras

Para enviar atualizações futuras:

```bash
git add .
git commit -m "Descrição das alterações"
git push
```

## Nota

Se você já tem um repositório Git configurado, basta usar:
```bash
git add .
git commit -m "Atualização do código"
git push
```

