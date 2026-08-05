/**
 * Scene data for the scroll-scrub journey (design-brief.md).
 *
 * Single-shot: the client's own footage is one continuous ~12s take. It is
 * cut into 3 sequential, frame-contiguous segments (no generation, no seams
 * to lock — each segment's first frame is the previous segment's real last
 * frame, because they are literally cuts of the same file) so three chapters
 * of copy can read over one unbroken take.
 */
import { createElement } from "react";

import type { ScrollScrubScene, ScrollScrubTheme } from "@/components/scroll-scrub/scroll-scrub";
import { PrimaryCta } from "@/components/cta-buttons";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#D9483A",
  background: "#1D2024",
  ink: "#F1EDE6",
  muted: "#8B9199",
};

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    body: "Armamento pesado, mundos em chamas e as campanhas mais brutais do ano, selecionadas para quem joga sem freio.",
    clip: "/assets/world/scene-mech.mp4",
    id: "scene-mech",
    kicker: "TRANSMISSÃO AO VIVO",
    label: "Base",
    mobileClip: "/assets/world/scene-mech-mobile.mp4",
    mobilePoster: "/assets/world/scene-mech-mobile-poster.png",
    objectPosition: "50% 40%",
    poster: "/assets/world/scene-mech-poster.png",
    scroll: 1.5,
    tags: ["18+", "Ação", "Guerra"],
    title: "Paulo Games",
  },
  {
    body: "Cada título do catálogo passou pelo mesmo teste: aguenta a pressão do combate real ou fica de fora.",
    clip: "/assets/world/scene-impact.mp4",
    id: "scene-impact",
    kicker: "SOB FOGO",
    label: "Impacto",
    mobileClip: "/assets/world/scene-impact-mobile.mp4",
    mobileObjectPosition: "70% 45%",
    mobilePoster: "/assets/world/scene-impact-mobile-poster.png",
    objectPosition: "62% 45%",
    poster: "/assets/world/scene-impact-poster.png",
    scroll: 1.5,
    tags: ["FPS", "Tático", "Multiplayer"],
    title: "Todo lançamento acerta em cheio",
  },
  {
    actions: createElement(PrimaryCta, { href: "#arsenal", children: "Entrar no Arsenal" }),
    align: "right",
    body: "Entre no arsenal completo e escolha o próximo campo de batalha.",
    clip: "/assets/world/scene-aftermath.mp4",
    id: "scene-aftermath",
    kicker: "SEM RECUAR",
    label: "Arsenal",
    mobileClip: "/assets/world/scene-aftermath-mobile.mp4",
    mobileObjectPosition: "68% 40%",
    mobilePoster: "/assets/world/scene-aftermath-mobile-poster.png",
    objectPosition: "66% 40%",
    poster: "/assets/world/scene-aftermath-poster.png",
    scroll: 1.6,
    title: "Sua próxima missão começa aqui",
  },
];
