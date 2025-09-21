"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

// CSS para la animación del SVG, inyectado directamente.
const svgStyles = `
  .stem {
    stroke-dasharray: 420;
    stroke-dashoffset: 420;
    animation: draw-stem 1.1s cubic-bezier(.2,.8,.2,1) forwards;
  }
  .stem-1 { animation-delay: 0.1s; }
  .stem-2 { animation-delay: 0.25s; }
  .stem-3 { animation-delay: 0.4s; }

  .leaf {
    opacity: 0;
    transform-origin: center;
    transform-box: fill-box;
    animation: unfold-leaf 0.6s ease-out forwards;
  }
  .leaf-1 { animation-delay: 0.5s; }
  .leaf-2 { animation-delay: 0.65s; }
  .leaf-3 { animation-delay: 0.8s; }

  .petal {
    transform: scale(0);
    opacity: 0;
    transform-origin: center;
    transform-box: fill-box;
    animation: bloom-petal 0.55s cubic-bezier(.15,.8,.25,1) forwards;
  }
  .center {
    transform: scale(0);
    opacity: 0;
    transform-origin: center;
    transform-box: fill-box;
    animation: center-pulse 1s ease-out forwards;
    animation-delay: 1.38s;
  }

  /* Delays para la animación escalonada de los pétalos */
  .p1 { animation-delay: 0.9s; }
  .p2 { animation-delay: 1.02s; }
  .p3 { animation-delay: 1.14s; }
  .p4 { animation-delay: 1.26s; }
  
  @keyframes draw-stem {
    to { stroke-dashoffset: 0; }
  }
  @keyframes unfold-leaf {
    to { opacity: 1; }
  }
  @keyframes bloom-petal {
    to { transform: scale(1); opacity: 1; }
  }
  @keyframes center-pulse {
    0% { transform: scale(0.6); opacity: 0; }
    60% { transform: scale(1.12); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }
`;

// Componente de la animación de flores
const FlowerAnimation = ({ animationKey }: { animationKey: number }) => (
  <svg
    key={animationKey}
    viewBox="0 0 360 360"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    aria-label="Flores floreciendo"
    role="img"
  >
    <defs>
      <linearGradient id="bgGrad" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="hsl(var(--background))" />
        <stop offset="100%" stopColor="hsl(var(--secondary))" />
      </linearGradient>
      <clipPath id="circleCrop">
        <circle cx="180" cy="170" r="150" />
      </clipPath>
    </defs>

    <rect width="100%" height="100%" fill="url(#bgGrad)" />

    <g clipPath="url(#circleCrop)" transform="translate(0,10)">
      {/* Tallo izquierdo */}
      <g>
        <path d="M105 320 C110 260, 120 220, 145 185" fill="none" stroke="#90be9d" strokeWidth="3" strokeLinecap="round" className="stem stem-1" />
        <path d="M125 260 C138 248, 148 248, 160 260 C148 254,138 256,125 260" fill="#cde9c9" className="leaf leaf-1" />
        <g transform="translate(145 185)">
          <ellipse cx="0" cy="-8" rx="12" ry="22" className="petal p1" fill="#FCE883" stroke="#f0c84a" strokeWidth="0.8" />
          <ellipse cx="12" cy="2" rx="12" ry="22" transform="rotate(45)" className="petal p2" fill="#FCE883" stroke="#f0c84a" strokeWidth="0.8"/>
          <ellipse cx="-12" cy="2" rx="12" ry="22" transform="rotate(-45)" className="petal p3" fill="#FCE883" stroke="#f0c84a" strokeWidth="0.8"/>
          <ellipse cx="0" cy="14" rx="12" ry="22" transform="rotate(180)" className="petal p4" fill="#FCE883" stroke="#f0c84a" strokeWidth="0.8"/>
          <circle cx="0" cy="0" r="7" className="center" fill="#FFB9B9" />
        </g>
      </g>
      {/* Tallo central */}
      <g>
        <path d="M180 320 C180 260, 182 220, 200 180" fill="none" stroke="#90be9d" strokeWidth="3" strokeLinecap="round" className="stem stem-2" />
        <path d="M190 245 C205 230, 220 232, 230 248 C215 238,205 240,190 250" fill="#cde9c9" className="leaf leaf-2" />
        <g transform="translate(200 180)">
          <ellipse cx="0" cy="-8" rx="14" ry="26" className="petal p1" fill="#FCE883" stroke="#f0c84a" strokeWidth="0.8"/>
          <ellipse cx="14" cy="2" rx="14" ry="26" transform="rotate(45)" className="petal p2" fill="#FCE883" stroke="#f0c84a" strokeWidth="0.8"/>
          <ellipse cx="-14" cy="2" rx="14" ry="26" transform="rotate(-45)" className="petal p3" fill="#FCE883" stroke="#f0c84a" strokeWidth="0.8"/>
          <ellipse cx="0" cy="16" rx="14" ry="26" transform="rotate(180)" className="petal p4" fill="#FCE883" stroke="#f0c84a" strokeWidth="0.8"/>
          <circle cx="0" cy="0" r="8" className="center" fill="#FFB9B9" />
        </g>
      </g>
      {/* Tallo derecho */}
      <g>
        <path d="M255 320 C250 260, 248 220, 230 195" fill="none" stroke="#90be9d" strokeWidth="3" strokeLinecap="round" className="stem stem-3" />
        <path d="M235 240 C222 228, 212 230, 200 242 C215 236,225 238,235 240" fill="#cde9c9" className="leaf leaf-3" />
        <g transform="translate(230 195)">
          <ellipse cx="0" cy="-8" rx="11" ry="20" className="petal p1" fill="#FCE883" stroke="#f0c84a" strokeWidth="0.8"/>
          <ellipse cx="11" cy="2" rx="11" ry="20" transform="rotate(45)" className="petal p2" fill="#FCE883" stroke="#f0c84a" strokeWidth="0.8"/>
          <ellipse cx="-11" cy="2" rx="11" ry="20" transform="rotate(-45)" className="petal p3" fill="#FCE883" stroke="#f0c84a" strokeWidth="0.8"/>
          <ellipse cx="0" cy="13" rx="11" ry="20" transform="rotate(180)" className="petal p4" fill="#FCE883" stroke="#f0c84a" strokeWidth="0.8"/>
          <circle cx="0" cy="0" r="6.5" className="center" fill="#FFB9B9" />
        </g>
      </g>
    </g>
    <style>{svgStyles}</style>
  </svg>
);

