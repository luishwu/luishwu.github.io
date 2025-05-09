'use server';
/**
 * @fileOverview A Genkit flow for processing contact form submissions and preparing an email.
 *
 * - processContactForm - A function that takes contact form data and prepares an email content.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import type { ContactFormInput, ContactFormOutput, PreparedEmail } from '@/ai/schemas/contact-form-schemas';
import { ContactFormInputSchema, ContactFormOutputSchema, PreparedEmailSchema } from '@/ai/schemas/contact-form-schemas';


const RECIPIENT_EMAIL = "luishong.wu@gmail.com";

// This is the exported wrapper function that components will call.
export async function processContactForm(input: ContactFormInput): Promise<ContactFormOutput> {
  return sendEmailFlow(input);
}

const emailPreparationPrompt = ai.definePrompt({
  name: 'prepareContactEmailPrompt',
  input: { schema: ContactFormInputSchema },
  output: { schema: z.object({
    subject: z.string().describe("A suitable subject line for the email, e.g., 'New Contact Form Submission from [Sender Name]'."),
    emailBody: z.string().describe("The formatted body of the email, including the sender's name, email, and their message."),
  })},
  prompt: `
    You are an assistant that helps prepare email content from a contact form submission.
    The email will be sent to ${RECIPIENT_EMAIL}.
    The sender's name is: {{{name}}}
    The sender's email is: {{{email}}}
    The message is:
    {{{message}}}

    Generate a concise subject line and a well-formatted email body.
    The email body should clearly present the sender's name, email, and their message.
    Start the email body with "You have received a new message from your portfolio contact form:"

    Output your response as a JSON object matching the specified output schema, containing 'subject' and 'emailBody'.
  `,
   config: {
    // Lower temperature for more deterministic output for email formatting
    temperature: 0.3,
  }
});

const sendEmailFlow = ai.defineFlow(
  {
    name: 'sendEmailFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: ContactFormOutputSchema,
  },
  async (input: ContactFormInput): Promise<ContactFormOutput> => {
    try {
      // 1. Use the LLM to prepare the email subject and body
      const llmResponse = await emailPreparationPrompt(input);
      const preparedContent = llmResponse.output;


      if (!preparedContent || !preparedContent.subject || !preparedContent.emailBody) {
        return {
          success: false,
          statusMessage: "Failed to prepare email content using AI. The AI response was incomplete.",
        };
      }

      const emailToSend: PreparedEmail = {
        to: RECIPIENT_EMAIL,
        // Using the sender's email in the "from" field might be subject to DMARC/SPF/DKIM policies.
        // For robust delivery, it's often better to send from a verified domain email (e.g., noreply@yourdomain.com)
        // and set the "Reply-To" header to the sender's email.
        // However, for this simulation, this is fine.
        from: `"${input.name}" <${input.email}>`,
        subject: preparedContent.subject,
        body: preparedContent.emailBody,
      };

      // 2. **** ACTUAL EMAIL SENDING LOGIC WOULD GO HERE ****
      // For example, using Nodemailer, SendGrid, Resend, AWS SES, etc.
      // This would typically involve calling a function from an email service module.
      // e.g., await emailService.send(emailToSend);
      //
      // Since we don't have an actual email service configured in this scope,
      // we'll log the prepared email and simulate success.
      console.log("Simulating email sending. Prepared email data:", emailToSend);


      return {
        success: true,
        statusMessage: `Your message has been processed. An email has been prepared to be sent to ${RECIPIENT_EMAIL}. Thank you for reaching out!`,
        preparedEmail: emailToSend,
      };
    } catch (error) {
      console.error("Error in sendEmailFlow:", error);
      return {
        success: false,
        statusMessage: `An error occurred while processing your message: ${error instanceof Error ? error.message : 'Unknown error'}`,
      };
    }
  }
);
