// Implemented the Genkit flow for AI-powered content suggestions.

'use server';

/**
 * @fileOverview An AI agent that suggests relevant content snippets or sources as the user types.
 *
 * - suggestContent - A function that handles the content suggestion process.
 * - SuggestContentInput - The input type for the suggestContent function.
 * - SuggestContentOutput - The return type for the suggestContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestContentInputSchema = z.object({
  text: z.string().describe('The text the user is currently typing.'),
  context: z.string().optional().describe('The context of the document.'),
});
export type SuggestContentInput = z.infer<typeof SuggestContentInputSchema>;

const SuggestContentOutputSchema = z.object({
  suggestions: z.array(z.string()).describe('An array of content suggestions.'),
});
export type SuggestContentOutput = z.infer<typeof SuggestContentOutputSchema>;

export async function suggestContent(input: SuggestContentInput): Promise<SuggestContentOutput> {
  return suggestContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestContentPrompt',
  input: {schema: SuggestContentInputSchema},
  output: {schema: SuggestContentOutputSchema},
  prompt: `You are an AI assistant that suggests relevant content snippets or sources based on the user's current text input and the document context.

Current Text: {{{text}}}
Context: {{{context}}}

Provide a list of suggestions that the user can use to enhance their document. The suggestions should be concise and relevant to the current text and context.`,
});

const suggestContentFlow = ai.defineFlow(
  {
    name: 'suggestContentFlow',
    inputSchema: SuggestContentInputSchema,
    outputSchema: SuggestContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
