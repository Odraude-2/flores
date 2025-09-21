"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

// CSS para la animación de la flor de loto, adaptado del CodePen
const lotusAnimationStyles = `
.lotus-container {
  width: 320px;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: fadeIn 2s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}

.lotus {
  width: 150px;
  height: 150px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: rotateLotus 20s linear infinite;
  animation-delay: 1.5s;
}

@keyframes rotateLotus {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.petal, .petal-alt {
  width: 100px;
  height: 100px;
  background: hsl(var(--primary) / 0.8);
  border-radius: 50px 0;
  position: absolute;
  box-shadow: 0 0 15px hsl(var(--primary) / 0.5);
  border: 1px solid hsl(var(--primary-foreground) / 0.2);
}

.petal {
  transform-origin: bottom left;
  animation: bloomPetal 2s ease-out forwards;
}

.petal-alt {
  background: hsl(var(--primary) / 0.6);
  transform-origin: bottom left;
  animation: bloomPetalAlt 2s ease-out forwards;
}

.petal:nth-child(1) { transform: rotate(0deg) translateX(20px); animation-delay: 0.2s; }
.petal:nth-child(2) { transform: rotate(45deg) translateX(20px); animation-delay: 0.3s; }
.petal:nth-child(3) { transform: rotate(90deg) translateX(20px); animation-delay: 0.4s; }
.petal:nth-child(4) { transform: rotate(135deg) translateX(20px); animation-delay: 0.5s; }
.petal:nth-child(5) { transform: rotate(180deg) translateX(20px); animation-delay: 0.6s; }
.petal:nth-child(6) { transform: rotate(225deg) translateX(20px); animation-delay: 0.7s; }
.petal:nth-child(7) { transform: rotate(270deg) translateX(20px); animation-delay: 0.8s; }
.petal:nth-child(8) { transform: rotate(315deg) translateX(20px); animation-delay: 0.9s; }

.petal-alt:nth-child(9) { transform: rotate(22.5deg) translateX(35px); animation-delay: 1s; }
.petal-alt:nth-child(10) { transform: rotate(67.5deg) translateX(35px); animation-delay: 1.1s; }
.petal-alt:nth-child(11) { transform: rotate(112.5deg) translateX(35px); animation-delay: 1.2s; }
.petal-alt:nth-child(12) { transform: rotate(157.5deg) translateX(35px); animation-delay: 1.3s; }
.petal-alt:nth-child(13) { transform: rotate(202.5deg) translateX(35px); animation-delay: 1.4s; }
.petal-alt:nth-child(14) { transform: rotate(247.5deg) translateX(35px); animation-delay: 1.5s; }
.petal-alt:nth-child(15) { transform: rotate(292.5deg) translateX(35px); animation-delay: 1.6s; }
.petal-alt:nth-child(16) { transform: rotate(337.5deg) translateX(35px); animation-delay: 1.7s; }

.lotus-center {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: hsl(var(--primary-foreground));
  position: absolute;
  z-index: 10;
  opacity: 0;
  transform: scale(0);
  animation: bloomCenter 1.5s ease-out 1.8s forwards;
  box-shadow: 0 0 20px 5px hsl(var(--primary));
}

.leaves {
  position: absolute;
  bottom: -40px;
  width: 250px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: -1;
}

.leaf {
  width: 100px;
  height: 50px;
  background-color: hsl(var(--foreground) / 0.5);
  border-radius: 0 50px;
  position: absolute;
  opacity: 0;
  transform-origin: bottom center;
  animation: unfoldLeaf 2s ease-out 1s forwards;
}

.leaf:nth-child(1) { transform: rotate(-30deg) translateX(-80px) scale(0); }
.leaf:nth-child(2) { transform: rotate(30deg) translateX(80px) scale(0); }
.leaf:nth-child(3) { transform: rotate(0deg) scale(0) translateY(20px); animation-delay: 1.2s; }


@keyframes bloomPetal {
  0% { transform: rotate(var(--angle)) translateX(0) scale(0); opacity: 0; }
  100% { transform: rotate(var(--angle)) translateX(20px) scale(1); opacity: 1; }
}
.petal:nth-child(1) { --angle: 0deg; }
.petal:nth-child(2) { --angle: 45deg; }
.petal:nth-child(3) { --angle: 90deg; }
.petal:nth-child(4) { --angle: 135deg; }
.petal:nth-child(5) { --angle: 180deg; }
.petal:nth-child(6) { --angle: 225deg; }
.petal:nth-child(7) { --angle: 270deg; }
.petal:nth-child(8) { --angle: 315deg; }

@keyframes bloomPetalAlt {
  0% { transform: rotate(var(--angle)) translateX(0) scale(0); opacity: 0; }
  100% { transform: rotate(var(--angle)) translateX(35px) scale(1); opacity: 1; }
}

.petal-alt:nth-child(9) { --angle: 22.5deg; }
.petal-alt:nth-child(10) { --angle: 67.5deg; }
.petal-alt:nth-child(11) { --angle: 112.5deg; }
.petal-alt:nth-child(12) { --angle: 157.5deg; }
.petal-alt:nth-child(13) { --angle: 202.5deg; }
.petal-alt:nth-child(14) { --angle: 247.5deg; }
.petal-alt:nth-child(15) { --angle: 292.5deg; }
.petal-alt:nth-child(16) { --angle: 337.5deg; }


@keyframes bloomCenter {
  from { transform: scale(0); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@keyframes unfoldLeaf {
  from { opacity: 0; transform: var(--initial-transform) scale(0); }
  to { opacity: 1; transform: var(--final-transform) scale(1); }
}

.leaf:nth-child(1) { --initial-transform: rotate(-30deg) translateX(-80px); --final-transform: rotate(-30deg) translateX(-80px); }
.leaf:nth-child(2) { --initial-transform: rotate(30deg) translateX(80px); --final-transform: rotate(30deg) translateX(80px); }
.leaf:nth-child(3) { --initial-transform: rotate(0deg) translateY(20px); --final-transform: rotate(0deg) translateY(20px); }
`;

// Componente de la animación de la flor de loto
const LotusAnimation = ({ animationKey }: { animationKey: number }) => (
  <div key={animationKey} className="lotus-container">
    <div className="lotus">
      {/* 8 pétalos principales */}
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      {/* 8 pétalos secundarios */}
      <div className="petal-alt"></div>
      <div className="petal-alt"></div>
      <div className="petal-alt"></div>
      <div className="petal-alt"></div>
      <div className="petal-alt"></div>
      <div className="petal-alt"></div>
      <div className="petal-alt"></div>
      <div className="petal-alt"></div>
      
      <div className="lotus-center"></div>
    </div>
    <ul className="leaves">
      <li className="leaf"></li>
      <li className="leaf"></li>
      <li className="leaf"></li>
    </ul>
    <style>{lotusAnimationStyles}</style>
  </div>
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
      // Forzar un reflow para reiniciar la animación
      setTimeout(() => {
        setAnimationKey(prevKey => prevKey + 1);
        setIsBlooming(true);
        // El poema aparece después de que la animación casi ha terminado
        setTimeout(() => setShowPoem(true), 2500);
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
          <div className="w-full h-80 flex items-center justify-center">
            {isBlooming && <LotusAnimation animationKey={animationKey} />}
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