const Poem = ({ show }: { show: boolean }) => (
  <blockquote className={`mt-4 space-y-2 transition-all duration-700 ease-in-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
    <p className="text-lg italic text-foreground/80 md:text-xl">
      "En cada pétalo nace la esperanza,
      <br />
      en cada brisa florece el amor,
      <br />
      y en tu sonrisa, Antonella,
      <br />
      la primavera encuentra su color."
    </p>
  </blockquote>
);

export default function FloralGreeting() {
  const [animationKey, setAnimationKey] = useState(0);
  const [isBlooming, setIsBlooming] = useState(false);
  const [showPoem, setShowPoem] = useState(false);

  const handleBloom = () => {
    if (isBlooming) {
      // Reiniciar animación
      setShowPoem(false);
      setAnimationKey(prevKey => prevKey + 1);
      setTimeout(() => setShowPoem(true), 1800); // Sincronizado con el final de la animación
    } else {
      // Primera vez
      setIsBlooming(true);
      setTimeout(() => setShowPoem(true), 1800);
    }
  };

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-background p-6 text-center overflow-hidden">
      <div className="w-full max-w-md space-y-6">
        <header>
          <h1 className="font-headline text-5xl text-foreground/90 sm:text-6xl md:text-7xl">
            Para la flor más bella, Antonella
          </h1>
        </header>

        <main className="flex min-h-[420px] flex-col items-center justify-center">
          <div className="w-full h-80 mb-4 rounded-lg overflow-hidden">
            {isBlooming && <FlowerAnimation animationKey={animationKey} />}
          </div>

          <Button
            onClick={handleBloom}
            size="lg"
            className="rounded-full bg-primary px-8 py-6 text-lg font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 focus-visible:ring-primary"
          >
            {isBlooming ? "Florecer de nuevo" : "Toca para florecer"}
          </Button>

          {isBlooming && <Poem show={showPoem} />}
        </main>
      </div>
    </div>
  );
}
