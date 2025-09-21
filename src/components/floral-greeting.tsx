"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { generateUniqueFloralAnimation } from "@/ai/flows/generate-unique-floral-animation";
import { baseFloralAnimation } from "@/lib/base-floral-animation";

// Total duration for CSS animations in the SVG + a small buffer
const POEM_DELAY_MS = 3500; 

export default function FloralGreeting() {
  const [isLoading, setIsLoading] = useState(false);
  const [isBlooming, setIsBlooming] = useState(false);
  const [showPoem, setShowPoem] = useState(false);
  const [animationSvg, setAnimationSvg] = useState(baseFloralAnimation);
  const { toast } = useToast();

  const handleBloom = async () => {
    if (isLoading || isBlooming) return;

    setIsLoading(true);
    
    try {
      const result = await generateUniqueFloralAnimation({ baseAnimation: baseFloralAnimation });
      setAnimationSvg(result.uniqueAnimation);
    } catch (error) {
      console.error("Error generating unique animation:", error);
      // Fallback to base animation which is already in state
      toast({
        title: "Una flor para ti",
        description: "Disfruta de esta animación. La próxima será aún más especial.",
        variant: 'default',
      });
    } finally {
      setIsLoading(false);
      setIsBlooming(true);
      setTimeout(() => {
          setShowPoem(true);
      }, POEM_DELAY_MS);
    }
  };

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center p-6 text-center overflow-hidden">
      <div className="w-full max-w-lg space-y-6">
        <header>
          <h1 className="font-headline text-5xl text-foreground/90 sm:text-6xl md:text-7xl">
            Para la flor más bella, Antonella
          </h1>
        </header>

        <main className="flex min-h-[350px] flex-col items-center justify-center">
          {!isBlooming ? (
            <div className="animate-fade-in flex flex-col items-center gap-4">
               <p className="text-lg text-foreground/70">21 de Septiembre</p>
               <Button
                onClick={handleBloom}
                disabled={isLoading}
                size="lg"
                className="rounded-full bg-primary px-8 py-6 text-lg font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 focus-visible:ring-primary"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Creando magia...
                  </>
                ) : (
                  "Toca para florecer"
                )}
              </Button>
            </div>
          ) : (
            <div className="w-full">
              {animationSvg && (
                <div
                  key={animationSvg} // Re-triggers the component and CSS animation
                  className="animate-fade-in h-72 w-full"
                  dangerouslySetInnerHTML={{ __html: animationSvg }}
                />
              )}

              {showPoem && (
                <blockquote className={`mt-4 animate-fade-in space-y-2`}>
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
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
