# Paulo Games

Storefront/landing page premium para uma loja fictícia de jogos de ação e guerra 18+, com identidade visual cinematográfica de "base avançada de operações". O projeto entrega uma experiência de rolagem em ato único (scroll storytelling), inspirada em uma transmissão de campo de batalha, que conduz o visitante por uma "missão" até o catálogo de jogos.

Demo: https://paulo-games-site.vercel.app

## Conceito

O site simula o briefing de uma missão militar: a rolagem única (hero cinematográfico) evolui em três atos - o avanço da máquina de guerra, o impacto em combate e o rescaldo - antes de abrir para as demais seções:

- **O Arsenal**: catálogo de jogos em grid assimétrico de cards
- **Zonas de Combate**: categorias e gêneros em grid bento
- **Registro do Comando**: seção sobre/história da marca
- **Reportar-se**: chamada final para contato

## Stack técnica

- **React 19** + **TanStack Start** / **TanStack Router** (SSR/roteamento)
- **Vite** como build tool, com configuração dedicada para deploy no Vercel
- **TailwindCSS 4** para estilização, com componentes baseados em **Radix UI** / **shadcn**
- **GSAP** + **Lenis** para a jornada de scroll cinematográfico (scroll-scrubbing)
- **TypeScript** em todo o projeto
- **Zod**, **React Query**, **Recharts**, entre outras libs de apoio
- **Bun** como gerenciador de pacotes/scripts
- Deploy contínuo via **Vercel** e workflows de CI em .github/

## Identidade visual

- Paleta: fundo grafite-metálico (#1D2024), texto em off-white quente (#F1EDE6), cinza-aço para textos secundários (#A1A8B0) e vermelho de alerta como cor de destaque (#D9483A)
- Tipografia: Outfit para títulos e IBM Plex Mono para tags, kickers e informações técnicas (estilo HUD)
- Vídeo de herói (hero) com adaptação de enquadramento e peso de arquivo para desktop e mobile

## Estrutura do projeto

- aplicativo/src: código-fonte da aplicação
- aplicativo/public: assets estáticos
- aplicativo/migrations: migrações (se aplicável)
- aplicativo/packages: pacotes internos do workspace
- aplicativo/scripts: scripts de verificação/checagem de build
- aplicativo/tests: testes automatizados

## Rodando o projeto localmente

cd aplicativo && bun install && bun run dev

Outros scripts úteis: bun run build (build de produção), bun run lint (checagem de lint), bun run typecheck (checagem de tipos), bun run test (testes automatizados).

## Status

Projeto em desenvolvimento (preview): jornada de rolagem do herói, identidade de marca e seções de catálogo já implementadas, com otimizações contínuas de performance (ex.: redução de vídeos em dispositivos móveis).

## Autor

Desenvolvido por **Paulo Victor Silva Santos**
- GitHub: [@PAULO-VICTOR-SILVA-SANTOS](https://github.com/PAULO-VICTOR-SILVA-SANTOS)
- LinkedIn: [paulo-victor-dev-full-stack](https://www.linkedin.com/in/paulo-victor-dev-full-stack)
