# Good Company — Design System v0.1

**Status: experiment.** This is not an approved product design system. `AGENTS.md` says approved decisions belong here; this file records an exploratory pass so it can be compared, kept, or discarded. Do not treat the tokens below as locked.

There is no automatic sync between Figma and code. The same names and values were written in both places and then checked by hand.

## Source

Visual source: `prompts/screen1.png` and `prompts/screen2.png`.

Figma file: [GC-DS](https://www.figma.com/design/lljTAwf5Gk7VMjaWrLN1WL/GC-DS). Pages: Foundations, Components, Playground.

Code: `prototype/tokens.css`, `prototype/styles.css`, `prototype/index.html`, `prototype/app.js`.

## Conflict with project instructions

The repository has no approved stack, and `AGENTS.md` says not to add dependencies without approval. The prototype is static HTML, CSS, and JavaScript. Nothing was installed with a package manager. Fraunces and Nunito Sans font files are vendored under `prototype/fonts/` (SIL Open Font License) so the preview does not call a font service.

## Color

Sampled from the screenshots. Values that moved slightly between neighboring pixels because of compression are marked as approximations.

| Token | Hex | Role | Confidence |
|---|---|---|---|
| `color/purple/900` | `#312549` | Headlines, primary button | High |
| `color/purple/500` | `#7C56BE` | Heart, progress knob, selected stroke | High |
| `color/lavender/100` | `#ECE5FC` | Wash, top left | Slight compression |
| `color/lavender/50` | `#F7F5FD` | Canvas, button label | High |
| `color/mint/100` | `#DDEFEE` | Wash, top right | Slight compression |
| `color/mint/300` | `#B4E5D5` | Good mood | High |
| `color/peach/300` | `#F5CEB0` | So-so mood | High |
| `color/blue/300` | `#AFD8F6` | Low mood | High |
| `color/neutral/0` | `#FBFBFE` | Card surface | Near-white approximation |
| `color/neutral/500` | `#656071` | Supporting text | High |
| `color/neutral/400` | `#8888A2` | Disabled button | Approximation |

Semantic tokens alias those primitives. One mode only: `Light`. A dark theme was not in the references.

| Semantic | Alias |
|---|---|
| `color/bg/canvas` | `color/lavender/50` |
| `color/bg/wash-start` | `color/lavender/100` |
| `color/bg/wash-end` | `color/mint/100` |
| `color/bg/surface` | `color/neutral/0` |
| `color/text/primary` | `color/purple/900` |
| `color/text/secondary` | `color/neutral/500` |
| `color/text/inverse` | `color/lavender/50` |
| `color/action/primary` | `color/purple/900` |
| `color/action/disabled` | `color/neutral/400` |
| `color/action/secondary` | `color/purple/900` |
| `color/accent` | `color/purple/500` |
| `color/mood/good` | `color/mint/300` |
| `color/mood/soso` | `color/peach/300` |
| `color/mood/low` | `color/blue/300` |
| `color/border/selected` | `color/purple/500` |

Contrast against the canvas `#F7F5FD`: primary text 13.0:1, secondary text 5.6:1. Inverse text on the primary button is about 13:1. Inverse text on the disabled button is about 3.2:1, which misses WCAG AA for normal text (4.5:1). The disabled color is kept so it matches the reference.

## Typography

The screenshot does not name its fonts. In this Figma file, **Fraunces SemiBold** is the closest soft serif to the headlines, and **Nunito Sans** is the closest rounded sans for supporting text and labels. Both are available in Figma. The prototype uses the same families from local font files.

Display and Heading are both 44px because the two reference headlines share one scale. Body is 18px. Label is 16px semibold.

In Figma these are text styles (`Display`, `Heading`, `Body`, `Label`). Their font sizes are bound to `type/display-size`, `type/heading-size`, `type/body-size`, and `type/label-size`. Font family is also stored as `type/font-display` and `type/font-body`. Weight and line height live on the text styles, not as variables.

## Spacing, radius, shadow

Spacing is an estimated 8 / 12 / 16 / 24 / 32 / 48 scale (`space/2` through `space/8`). It is not a measured spec.

`radius/card` is 28. `radius/pill` is 999.

`Shadow/card` is an effect style, not a variable. Figma cannot store a shadow as a variable. The blur is an approximation of the soft card shadow in the screenshots. The CSS copy is `--shadow-card`.

## Components

| Figma | Code |
|---|---|
| `Button` variants `Style` × `State` | `.button--primary`, `.button--secondary`, `:disabled` |
| `Mood card` variants `Mood` × `State` | `.mood` radios, selected with `.mood:has(input:checked)` |
| `Icon button` | `.icon-button` |
| `Progress` | `.progress` |
| `Screen` | `.screen` |

Buttons, cards, the screen shell, and progress use auto layout and variable bindings for fill, text color, radius, and padding. Mood illustration colors inside the SVG use the same hex values as the mood tokens. The plugin could not keep a text property linked without forcing every variant to the same label, so each variant carries its own label text. Instance text can still be overridden directly.

The mood characters are simplified vectors in the same soft blob-and-face language as the references. They are not the original artwork. The welcome illustration of a person, cards, and heart was not redrawn.

## Screens

Playground frames, built from component instances:

- Welcome
- Feeling — nothing selected (Continue disabled)
- Feeling — Good selected (Continue enabled)

The code prototype has the same two screens. Get started and Skip open the feeling screen. A mood enables Continue. Continue only confirms the choice on the page. Nothing is stored. Back returns to Welcome. The progress label says 1/3 because the reference does; steps 2 and 3 are not part of this prototype.

## Name mapping

Figma slashes become CSS hyphens: `color/text/primary` → `--color-text-primary`. Semantic CSS variables point at the primitive variables, matching the Figma aliases.
