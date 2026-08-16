# AGENTS.md

This file provides guidance to AI coding agents when working with code in this repository.

## Repository Overview

Darkom Débarras site vitrine and skill collection for AI coding agents.

## OpenCode Integration

OpenCode uses a skill-driven execution model powered by the `skill` tool and `skills/`.

### Core Rules

- If a task matches a skill, invoke it.
- Skills live in `skills/<skill-name>/SKILL.md`.
- Follow skill instructions strictly.

### Intent to Skill Mapping

- Feature: `spec-driven-development` -> `incremental-implementation` -> `test-driven-development`
- Planning: `planning-and-task-breakdown`
- Bug or failure: `debugging-and-error-recovery`
- Review: `code-review-and-quality`
- Refactoring: `code-simplification`
- UI work: `frontend-ui-engineering`

### Lifecycle Mapping

- DEFINE: `spec-driven-development`
- PLAN: `planning-and-task-breakdown`
- BUILD: `incremental-implementation` + `test-driven-development`
- VERIFY: `debugging-and-error-recovery`
- REVIEW: `code-review-and-quality`
- SHIP: `shipping-and-launch`

## Orchestration: Personas, Skills, and Commands

- **Skills** (`skills/<name>/SKILL.md`): Workflows with steps and exit criteria.
- **Personas** (`agents/<role>.md`): Roles with a perspective and output format.
- **Slash commands** (`.claude/commands/*.md`): User-facing entry points.

Composition rule: The user or slash command orchestrates. Personas do not invoke other personas, but may invoke skills.

## Creating a New Skill

Skill directory structure: `skills/{skill-name}/SKILL.md` with optional `scripts/`. Keep `SKILL.md` under 500 lines, write specific trigger descriptions, and use `set -e` in bash scripts.

## Project Context: Darkom Débarras

### Project Overview
Site vitrine darkom-debarras, débarras/vidage-maison en Haute-Savoie.

### Stack
- Vite 8.0.3
- React 19
- TypeScript (strict)
- Tailwind v4.2.2

### Architecture
- `src/pages/` (7 pages)
- `src/components/` (Header, Hero, Button, Simulator/, InterventionMap, Testimonials, Footer)
- `src/hooks/` (useSEO)
- `src/index.css` (tokens + `@layer base`)

### Design Tokens
- primary `#143d24`
- primary-light `#1a6530`
- accent `#a0ab37`
- surface `#f8f8f5`
- muted `#5a5a5a`

### Commands
- `dev`
- `build`
- `lint`
- `test:e2e`
- `tsc`

### Conventions
- CSS: `@layer base` pour les resets globaux (Tailwind v4 cascade)
- Components: fonctionnels + hooks, pas de class components
- Images: Pexels uniquement (gratuit, sans watermark)
- Language: français pour le contenu, anglais pour le code

### Critical Rules
- NE JAMAIS utiliser `as any` ou `@ts-ignore`
- NE JAMAIS committer sans demande explicite
- Vite cache sur drvfs: purger `node_modules/.vite` après changements CSS
- Pages bannières: `bg-primary/85` + `text-shadow` sur `h1` (contraste)

### Deployment
Vercel, remote `github.com/JAME-cyber/darkom-debarras.git`

### Known Issues
Labels carte géo peuvent chevaucher (offsets dans `InterventionMap.tsx`)

---

## Contexte de l'application Darkom Débarras

@SKILL.md
