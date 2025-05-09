'use server';

/**
 * @fileOverview Provides AI-powered resume analysis and feedback.
 *
 * - analyzeResume - Analyzes a resume and provides feedback.
 * - AnalyzeResumeInput - The input type for the analyzeResume function.
 * - AnalyzeResumeOutput - The return type for the analyzeResume function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeResumeInputSchema = z.object({
  resumeDataUri: z
    .string()
    .describe(
      'The resume as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' /*  */
    ),
});
export type AnalyzeResumeInput = z.infer<typeof AnalyzeResumeInputSchema>;

const AnalyzeResumeOutputSchema = z.object({
  feedback: z.string().describe('AI-powered feedback on the resume.'),
  suggestions: z.string().describe('Suggestions for improving the resume.'),
  overallScore: z
    .number()
    .describe('Overall score of the resume (out of 100).')
    .optional(),
});
export type AnalyzeResumeOutput = z.infer<typeof AnalyzeResumeOutputSchema>;

export async function analyzeResume(input: AnalyzeResumeInput): Promise<AnalyzeResumeOutput> {
  return analyzeResumeFlow(input);
}

const analyzeResumePrompt = ai.definePrompt({
  name: 'analyzeResumePrompt',
  input: {schema: AnalyzeResumeInputSchema},
  output: {schema: AnalyzeResumeOutputSchema},
  prompt: `You are an AI resume expert. Analyze the resume provided and provide feedback and suggestions for improvement.

Here is the resume: {{media url=resumeDataUri}}

Provide feedback on the content, structure, and overall effectiveness of the resume.

Include specific suggestions for improvement.

Optionally, provide an overall score for the resume (out of 100).`,
});

const analyzeResumeFlow = ai.defineFlow(
  {
    name: 'analyzeResumeFlow',
    inputSchema: AnalyzeResumeInputSchema,
    outputSchema: AnalyzeResumeOutputSchema,
  },
  async input => {
    const {output} = await analyzeResumePrompt(input);
    return output!;
  }
);
