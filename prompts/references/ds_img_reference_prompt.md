# Good Company — Design System v0.1 experiment

> Reusable design-system implementation prompt for the Good Company repository.

## How to run

Work with the existing Good Company repository. The agent should read the project instructions and reference images automatically. Do not paste an absolute local path or create a new repository. Run the **Agent prompt** below. If Figma cannot create a new design file, provide an empty Figma Design file URL when requested.

## Agent prompt

### Project context, discovery, and safety

We are building **Good Company**, a stress-management and emotional wellbeing companion. This is a small design-to-code experiment, not a full application build.

Discover the current repository root automatically using the selected Cursor repository/workspace, Git metadata, and existing project files. **Never require a manually pasted absolute local folder path.** Read `README.md` and `AGENTS.md` at the repository root before starting, and follow their instructions. If the selected agent has no access to this repository, ask me to select it using Cursor's repository selector; do not clone it again or create nested repositories.

**Use the existing project structure instead of imposing a new one.** The current files are organized as follows:

- `AGENTS.md` and `README.md` at the repository root.
- `prompts/ds_img_reference_prompt.md` (this prompt).
- `prompts/references/reference-01.png` and `prompts/references/reference-02.png` (the authoritative visual references).
- `prototype/` (the existing application, including `index.html`, `app.js`, `styles.css`, `tokens.css`, and `fonts/`).
- `docs/` (existing documentation; use if relevant).

These paths are relative to the repository root, **not the machine's home folder**. Confirm their existence, adapt to existing files if necessary, and do not invent alternate image paths. Read the local image files directly when available; ask for attachments only if the agent genuinely cannot access them.

Make changes within this repository only. Extend the existing `prototype/` rather than creating a second app or renaming directories. Preserve unrelated files and work. Inspect Git status before changing files; do not discard existing changes. Do not commit, push, merge, or install new dependencies without approval. Keep normal permission prompts.

### Goal

Build the **smallest useful Design System v0.1** that is native and editable in Figma and reusable in code. Prioritize faithful visual translation and design craft over feature count. Keep the architecture simple and understandable.

### Visual direction — strict reference fidelity

The two screenshots at `prompts/references/reference-01.png` and `prompts/references/reference-02.png` are the **primary visual source of truth**.

**Do not reinterpret, redesign, or invent a new visual identity.** Reverse-engineer their visual language and translate it into a small reusable system. The screenshots are authoritative for the palette and visual character; the new screens may use simpler layouts.

**Colors**
- Sample the actual colors from the screenshots: deep purple, lavender, mint, light blue, and supporting neutrals.
- Record sampled HEX values and their roles (background, surface, text, accent, interactive state).
- Define primitive and semantic tokens. Do not invent a substitute palette.
- If screenshot compression or antialiasing makes a value uncertain, label it as an approximation.

**Typography and details**
- Match the expressive serif headline character and clean sans-serif supporting text, including hierarchy, scale, and weight.
- Preserve the rounded buttons/cards, spacing rhythm, proportions, and overall balance.
- Preserve the distinctive mood-character illustration language. Do not replace it with emojis, unrelated stock icons, or generic illustrations. If faithful reproduction is not feasible, report the limitation before inventing replacements.
- If the exact font cannot be identified, state the closest available alternative and why.

**Simplification**
- Simplify features and screen layouts, **not the visual identity**.
- Avoid generic AI-generated wellness dashboards and unnecessary decoration.

### Analyze before building

Inspect both screenshots and document:
- Sampled palette with HEX values and confidence/approximation notes.
- Typography choices and available alternatives.
- Spacing and radius patterns.
- Component patterns and illustration treatment.
- Proposed token names, grouped as primitives and semantics.

Use that analysis as the implementation specification; do not substitute an unrelated style direction.

### Design System foundations

Create a minimal, documented token set for:
- Colors (primitive + semantic)
- Typography (display, heading, body, label)
- Spacing
- Border radius
- Shadows only where visible and useful

Avoid hardcoded styles scattered across UI components. Avoid enterprise-scale architecture.

### Components and screens

Build only what the first experience needs:
- Primary/secondary/disabled button states
- Mood selection card with default and selected states
- Simple screen container/layout
- Progress indicator only if used

Build a mobile-first, working prototype with only two screens:
1. **Welcome** — warm introduction and primary action.
2. **How are you feeling today?** — three selectable moods: Good, So-so, Low; a visible selected state and a working Continue button.

No authentication, database, journaling, analytics, or other features.

### Native Figma implementation and destination discovery

The Figma MCP connection supports `create_session` and native editable creation via `use_figma`. **Verify those tools are actually available in this session**; do not assume that prior capability reports guarantee successful writes.

**Choose the Figma destination with as little manual setup as possible:**
1. Check whether the connected tools can create a **new Figma Design file** in my account.
2. If creation is supported and authorized, create a dedicated file named **Good Company — Design System Test**. Do not create files in a shared team or organization without confirming the destination.
3. If file creation is **not supported**, ask me **only for the URL of an empty Figma Design file** that I create. Do not ask for a local folder path.
4. Verify the destination file and edit permissions before writing. Never modify unrelated or existing design files.

Once the destination is ready:
- Create pages for **Foundations**, **Components**, and **Playground** within that file.
- Create native editable Figma variables for supported token types, with clear primitive and semantic naming.
- Create native components, variants, properties, and Auto Layout where appropriate, binding variables to supported properties.
- Build both sample screens using component instances.
- Use `use_figma` for native variables/components, not screenshots or flattened HTML imports.
- Clearly document limitations: e.g. some typography properties or effects may require styles rather than variable bindings.

If write access fails, **do not claim Figma was updated**. Finish the code and report exactly what could not be created.

### Code implementation

Inspect the existing `prototype/` implementation and update it in place; reuse `prototype/tokens.css`, `prototype/styles.css`, `prototype/app.js`, `prototype/index.html`, and existing fonts when suitable. Do not create a nested app or replace the architecture unnecessarily.

Implement matching tokens and reusable components. Keep names and values aligned with Figma wherever possible. Document the mapping and where the tokens live.

The two screens must share the same design decisions as Figma; do not create a separate visual interpretation.

### Quality and verification

Check typography, spacing, alignment, color balance, hierarchy, interaction states, contrast, and touch targets.

After building:
- Run the available project checks and report the results.
- Verify native Figma variables, components, variants, and screen instances exist and are editable.
- Compare both resulting screens against the reference screenshots and correct significant differences.
- Explain which values/components correspond between Figma and code.
- **Do not claim automatic two-way synchronization** unless it is actually implemented and tested.
- Report what was completed, what remains unverified, and how to preview locally.

Build the full limited v0.1 scope without pausing after each component. Do not ask for information that can be discovered from the selected repository, its Git metadata, project files, or connected tools. Ask only when a decision, permission, repository selection, or missing Figma destination genuinely blocks progress. Keep existing tool permission controls.

## Verification checklist

| Criterion | Result / notes |
|---|---|
| Palette matches reference images | |
| Typography matches reference images | |
| Mood illustrations faithful | |
| Figma variables native and editable | |
| Figma components/variants native and editable | |
| Code uses centralized tokens | |
| Figma/code token names and values correspond | |
| Two screens functional | |
| Visual comparison completed | |
| Known limitations | |

Matching tokens in Figma and code does **not** imply automated two-way synchronization. This prompt tests visual fidelity and token correspondence first.
