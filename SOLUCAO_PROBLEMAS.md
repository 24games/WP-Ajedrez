# 🔧 Solução de Problemas Comuns

## ❌ Erro: "npm não é reconhecido"

**Solução:**
1. Instale o Node.js de https://nodejs.org/ (versão LTS)
2. Reinicie o terminal/PowerShell após instalar
3. Verifique com: `node --version` e `npm --version`

## ❌ Erro: "Cannot find module" ou "Module not found"

**Solução:**
```bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json
npm install
```

No Windows PowerShell:
```powershell
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
```

## ❌ Erro ao executar `npm run dev`

**Verifique:**
1. Todas as dependências foram instaladas: `npm install`
2. O arquivo `index.html` está na raiz do projeto
3. A pasta `src` existe com todos os componentes

**Solução:**
```bash
npm install
npm run dev
```

## ❌ Erro: "Port already in use"

**Solução:**
```bash
# Use outra porta
npm run dev -- --port 3000
```

## ❌ Erro de importação no React

**Verifique:**
- Todos os arquivos `.jsx` têm extensão correta
- Os caminhos de import estão corretos (case-sensitive)
- Todos os componentes estão exportados corretamente

## ❌ Erro do Tailwind CSS não funcionando

**Solução:**
1. Verifique se `tailwind.config.js` está na raiz
2. Verifique se `postcss.config.js` está na raiz
3. Verifique se `src/index.css` tem as diretivas do Tailwind:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## ❌ Erro: "Failed to resolve import"

**Solução:**
- Verifique se todos os componentes existem
- Verifique os caminhos de import (use `./` para relativo)
- Reinicie o servidor de desenvolvimento

## 🔄 Comandos de Reset Completo

Se nada funcionar, tente resetar completamente:

```bash
# Remover node_modules e lock files
rm -rf node_modules package-lock.json

# Limpar cache do npm
npm cache clean --force

# Reinstalar tudo
npm install

# Tentar novamente
npm run dev
```

No Windows PowerShell:
```powershell
Remove-Item -Recurse -Force node_modules, package-lock.json
npm cache clean --force
npm install
npm run dev
```

## 📝 Verificação de Estrutura

Certifique-se de que a estrutura está assim:

```
WhitePage/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── components/
    └── contexts/
```

## 💡 Dica Importante

Se você estiver usando Windows e tiver problemas com caminhos:
- Use barras `/` nos imports (funciona no Windows também)
- Evite espaços nos nomes de pastas
- Execute o terminal como Administrador se necessário

