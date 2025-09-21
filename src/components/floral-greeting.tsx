"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

// CSS para la animación del SVG, inyectado directamente.
const svgStyles = `
  /* Trazos de los tallos */
  .stem {
    stroke-dasharray: 500;
    stroke-dashoffset: 500;
    animation: draw-stem 1.5s cubic-bezier(.6,0,.4,1) forwards;
  }
  .stem-1 { animation-delay: 0s; }
  .stem-2 { animation-delay: 0.1s; }
  .stem-3 { animation-delay: 0.2s; }

  /* Hojas que se despliegan */
  .leaf {
    transform-origin: bottom left;
    transform: scale(0);
    animation: unfold-leaf 1s cubic-bezier(.6,0,.4,1) forwards;
  }
  .leaf-1 { animation-delay: 0.8s; }
  .leaf-2 { animation-delay: 0.9s; }
  .leaf-3 { animation-delay: 1s; }
  .leaf-4 { animation-delay: 1.1s; }


  /* Centro de la flor */
  .center {
    transform: scale(0);
    animation: bloom-center 0.8s cubic-bezier(.5,0,.3,1.5) forwards;
  }
  .center-1 { animation-delay: 1.2s; }
  .center-2 { animation-delay: 1.3s; }
  .center-3 { animation-delay: 1.4s; }

  /* Pétalos que florecen desde el centro */
  .petal {
    transform-origin: center;
    transform: scale(0);
    animation: bloom-petal 0.7s cubic-bezier(.4,0,.2,1.2) forwards;
  }
  
  .flower-1 .petal-1 { animation-delay: 1.5s; }
  .flower-1 .petal-2 { animation-delay: 1.6s; }
  .flower-1 .petal-3 { animation-delay: 1.7s; }

  .flower-2 .petal-1 { animation-delay: 1.65s; }
  .flower-2 .petal-2 { animation-delay: 1.75s; }
  .flower-2 .petal-3 { animation-delay: 1.85s; }

  .flower-3 .petal-1 { animation-delay: 1.8s; }
  .flower-3 .petal-2 { animation-delay: 1.9s; }
  .flower-3 .petal-3 { animation-delay: 2.0s; }


  @keyframes draw-stem {
    to { stroke-dashoffset: 0; }
  }
  @keyframes unfold-leaf {
    to { transform: scale(1); }
  }
  @keyframes bloom-center {
    to { transform: scale(1); }
  }
  @keyframes bloom-petal {
    0% { transform: scale(0) rotate(-30deg); }
    100% { transform: scale(1) rotate(0deg); }
  }
`;

