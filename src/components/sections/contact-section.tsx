"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { sendContactEmail } from '@/services/email-service';
import type { ContactFormInput } from '@/ai/schemas/contact-form-schemas';


const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, {
    message: "Message must not exceed 500 characters.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: 'onChange', // Validate on change for immediate feedback
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    try {
      // Cast to ContactFormInput as the schemas are compatible for the service call
      const result = await sendContactEmail(data as ContactFormInput);

      if (result.success) {
        toast({
          title: "Message Processed!",
          description: result.statusMessage || "Thanks for reaching out. Your message has been prepared.",
          className: "bg-primary text-primary-foreground",
        });
        form.reset();
      } else {
        toast({
          title: "Error Processing Message",
          description: result.statusMessage || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary"> {/* Changed to bg-secondary */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground flex items-center justify-center gap-3">
            <Mail className="h-8 w-8 text-primary" />
            Get In Touch
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </div>

        <Card className="max-w-xl mx-auto shadow-lg bg-card text-card-foreground"> {/* Ensure card has contrasting background */}
          <CardHeader>
            <CardTitle>Send Me a Message</CardTitle>
            <CardDescription>I'm always open to discussing new projects, creative ideas or opportunities.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your project or inquiry..."
                          className="resize-none"
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="text-xs">
                        {field.value.length}/500 characters
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting || !form.formState.isValid} 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  {isSubmitting ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                     <Send className="mr-2 h-4 w-4" />
                  )}
                 Send Message
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
