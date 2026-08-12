import { createFileRoute } from "@tanstack/react-router";
import {
  Bot,
  Crosshair,
  Flame,
  Shield,
  Skull,
  Users,
} from "lucide-react";
import type { ComponentType } from "react";

import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";
import { NavLink, OutlineCta } from "@/components/cta-buttons";

export const Route = createFileRoute("/")({
  // No title/description here on purpose: the home page inherits the site's
  // editable page metadata from the root route (title/favicon/og), so a shared
  // link to "/" shows the owner's values. Add a `head` here only to give a
  // SPECIFIC page its own title/description.
  component: Index,
});

type Game = {
  title: string;
  genre: string;
  price: string;
  blurb: string;
  rank: string;
  cover?: string;
};

const games: Game[] = [
  {
    blurb: "Assalte bases fortificadas em esquadrões de quatro, sem respawn fácil.",
    cover: "/assets/games/vanguard-protocol.webp",
    genre: "FPS Tático",
    price: "R$ 249,90",
    rank: "01",
    title: "Vanguard Protocol",
  },
  {
    blurb: "Pilote colossos blindados em campanhas que destroem cidades inteiras.",
    cover: "/assets/games/iron-sortie.webp",
    genre: "Combate de Mechas",
    price: "R$ 279,90",
    rank: "02",
    title: "Iron Sortie",
  },
  {
    blurb: "Sobreviva ao cerco com munição limitada e decisões que pesam.",
    cover: "/assets/games/ultima-trincheira.webp",
    genre: "Survival de Guerra",
    price: "R$ 199,90",
    rank: "03",
    title: "Última Trincheira",
  },
  {
    blurb: "Infiltração noturna em território hostil, um erro custa a missão.",
    cover: "/assets/games/zona-cinzenta.webp",
    genre: "Guerrilha Urbana",
    price: "R$ 229,90",
    rank: "04",
    title: "Zona Cinzenta",
  },
  {
    blurb: "Defenda um reator orbital de uma invasão em tempo real.",
    cover: "/assets/games/reator-nove.webp",
    genre: "Ficção Científica Tática",
    price: "R$ 259,90",
    rank: "05",
    title: "Reator Nove",
  },
  {
    blurb: "Até quatro jogadores, uma retirada impossível sob fogo cruzado.",
    cover: "/assets/games/chumbo-e-cinzas.webp",
    genre: "Ação Cooperativa",
    price: "R$ 219,90",
    rank: "06",
    title: "Chumbo e Cinzas",
  },
  {
    blurb: "Comande batalhões inteiros em frentes que mudam a cada minuto.",
    cover: "/assets/games/linha-de-frente.webp",
    genre: "Estratégia Bélica",
    price: "R$ 189,90",
    rank: "07",
    title: "Linha de Frente",
  },
  {
    blurb: "Cem operadores, um mapa em colapso: extração ou eliminação.",
    cover: "/assets/games/cerco-final.webp",
    genre: "Battle Royale Tático",
    price: "R$ 149,90",
    rank: "08",
    title: "Cerco Final",
  },
];

type Category = { label: string; count: string; icon: ComponentType<{ className?: string }> };

const categories: Category[] = [
  { count: "14 jogos", icon: Crosshair, label: "Ação" },
  { count: "9 jogos", icon: Shield, label: "Tático" },
  { count: "6 jogos", icon: Bot, label: "Mechas" },
  { count: "8 jogos", icon: Flame, label: "Sobrevivência" },
  { count: "11 jogos", icon: Users, label: "Cooperativo" },
  { count: "5 jogos", icon: Skull, label: "Battle Royale" },
];

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 flex items-center justify-between gap-4 px-5 py-4 sm:px-8">
      <a href="#top" className="flex items-center gap-2.5">
        <svg viewBox="0 0 64 64" className="size-8" aria-hidden="true">
          <rect width="64" height="64" rx="12" fill="var(--color-brand-bg)" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 12H46V36H26V52H18V12ZM26 20V28H38V20H26Z"
            fill="var(--color-brand-accent)"
          />
        </svg>
        <span className="font-display text-sm font-semibold tracking-tight text-brand-ink">
          Paulo Games
        </span>
        <span className="rounded-full border border-brand-border px-2 py-0.5 font-tag text-tag-2xs text-brand-muted">
          18+
        </span>
      </a>
      <nav className="hidden items-center gap-6 sm:flex" aria-label="Navegação principal">
        <NavLink href="#arsenal">Arsenal</NavLink>
        <NavLink href="#zonas-de-combate">Zonas</NavLink>
        <NavLink href="#comando">Comando</NavLink>
      </nav>
      <a
        href="#arsenal"
        className="rounded-full border border-brand-border px-4 py-2 text-sm font-medium text-brand-ink transition-colors hover:border-brand-accent"
      >
        Catálogo
      </a>
    </header>
  );
}

