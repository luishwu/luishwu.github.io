'use client';

import { processContactForm } from '@/ai/flows/send-email-flow';
import type { ContactFormInput, ContactFormOutput } from '@/ai/schemas/contact-form-schemas';

export async function sendContactEmail(data: ContactFormInput): Promise<ContactFormOutput> {
  try {
    const result = await processContactForm(data);
    
    if (result.success) {
        console.log('Email prepared successfully by Genkit flow. Details:', result.preparedEmail);
    } else {
        console.error('Genkit flow indicated failure:', result.statusMessage);
    }
    return result; // Pass the full result from the flow
  } catch (error) {
    console.error('Failed to process contact form via Genkit flow:', error);
    // Construct a ContactFormOutput compatible error response
    return {
        success: false,
        statusMessage: error instanceof Error ? error.message : 'An unexpected error occurred in the email service.',
    };
  }
}
