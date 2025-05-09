// src/ai/schemas/contact-form-schemas.ts
import { z } from 'zod';

export const ContactFormInputSchema = z.object({
  name: z.string().describe("The name of the person sending the message."),
  email: z.string().email().describe("The email address of the sender."),
  message: z.string().describe("The message content from the contact form."),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

export const PreparedEmailSchema = z.object({
    to: z.string(),
    from: z.string(),
    subject: z.string(),
    body: z.string(),
  }).describe("The prepared email content.");
export type PreparedEmail = z.infer<typeof PreparedEmailSchema>;

export const ContactFormOutputSchema = z.object({
  success: z.boolean().describe("Indicates whether the email preparation was successful."),
  statusMessage: z.string().describe("A message indicating the status of the operation."),
  preparedEmail: PreparedEmailSchema.optional(),
});
export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;
