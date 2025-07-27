# 🎬 Movies Explorer

Uma aplicação moderna para explorar filmes populares, construída com Next.js, TypeScript e integração com a API do TMDB.

![Movies Explorer](https://img.shields.io/badge/Next.js-15.4.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Playwright](https://img.shields.io/badge/Playwright-1.40-green?style=for-the-badge&logo=playwright)
![Storybook](https://img.shields.io/badge/Storybook-9.0-FF4785?style=for-the-badge&logo=storybook)

## ✨ Funcionalidades

- 🎯 **Busca de filmes** com debounce para otimização
- 📱 **Design responsivo** com Tailwind CSS
- 🎨 **Interface moderna** com shadcn/ui
- 🔍 **Paginação** para navegar pelos resultados
- 📊 **Detalhes completos** dos filmes em modal
- ♿ **Acessibilidade** com navegação por teclado
- 🛡️ **Error boundaries** para tratamento de erros
- 🎭 **Loading states** com skeletons
- 📚 **Documentação** com Storybook
- 🧪 **Testes E2E** com Playwright

---

### 🔐 Segurança da API: uso de Server Actions

> **As requisições à API do TMDB são feitas por meio de Server Actions no Next.js 15**, garantindo que a `API Key` **não fique visível no client-side**.  
> Isso impede vazamentos, protege a conta na TMDB e segue boas práticas modernas de segurança em aplicações React/Next.

---

## 🚀 Tecnologias

- **Framework:** Next.js 15.4.4
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Gerenciamento de Estado:** React Query (TanStack Query)
- **Testes E2E:** Playwright
- **Documentação:** Storybook
- **API:** TMDB (The Movie Database)
- **Package Manager:** pnpm

## 📋 Pré-requisitos

- Node.js 18+
- pnpm (recomendado) ou npm
- Conta na [TMDB](https://www.themoviedb.org/) para API key

## 🛠️ Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/ymath-xyz/Explorer-de-Filmes
cd Explorer-de-Filmes
```

### 2. Instale as dependências

```bash
pnpm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
NEXT_PUBLIC_API_URL=https://api.themoviedb.org/3
NEXT_PUBLIC_API_KEY=sua_api_key_aqui
```

**Como obter a API key:**

1. Acesse [TMDB](https://www.themoviedb.org/)
2. Crie uma conta ou faça login
3. Vá em Settings > API
4. Solicite uma API key
5. Copie a chave e cole no `.env`

### 4. Execute a aplicação

```bash
pnpm run dev
```

A aplicação estará disponível em `http://localhost:3000`

## 🧪 Testes

### Testes E2E com Playwright

#### Instalar dependências do Playwright (primeira vez)

```bash
npx playwright install
```

#### Executar testes

```bash
# Executar testes com interface gráfica
pnpm run test:ui

# Executar testes específicos
pnpm run test:components
pnpm run test:accessibility
pnpm run test:home-page
```

#### Tipos de Testes

- **`tests/home-page.spec.ts`** - Funcionalidades da página principal
- **`tests/components.spec.ts`** - Componentes individuais
- **`tests/accessibility.spec.ts`** - Testes de acessibilidade

## 📚 Storybook

### Instalar dependências (se necessário)

```bash
pnpm install
```

### Executar Storybook

```bash
pnpm run storybook
```

O Storybook estará disponível em `http://localhost:6006`

### Estrutura das Stories

```
src/components/
├── atoms/
│   ├── button/button.stories.tsx
│   └── search-bar/search-bar.stories.tsx
├── molecules/
│   ├── movie-card/movie-card.stories.tsx
│   ├── movie-modal/movie-modal.stories.tsx
│   ├── header/header.stories.tsx
│   └── footer/footer.stories.tsx
└── templates/
    └── home-page/
        └── components/
            ├── pagination/pagination.stories.tsx
            └── loading-movies/loading-movies.stories.tsx
```

## 🏗️ Arquitetura

O projeto segue o **Atomic Design** para organização dos componentes:

### Atoms

- `Button` - Botão reutilizável
- `SearchBar` - Barra de pesquisa
- `ErrorMessage` - Mensagens de erro
- `CentralizerSection` - Container centralizado

### Molecules

- `MovieCard` - Card de filme
- `MovieModal` - Modal com detalhes
- `Header` - Cabeçalho da aplicação
- `Footer` - Rodapé da aplicação

### Templates

- `HomePage` - Página principal
- `Pagination` - Navegação de páginas
- `LoadingMovies` - Estado de carregamento

## 🎨 Funcionalidades Principais

### Busca de Filmes

- Pesquisa em tempo real com debounce
- Integração com API do TMDB
- Resultados paginados

### Interface

- Design responsivo
- Animações suaves
- Estados de loading

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev          # Inicia servidor de desenvolvimento
pnpm build        # Build para produção
pnpm start        # Inicia servidor de produção

# Testes
pnpm test:ui      # Executa testes com interface

# Storybook
pnpm storybook    # Inicia Storybook

# Linting
pnpm lint         # Executa ESLint
```

## 🌟 Características Técnicas

### Performance

- **Server Actions** para operações no servidor
- **React Query** para cache e sincronização
- **Image Optimization** com Next.js
- **Code Splitting** automático (NextJS faz isso com o roteamento)

### Segurança

- **API keys** no servidor, para que a API não fique visível a cada request (server action).

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Deploy on Vercel

- VERCEL: [movies explorer](https://explorer-de-filmes.vercel.app/)

## Métricas recolhidas a partir do Speed Insights da própria vercel
<img width="1246" height="824" alt="image" src="https://github.com/user-attachments/assets/9d7ad116-f579-4e2e-9cc1-c7b5fb05191f" />

## Métricas recolhidas a partir do PageSpeed Insights
<img width="1026" height="820" alt="image" src="https://github.com/user-attachments/assets/cd0d9454-b48a-4fa2-a1df-d2b7fd417709" />
<img width="1013" height="833" alt="image" src="https://github.com/user-attachments/assets/122b595b-31d7-4fb6-b897-5bc8c33c5db2" />

## 👨‍💻 Autor

**Matheus Vieira**

- GitHub: [@ymath-xyz](https://github.com/ymath-xyz)
- LinkedIn: [ymath-silva](https://www.linkedin.com/in/ymath-silva/)
