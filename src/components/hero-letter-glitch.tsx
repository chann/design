import { useEffect, useRef, useState } from "react";

type Rgb = readonly [number, number, number];

type Glyph = {
  character: string;
  color: Rgb;
  colorMix: number;
  opacity: number;
  targetColor: Rgb;
  targetOpacity: number;
};

const characters = Array.from("DESIGN.MD{}[]<>01:/+-=_");
const fallbackPalette: Rgb[] = [
  [0, 102, 204],
  [91, 112, 136],
  [171, 181, 193],
];
const characterWidth = 13;
const characterHeight = 22;
const fontSize = 13;
const glitchInterval = 110;

function randomItem<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)];
}

function parseHexColor(value: string): Rgb | null {
  const match = value.trim().match(/^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
  if (!match) return null;

  return [
    Number.parseInt(match[1], 16),
    Number.parseInt(match[2], 16),
    Number.parseInt(match[3], 16),
  ];
}

function mixColor(from: Rgb, to: Rgb, amount: number): Rgb {
  return [
    Math.round(from[0] + (to[0] - from[0]) * amount),
    Math.round(from[1] + (to[1] - from[1]) * amount),
    Math.round(from[2] + (to[2] - from[2]) * amount),
  ];
}

function readPalette(element: HTMLElement) {
  const styles = getComputedStyle(element);
  const palette = [
    "--hero-glitch-primary",
    "--hero-glitch-secondary",
    "--hero-glitch-muted",
  ]
    .map((property) => parseHexColor(styles.getPropertyValue(property)))
    .filter((color): color is Rgb => color !== null);

  return palette.length === 3 ? palette : fallbackPalette;
}

// Visual behavior is informed by React Bits' Letter Glitch background:
// https://reactbits.dev/backgrounds/letter-glitch
export function HeroLetterGlitch() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;
    let glyphs: Glyph[] = [];
    let columns = 0;
    let palette = readPalette(canvas);
    let isIntersecting = true;
    let isPageVisible = !document.hidden;
    let lastFrameTime = 0;
    let lastGlitchTime = 0;

    const createGlyph = (): Glyph => {
      const color = randomItem(palette);
      const opacity = 0.18 + Math.random() * 0.38;

      return {
        character: randomItem(characters),
        color,
        colorMix: 1,
        opacity,
        targetColor: color,
        targetOpacity: opacity,
      };
    };

    const draw = () => {
      const bounds = canvas.getBoundingClientRect();
      context.clearRect(0, 0, bounds.width, bounds.height);
      context.font = `500 ${fontSize}px "SFMono-Regular", "Cascadia Code", monospace`;
      context.textBaseline = "top";

      glyphs.forEach((glyph, index) => {
        const color = mixColor(glyph.color, glyph.targetColor, glyph.colorMix);
        const opacity =
          glyph.opacity +
          (glyph.targetOpacity - glyph.opacity) * glyph.colorMix;
        const x = (index % columns) * characterWidth;
        const y = Math.floor(index / columns) * characterHeight;

        context.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${opacity})`;
        context.fillText(glyph.character, x, y);
      });
    };

    const initializeGrid = () => {
      const bounds = canvas.getBoundingClientRect();
      const width = Math.max(1, Math.round(bounds.width));
      const height = Math.max(1, Math.round(bounds.height));
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      columns = Math.ceil(width / characterWidth) + 1;
      const rows = Math.ceil(height / characterHeight) + 1;
      glyphs = Array.from({ length: columns * rows }, createGlyph);
      draw();
      setIsReady(true);
    };

    const updateGlyphs = () => {
      const updateCount = Math.max(1, Math.floor(glyphs.length * 0.018));

      for (let index = 0; index < updateCount; index += 1) {
        const glyph = randomItem(glyphs);
        const currentColor = mixColor(
          glyph.color,
          glyph.targetColor,
          glyph.colorMix,
        );

        glyph.character = randomItem(characters);
        glyph.color = currentColor;
        glyph.opacity =
          glyph.opacity +
          (glyph.targetOpacity - glyph.opacity) * glyph.colorMix;
        glyph.targetColor = randomItem(palette);
        glyph.targetOpacity = 0.18 + Math.random() * 0.38;
        glyph.colorMix = 0;
      }
    };

    const stopAnimation = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    };

    const animate = (time: number) => {
      const delta = lastFrameTime ? Math.min(time - lastFrameTime, 64) : 16;
      lastFrameTime = time;

      if (time - lastGlitchTime >= glitchInterval) {
        updateGlyphs();
        lastGlitchTime = time;
      }

      glyphs.forEach((glyph) => {
        glyph.colorMix = Math.min(1, glyph.colorMix + delta / 420);
      });
      draw();
      animationFrame = window.requestAnimationFrame(animate);
    };

    const syncAnimation = () => {
      stopAnimation();
      lastFrameTime = 0;

      if (reducedMotion.matches || !isIntersecting || !isPageVisible) {
        draw();
        return;
      }

      animationFrame = window.requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(() => {
      initializeGrid();
      syncAnimation();
    });
    resizeObserver.observe(canvas);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isIntersecting = entry.isIntersecting;
      syncAnimation();
    });
    intersectionObserver.observe(canvas);

    const onVisibilityChange = () => {
      isPageVisible = !document.hidden;
      syncAnimation();
    };
    const onMotionChange = () => syncAnimation();
    document.addEventListener("visibilitychange", onVisibilityChange);
    reducedMotion.addEventListener("change", onMotionChange);

    const themeObserver = new MutationObserver(() => {
      palette = readPalette(canvas);
      initializeGrid();
      syncAnimation();
    });
    themeObserver.observe(document.documentElement, {
      attributeFilter: ["class"],
      attributes: true,
    });

    initializeGrid();
    syncAnimation();

    return () => {
      stopAnimation();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      themeObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      reducedMotion.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <figure
      className={`hero-letter-glitch landing-enter landing-enter-late${isReady ? " is-ready" : ""}`}
    >
      <canvas
        aria-hidden="true"
        className="hero-letter-canvas"
        ref={canvasRef}
        tabIndex={-1}
      />
      <div aria-hidden="true" className="hero-letter-content">
        <div className="hero-letter-meta">
          <span>Comfort / system 01</span>
          <span className="hero-letter-status">Living spec</span>
        </div>
        <div className="hero-letter-lockup">
          <span>Shared interface language</span>
          <strong>
            DESIGN<span>.md</span>
          </strong>
        </div>
        <div className="hero-letter-foundations">
          <span>Color</span>
          <span>Type</span>
          <span>Space</span>
          <span>Motion</span>
        </div>
      </div>
      <figcaption className="sr-only">
        A living field of DESIGN.md characters resolving around one shared
        interface specification.
      </figcaption>
    </figure>
  );
}
