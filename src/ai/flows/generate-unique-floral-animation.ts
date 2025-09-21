'use server';
/**
 * @fileOverview This flow is no longer used. The new animation is client-side only.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateUniqueFloralAnimationInputSchema = z.object({
  baseAnimation: z.string().describe('The base SVG animation of the floral display.'),
});
export type GenerateUniqueFloralAnimationInput = z.infer<typeof GenerateUniqueFloralAnimationInputSchema>;

const GenerateUniqueFloralAnimationOutputSchema = z.object({
  uniqueAnimation: z.string().describe('The slightly modified SVG animation of the floral display.'),
});
export type GenerateUniqueFloralAnimationOutput = z.infer<typeof GenerateUniqueFloralAnimationOutputSchema>;

export async function generateUniqueFloralAnimation(input: GenerateUniqueFloralAnimationInput): Promise<GenerateUniqueFloralAnimationOutput> {
  // Return the base animation as this flow is not used anymore.
  return { uniqueAnimation: input.baseAnimation };
}

const prompt = ai.definePrompt({
  name: 'generateUniqueFloralAnimationPrompt',
  input: {schema: GenerateUniqueFloralAnimationInputSchema},
  output: {schema: GenerateUniqueFloralAnimationOutputSchema},
  prompt: `You are an animation expert. Given a base SVG animation of a floral display, you will subtly modify it to create a unique animation.

Base Animation: {{{baseAnimation}}}

Modify the animation in subtle ways, such as changing the timing of the animation, the colors of the flowers, or the path of the flowers. Do not make major changes to the animation. Return the modified SVG animation.

Ensure the output is still valid SVG code.`,
});

const generateUniqueFloralAnimationFlow = ai.defineFlow(
  {
    name: 'generateUniqueFloralAnimationFlow',
    inputSchema: GenerateUniqueFloralAnimationInputSchema,
    outputSchema: GenerateUniqueFloralAnimationOutputSchema,
  },
  async input => {
    // Return a dummy response as this flow is deprecated.
    return { uniqueAnimation: input.baseAnimation };
  }
);
