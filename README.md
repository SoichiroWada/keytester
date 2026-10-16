# keytester

A Vue 3 keyboard event inspector built with Vite. It preserves the original
layout, input display, keydown/keypress/keyup values, Japanese IME warnings,
focus colors, and Clear button behavior.

## Requirements

Node.js 22.22.2+ (22.x), 24.15+ (24.x), or 26+; npm.

## Setup

```sh
npm ci
```

## Development

```sh
npm run serve
```

`npm run dev` is also available.

## Validation

```sh
npm run lint
npm test
npm run build
```

Tests cover keyboard event values, input updates, IME warnings, focus colors,
and clearing/refocusing the input. Native keyboard and IME behavior should
also be checked in your target browsers. Legacy `keypress`, `keyCode`, and
`charCode` are intentionally retained for inspection.

## Production

```sh
npm run build
npm run preview
```

The previous build is preserved in `dist.legacy-2018/` (ignored by Git).

The build outputs static files to `dist/`, matching the existing Firebase
Hosting configuration. `preview` serves the build locally for inspection.
