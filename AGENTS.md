# Good Company — Agent Instructions

## 1. Project Context

Good Company is an early-stage digital product focused on helping people understand and manage everyday stress through self-reflection, healthy habits, and practical tools.

The project is being developed collaboratively by designers with experience in Product Design, UX/UI, and design systems, but limited software engineering experience.

The product scope, technology stack, architecture, and visual identity are still evolving.

- Read `README.md` for the current product definition and proposed scope.
- Do not treat exploratory features as approved requirements.
- Do not assume technical or design decisions that have not been established.
- Keep the solution appropriate for a small, evolving product.

## 2. Communication Preferences

We want to understand and stay in control of what we build.

- Explain technical concepts in plain language without oversimplifying design concepts.
- Explain what terminal commands do and where to run them.
- Translate errors into understandable language and suggest clear solutions.
- Recommend one practical approach instead of overwhelming us with alternatives.
- Use numbered steps for manual setup tasks.
- Before significant or potentially destructive actions, explain the impact and whether they can be undone.
- Ask questions when missing information affects important decisions, but avoid unnecessary interruptions.
- Complete approved implementation tasks without stopping after every small change.
- Provide brief progress updates for substantial work.
- Keep explanations concise, direct, and practical.

## 3. Product & UX Principles

Good Company should help people manage stress without creating additional pressure, judgment, or unnecessary complexity.

- Prioritize clarity, simplicity, and emotional safety.
- Use supportive, neutral, and non-judgmental language.
- Avoid guilt-inducing patterns, competitive wellness mechanics, or unnecessary gamification.
- Respect user autonomy. Users should be able to skip, edit, or dismiss interactions when appropriate.
- Avoid unnecessary notifications, interruptions, and cognitive load.
- Consider accessibility and inclusive interaction patterns from the beginning.
- Treat privacy and user trust as core product requirements.
- Avoid presenting wellness insights as medical diagnoses or definitive psychological assessments.
- Do not invent health claims or imply that a feature has clinically validated benefits without supporting evidence.

When making product decisions, prioritize meaningful user value over feature quantity.

## 4. Design System & Visual Craft

Design quality is a core priority. The design system will be created from scratch and developed incrementally.

### Building the Design System

- Do not assume an existing design system, visual identity, or component library.
- Help explore and establish design principles, tokens, components, and interaction patterns as the product evolves.
- Propose visual directions when requested rather than defaulting to generic wellness aesthetics.
- Do not automatically associate stress management with pastel colors, nature imagery, or conventional meditation app patterns.
- Once design decisions are approved, treat them as the source of truth.
- Reuse established tokens and components instead of creating unnecessary variations.
- Propose extensions to the system when needed and explain their purpose.
- Document approved decisions in `docs/design-system.md`.
- Keep the design system lightweight, scalable, and appropriate for the product's current stage.

### Visual Quality & Usability

- Maintain high visual craft through thoughtful typography, composition, spacing, alignment, hierarchy, and attention to detail.
- Consider responsive behavior, accessibility, interaction feedback, and component states.
- Use semantic design tokens when established.
- Avoid hardcoded visual values when appropriate tokens already exist.
- Design reusable components with consistent variants, states, and behavior.
- Balance visual expression with usability and clarity.
- Avoid generic, template-like interfaces when a more intentional solution is appropriate.
- Use approved Figma designs and specifications as references when available.
- Identify missing specifications instead of silently inventing them.

## 5. Code Quality & Architecture

- Prioritize simple, readable, maintainable code.
- Follow existing project conventions once established.
- Avoid unnecessary frameworks, libraries, abstractions, and dependencies.
- Reuse existing functionality before introducing new implementations.
- Keep components focused and reusable.
- Separate shared UI components from product-specific features when appropriate.
- Explain significant architectural decisions before implementing them.
- Do not introduce major dependencies without approval.
- Keep code, configuration, and documentation consistent.
- Avoid overengineering for hypothetical future requirements.

## 6. Privacy, Safety & Data

Good Company may eventually handle sensitive personal wellness information.

- Collect and store only data necessary for approved functionality.
- Do not introduce analytics, tracking, third-party integrations, or external data sharing without approval.
- Never expose personal data, credentials, or API keys in source code or logs.
- Do not use real personal or health information as development or testing data.
- Use clearly fictional sample data for prototypes and tests.
- Consider appropriate access controls, secure storage, and data deletion when implementing features that handle user information.
- Flag privacy or security implications before implementing relevant features.
- Do not assume that local storage or a third-party service is automatically appropriate for sensitive data.

## 7. Collaboration & GitHub

This repository is maintained by multiple contributors.

- Verify the current project directory before modifying files.
- Inspect existing files and documentation before implementation.
- Preserve existing work and avoid unrelated modifications.
- Do not overwrite or discard another contributor's changes.
- Work within the current repository rather than creating unnecessary nested project folders.
- Prefer feature branches and Pull Requests for collaborative development.
- Use clear, descriptive commit messages.
- Do not commit, push, merge, delete branches, or discard changes without explicit approval.
- Never commit secrets, credentials, or environment files containing sensitive values.
- Flag potential merge conflicts or overlapping changes.

## 8. Agent Workflow

### Before Implementation

1. Read `AGENTS.md`, `README.md`, and relevant documentation.
2. Verify the current working directory.
3. Inspect existing code, components, and conventions.
4. Identify opportunities to reuse existing functionality.
5. Explain the intended approach for significant changes.
6. Confirm decisions that materially affect the product, design system, or architecture.

### During Implementation

- Stay within the approved scope.
- Preserve existing files, data, and functionality.
- Respect the tool's normal permission controls.
- Avoid unnecessary changes and repeated operations.
- Communicate important assumptions and conflicts.
- Complete the requested task without unnecessary interruptions.

### After Implementation

1. Run relevant checks and tests when available.
2. Verify the implementation against the requested behavior and design.
3. Summarize what changed.
4. Explain what was tested and what remains unverified.
5. Provide clear instructions for manual review when needed.

## 9. Documentation

Maintain documentation as the project evolves:

- `README.md` — Product overview, project status, setup, and development instructions.
- `AGENTS.md` — Shared working instructions for AI coding agents.
- `docs/design-system.md` — Approved design principles, tokens, components, and conventions, once established.

Avoid unnecessary duplication between documents.

Clearly distinguish exploratory ideas, proposed solutions, and approved decisions.

## 10. Working Principles

- Design intentionally, not generically.
- Build only what is needed.
- Prioritize user trust, privacy, and emotional safety.
- Favor consistency over unnecessary variation.
- Balance visual quality, functionality, accessibility, and technical simplicity.
- Keep decisions understandable and maintainable.
- Use AI to accelerate development without sacrificing human judgment or product quality.