# 🚀 Guia de Instalação - Xadrez Brilhante

## Pré-requisitos

Certifique-se de ter o Node.js instalado (versão 16 ou superior).

## 📦 Passos para Instalação

### 1. Instalar dependências

```bash
npm install
```

### 2. Executar em modo desenvolvimento

```bash
npm run dev
```

O site estará disponível em: `http://localhost:5173`

### 3. Build para produção

```bash
npm run build
```

Os arquivos compilados estarão na pasta `dist`.

### 4. Preview da build

```bash
npm run preview
```

## ✨ Funcionalidades

- ✅ **Tema Claro/Escuro**: Clique no botão de tema no header para alternar
- ✅ **Menu Mobile**: Funcional em dispositivos móveis
- ✅ **Navegação Suave**: Scroll automático entre seções
- ✅ **Newsletter**: Formulário funcional com validação
- ✅ **Design Responsivo**: Adaptável para todos os tamanhos de tela

## 🎨 Personalização

O tema é salvo automaticamente no `localStorage` do navegador e persiste entre sessões.

Para personalizar as cores, edite o arquivo `tailwind.config.js`:

```javascript
colors: {
  gold: '#d4af37',  // Cor dourada
  accent: '#ffd86b', // Cor de destaque
}
```

## 📱 Testando Responsividade

- **Mobile**: Redimensione a janela do navegador para menos de 768px
- **Tablet**: Entre 768px e 1024px
- **Desktop**: Acima de 1024px

## 🛠️ Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header.jsx      # Cabeçalho com menu
│   ├── Hero.jsx        # Seção principal
│   ├── Footer.jsx      # Rodapé
│   ├── ThemeToggle.jsx # Botão de alternar tema
│   └── sections/       # Seções do conteúdo
├── contexts/           # Context API
│   └── ThemeContext.jsx # Gerenciamento de tema
├── App.jsx             # Componente principal
├── main.jsx            # Entry point
└── index.css           # Estilos globais com Tailwind
```

## 💡 Dicas

- O tema padrão é **escuro** (dark mode)
- Todas as cores se adaptam automaticamente ao tema
- O site é totalmente funcional sem JavaScript, mas com JS oferece melhor experiência

## 🐛 Solução de Problemas

### Erro: "Cannot find module"
Execute `npm install` novamente.

### Erro: Porta já em uso
Vite tentará usar outra porta automaticamente, ou você pode especificar:
```bash
npm run dev -- --port 3000
```

### Tema não está funcionando
Certifique-se de que o JavaScript está habilitado no navegador.

## 📄 Licença

Este projeto está sob a licença MIT.

