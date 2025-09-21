'use server';
/**
 * @fileOverview Generates a unique animated floral display for each interaction.
 *
 * - generateUniqueFloralAnimation - A function that generates a unique floral animation.
 * - GenerateUniqueFloralAnimationInput - The input type for the generateUniqueFloralAnimation function.
 * - GenerateUniqueFloralAnimationOutput - The return type for the generateUniqueFloralAnimation function.
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
  return generateUniqueFloralAnimationFlow(input);
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
    const {output} = await prompt(input);
    return output!;
  }
);
