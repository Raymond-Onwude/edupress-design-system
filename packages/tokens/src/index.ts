export const colors = {
  forest: "#0E3D2E",
  green: "#1B7A4B",
  cream: "#FBF7EE",
  gold: "#E3A008",
  coral: "#E8663D",
  blue: "#2E7DB8",

  ink: "#1A2B22",
  muted: "#4A5A52",
  border: "#E4DCC9",
  surface: "#FFFFFF",
  surfaceSoft: "#F3F8F4",
  forestSoft: "#D9E5DC"
} as const;

export const typography = {
  display: '"Fraunces", Georgia, serif',
  heading: '"Baloo 2", system-ui, sans-serif',
  body: '"Andika", system-ui, sans-serif',
  metadata: '"IBM Plex Mono", monospace'
} as const;

export const radii = {
  small: "10px",
  medium: "12px",
  large: "18px",
  panel: "28px",
  pill: "999px"
} as const;

export const spacing = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem"
} as const;

export const shadows = {
  subtle: "0 1px 2px rgba(14, 61, 46, 0.04)",
  raised: "0 8px 20px rgba(14, 61, 46, 0.08)",
  focus: "0 0 0 3px rgba(46, 125, 184, 0.28)"
} as const;

export const motion = {
  fast: "150ms",
  normal: "250ms",
  slow: "500ms",
  easing: "cubic-bezier(0.22, 1, 0.36, 1)"
} as const;