function GameCard({ game, featured = false }: { game: Game; featured?: boolean }) {
  return (
    <article
      className={
        "group relative flex min-h-80 flex-col justify-between overflow-hidden rounded-2xl border border-brand-border p-6 " +
        (game.cover ? "" : "bg-brand-bg-panel ") +
        (featured ? "lg:col-span-2 lg:row-span-2 lg:min-h-full lg:p-10" : "")
      }
    >
      {game.cover ? (
        <>
          <img
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
            src={game.cover}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/60 to-brand-bg/5" />
        </>
      ) : null}
      <span
        aria-hidden="true"
        className={
          "pointer-events-none absolute -right-2 -top-4 font-display font-bold text-brand-ink/10 " +
          (featured ? "text-rank-lg" : "text-rank-md")
        }
      >
        {game.rank}
      </span>
      <div className="relative">
        <span className="inline-block rounded-full bg-brand-bg px-2.5 py-1 font-tag text-tag-2xs tracking-wide text-brand-accent">
          {game.genre}
        </span>
        <h3
          className={
            "mt-4 font-display font-bold text-brand-ink text-shadow-card-title " +
            (featured ? "text-3xl sm:text-4xl" : "text-xl")
          }
        >
          {game.title}
        </h3>
        <p
          className={
            "mt-2 text-brand-muted text-shadow-card-body " +
            (featured ? "max-w-md text-base" : "text-sm")
          }
        >
          {game.blurb}
        </p>
      </div>
      <p className="relative mt-6 font-tag text-sm font-medium text-brand-ink">{game.price}</p>
    </article>
  );
}

function CategoryTile({ category }: { category: Category }) {
  const Icon = category.icon;
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-brand-border bg-brand-bg-panel p-6">
      <Icon className="size-6 text-brand-accent" aria-hidden="true" />
      <div className="mt-8">
        <p className="font-display text-lg font-semibold text-brand-ink">{category.label}</p>
        <p className="mt-1 font-tag text-xs text-brand-muted">{category.count}</p>
      </div>
    </div>
  );
}

function Index() {
  return (
    <main id="top">
      <Nav />
      <ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme} />

      <section id="arsenal" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <p className="pg-reveal font-tag text-xs tracking-[0.2em] text-brand-accent">
          O ARSENAL
        </p>
        <h2 className="pg-reveal pg-reveal-delay-1 mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
          Munição para quem já cansou do modo fácil
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game, index) => (
            <GameCard game={game} key={game.title} featured={index === 0} />
          ))}
        </div>
      </section>

      <section
        id="zonas-de-combate"
        className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32"
      >
        <h2 className="pg-reveal max-w-2xl font-display text-4xl font-bold tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
          Zonas de combate
        </h2>
        <p className="pg-reveal pg-reveal-delay-1 mt-3 max-w-lg text-brand-muted">
          Seis frentes de operação. Escolha onde entrar primeiro.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3">
          {categories.map((category) => (
            <CategoryTile category={category} key={category.label} />
          ))}
        </div>
      </section>

      <section
        id="comando"
        className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:gap-16"
      >
        <div>
          <p className="pg-reveal font-tag text-xs tracking-[0.2em] text-brand-accent">
            REGISTRO DO COMANDO
          </p>
          <h2 className="pg-reveal pg-reveal-delay-1 mt-3 font-display text-4xl font-bold tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
            Curadoria de quem testa cada campanha
          </h2>
          <p className="pg-reveal pg-reveal-delay-2 mt-6 max-w-md text-brand-muted">
            A Paulo Games separa o que é sério do que é só efeito de marketing.
            Cada título entra no catálogo depois de horas em campo, sob as
            mesmas condições que você vai encontrar em casa.
          </p>
          <p className="mt-4 max-w-md text-brand-muted">
            Conteúdo classificado para maiores de 18 anos. Violência armada,
            temas de guerra e cenas de impacto fazem parte da experiência,
            não são acidente.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-brand-border">
          <img
            alt="Piloto em cabine de combate, sistemas táticos ativos"
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
            src="/assets/world/scene-impact-poster.png"
          />
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto flex max-w-4xl flex-col items-start gap-8 rounded-3xl border border-brand-border bg-brand-bg-panel px-8 py-16 sm:px-16">
          <p className="font-tag text-xs tracking-[0.2em] text-brand-accent">REPORTAR-SE</p>
          <h2 className="max-w-lg font-display text-4xl font-bold tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
            Pronto para entrar em campo?
          </h2>
          <OutlineCta href="mailto:contato@paulogames.com.br">Falar com o Comando</OutlineCta>
        </div>
      </section>

      <footer className="border-t border-brand-border px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5">
            <svg viewBox="0 0 64 64" className="size-6" aria-hidden="true">
              <rect width="64" height="64" rx="12" fill="var(--color-brand-bg)" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 12H46V36H26V52H18V12ZM26 20V28H38V20H26Z"
                fill="var(--color-brand-accent)"
              />
            </svg>
            <span className="font-display text-sm font-semibold text-brand-ink">Paulo Games</span>
          </div>
          <nav className="flex items-center gap-6" aria-label="Links do rodapé">
            <NavLink href="#arsenal">Arsenal</NavLink>
            <NavLink href="#zonas-de-combate">Zonas</NavLink>
            <NavLink href="#comando">Comando</NavLink>
          </nav>
          <p className="max-w-sm text-xs text-brand-muted">
            Catálogo de demonstração, conteúdo classificado 18+. © 2026 Paulo
            Games.
          </p>
        </div>
      </footer>
    </main>
  );
}
