# Design brief — Paulo Games

**Design read.** An 18+ action/war games storefront built for players who take
their combat sims seriously, not a casual toy shop. Register: tense, tactical,
cinematic. The visitor should feel like they're being briefed before a
deployment, not browsing a catalog.

**Concept spine.** The storefront as a forward operating base: scroll plays a
single continuous mission-briefing take, then the page opens into the armory
(catalog), the theater of operations (categories), the command's own record
(about), and a final call to report in (contact).

**Delivery tier.** `cinema` — Lenis+GSAP, Tier-1 hero, scroll chapters. The
animated website is the Tier-1 carrier; no second competing hero effect.

**Locked palette.**
- Background `#1D2024` — gunmetal, not pure graphite/near-black; reads as
  steel plate under low light, not an AI-slop void.
- Ink `#F1EDE6` — warm off-white, paper/steel-tag color.
- Muted `#A1A8B0` — cool steel gray for secondary text (lightened from the
  initial `#8B9199` after client feedback for stronger legibility).
- Accent `#D9483A` — signal/alert red, pulled from the footage's own tactical
  HUD warning color, not the banned ember-on-graphite or neon-cyan-on-black
  families. One accent, used sparingly (CTAs, the scrub progress bar, alert
  tags).

**Locked type.** `Outfit` (display, geometric/technical) + `IBM Plex Mono`
(kickers, tags, price/spec labels — reads like HUD readout text). No serif;
this is a tactical brief, not an editorial piece.

Animation mode: animated-website

Single-shot journey, footage supplied by the client (their own
Higgsfield-generated take), not regenerated.

**Journey (single-shot, one continuous 12s take cut into 3 sequential,
frame-contiguous segments — no generated seams, since it's one real take):**
1. `scene-mech` (0–4s) — establishing: a war machine advancing through smoke.
   Kicker "TRANSMISSÃO AO VIVO", headline the brand statement.
2. `scene-impact` (4–8s) — the take turns hot: cockpit hit, sparks across the
   glass. Headline sets up the catalog's intensity.
3. `scene-aftermath` (8–12.05s) — the pilot holds the line, battered but
   still driving. Closing headline + primary CTA into the armory.

World grammar is inherited for free (one real take, not generated per-scene):
gunmetal machinery, smoke, fire glow, cyan cockpit HUD. Mobile framing: cover
crop, object-position shifted right (~70% 50%) for scenes 2–3 to keep the
pilot in frame; centered for scene 1. Delivery budget: desktop chain ≈4.5 MiB,
mobile chain ≈3.7 MiB — both well under the 32/16 MiB caps.

**Section plan** (4 distinct layout families after the hero, no consecutive
repeats):
1. Hero — scroll-scrub journey (above).
2. "O Arsenal" — game catalog, asymmetric card grid.
3. "Zonas de Combate" — genre categories, bento grid.
4. "Registro do Comando" — about/brand story, split text + image (reuses the
   aftermath poster still — no extra generation spend).
5. "Reportar-se" — closing CTA band, full-width.
Footer: link list + legal.

**Asset plan.** Hero: the client's own footage (encoded, no generation spend).
Logo/monogram: 1 generated mark (no existing logo). Cover/OG: 1 generated
scene, composed with the brand lockup. Section imagery: video stills already
on hand (posters) + CSS/typographic treatment — the icon set and extra section
plates are deliberately skipped this build to stay inside a 10-credit budget;
flagged to the client as an easy add-on later. Catalog cards: 6 of 8 generated
key-art covers (nano_banana_flash, silhouette/hardware-focused prompts to
avoid war-content false-positive flags); "Linha de Frente" and "Cerco Final"
still use the text-only fallback treatment — the free-plan credit balance ran
out mid-batch, remaining 2 are a quick follow-up once credits are available.

**CTA inventory** (one label per intent, each its own component):
1. Nav — "Catálogo" (anchor link, underline sweep on hover).
2. Hero, chapter 3 — "Entrar no Arsenal" (filled accent pill, arrow slides in).
3. Closing band — "Falar com o Comando" (outlined pill, magnetic hover via
   `useMotionValue`).
No per-card CTA on the catalog: this is a showcase build with no live
checkout, so cards stay purely presentational rather than shipping dead links.
