import type { PropsWithChildren, ReactNode } from "react";

export interface LessonPageProps extends PropsWithChildren {
  title?: ReactNode;
  subtitle?: ReactNode;
  className?: string;
}

export function LessonPage({
  title,
  subtitle,
  className,
  children,
}: LessonPageProps) {
  return (
    <main
      role="main"
      lang="en"
      className={className}
      style={{
        minHeight: "100vh",
        background: "var(--ep-color-background, #FBF7EE)",
        color: "var(--ep-color-text, #1A2B22)",
        fontFamily: "var(--ep-font-body, Andika, sans-serif)",
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: "48px 24px 80px",
        }}
      >
        {(title || subtitle) && (
          <header
            style={{
              marginBottom: 48,
            }}
          >
            {subtitle && (
              <p
                style={{
                  fontFamily: "var(--ep-font-mono, IBM Plex Mono, monospace)",
                  fontSize: 12,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#A6802C",
                  marginBottom: 8,
                }}
              >
                {subtitle}
              </p>
            )}

            {title && (
              <h1
                style={{
                  fontFamily:
                    "var(--ep-font-display, Fraunces, serif)",
                  fontWeight: 800,
                  fontSize: "clamp(2.5rem,5vw,4rem)",
                  lineHeight: 1.05,
                  color: "#0E3D2E",
                  margin: 0,
                }}
              >
                {title}
              </h1>
            )}
          </header>
        )}

        {children}
      </div>
    </main>
  );
}