// Componente de la animación de flores
const FlowerAnimation = ({ animationKey }: { animationKey: number }) => (
  <svg
    key={animationKey}
    viewBox="0 0 400 400"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    aria-label="Un ramo de flores floreciendo"
    role="img"
  >
    <g transform="translate(20, 20)">
      {/* --- Flor 1 (Izquierda) --- */}
      <g className="flower-1">
        <path d="M 120,350 C 120,250 150,200 180,150" fill="none" stroke="hsl(var(--foreground) / 0.6)" strokeWidth="2" strokeLinecap="round" className="stem stem-1" />
        <path d="M 162,220 C 150,230 140,250 145,260" fill="hsl(var(--primary) / 0.2)" stroke="hsl(var(--foreground) / 0.4)" strokeWidth="1.5" className="leaf leaf-1" />
        <g transform="translate(180, 150) rotate(-15)">
          <circle cx="0" cy="0" r="6" fill="hsl(var(--primary))" className="center center-1" />
          <path d="M 0,-5 C 15,-25 15,-25 0,-40 C -15,-25 -15,-25 0,-5" fill="hsl(var(--primary) / 0.8)" stroke="hsl(var(--primary-foreground) / 0.5)" strokeWidth="1" className="petal petal-1" transform="rotate(0)" />
          <path d="M 0,-5 C 15,-25 15,-25 0,-40 C -15,-25 -15,-25 0,-5" fill="hsl(var(--primary) / 0.8)" stroke="hsl(var(--primary-foreground) / 0.5)" strokeWidth="1" className="petal petal-2" transform="rotate(120)" />
          <path d="M 0,-5 C 15,-25 15,-25 0,-40 C -15,-25 -15,-25 0,-5" fill="hsl(var(--primary) / 0.8)" stroke="hsl(var(--primary-foreground) / 0.5)" strokeWidth="1" className="petal petal-3" transform="rotate(240)" />
        </g>
      </g>

      {/* --- Flor 2 (Central) --- */}
      <g className="flower-2">
        <path d="M 200,350 C 200,200 200,150 200,100" fill="none" stroke="hsl(var(--foreground) / 0.6)" strokeWidth="2" strokeLinecap="round" className="stem stem-2" />
        <path d="M 200,250 C 180,260 180,280 195,290" fill="hsl(var(--primary) / 0.2)" stroke="hsl(var(--foreground) / 0.4)" strokeWidth="1.5" className="leaf leaf-2" />
        <path d="M 200,200 C 220,210 220,230 205,240" fill="hsl(var(--primary) / 0.2)" stroke="hsl(var(--foreground) / 0.4)" strokeWidth="1.5" className="leaf leaf-3" />
        <g transform="translate(200, 100) scale(1.2)">
          <circle cx="0" cy="0" r="6" fill="hsl(var(--primary))" className="center center-2" />
          <path d="M 0,-5 C 15,-25 15,-25 0,-40 C -15,-25 -15,-25 0,-5" fill="hsl(var(--primary) / 0.8)" stroke="hsl(var(--primary-foreground) / 0.5)" strokeWidth="1" className="petal petal-1" transform="rotate(30)" />
          <path d="M 0,-5 C 15,-25 15,-25 0,-40 C -15,-25 -15,-25 0,-5" fill="hsl(var(--primary) / 0.8)" stroke="hsl(var(--primary-foreground) / 0.5)" strokeWidth="1" className="petal petal-2" transform="rotate(150)" />
          <path d="M 0,-5 C 15,-25 15,-25 0,-40 C -15,-25 -15,-25 0,-5" fill="hsl(var(--primary) / 0.8)" stroke="hsl(var(--primary-foreground) / 0.5)" strokeWidth="1" className="petal petal-3" transform="rotate(270)" />
        </g>
      </g>

      {/* --- Flor 3 (Derecha) --- */}
      <g className="flower-3">
        <path d="M 280,350 C 280,250 250,200 220,150" fill="none" stroke="hsl(var(--foreground) / 0.6)" strokeWidth="2" strokeLinecap="round" className="stem stem-3" />
        <path d="M 238,220 C 250,230 260,250 255,260" fill="hsl(var(--primary) / 0.2)" stroke="hsl(var(--foreground) / 0.4)" strokeWidth="1.5" className="leaf leaf-4" />
        <g transform="translate(220, 150) rotate(15)">
           <circle cx="0" cy="0" r="6" fill="hsl(var(--primary))" className="center center-3" />
          <path d="M 0,-5 C 15,-25 15,-25 0,-40 C -15,-25 -15,-25 0,-5" fill="hsl(var(--primary) / 0.8)" stroke="hsl(var(--primary-foreground) / 0.5)" strokeWidth="1" className="petal petal-1" transform="rotate(60)" />
          <path d="M 0,-5 C 15,-25 15,-25 0,-40 C -15,-25 -15,-25 0,-5" fill="hsl(var(--primary) / 0.8)" stroke="hsl(var(--primary-foreground) / 0.5)" strokeWidth="1" className="petal petal-2" transform="rotate(180)" />
          <path d="M 0,-5 C 15,-25 15,-25 0,-40 C -15,-25 -15,-25 0,-5" fill="hsl(var(--primary) / 0.8)" stroke="hsl(var(--primary-foreground) / 0.5)" strokeWidth="1" className="petal petal-3" transform="rotate(300)" />
        </g>
      </g>
    </g>
    <style>{svgStyles}</style>
  </svg>
);

const Poem = ({ show }: { show: boolean }) => (
  <blockquote className={`mt-4 space-y-2 transition-all duration-1000 ease-in-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
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
      setShowPoem(false);
      // Forzar un reflow para reiniciar la animación del poema
      setTimeout(() => {
        setAnimationKey(prevKey => prevKey + 1);
        setIsBlooming(true);
        // El poema se muestra después de que la animación de las flores casi ha terminado
        setTimeout(() => setShowPoem(true), 2200);
      }, 50)
  };

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-background p-6 text-center overflow-hidden">
      <div className="w-full max-w-md space-y-4">
        <header>
          <h1 className="font-headline text-5xl text-foreground/90 sm:text-6xl md:text-7xl">
            Para la flor más bella, Antonella
          </h1>
        </header>

        <main className="flex flex-col items-center justify-center">
          <div className="w-full h-80 -mb-4">
            {isBlooming && <FlowerAnimation animationKey={animationKey} />}
          </div>

          <Button
            onClick={handleBloom}
            size="lg"
            className="rounded-full bg-primary px-8 py-6 text-lg font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 focus-visible:ring-primary z-10"
          >
            {isBlooming ? "Florecer de nuevo" : "Toca para florecer"}
          </Button>
          
          <div className="min-h-[120px]">
            {isBlooming && <Poem show={showPoem} />}
          </div>
        </main>
      </div>
    </div>
  );
}
