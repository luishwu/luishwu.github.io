"use client";

import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { analyzeResume, type AnalyzeResumeOutput, type AnalyzeResumeInput } from '@/ai/flows/resume-analysis';
import { Bot, Upload, Loader2, AlertCircle, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function AiFeedbackSection() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [analysisResult, setAnalysisResult] = useState<AnalyzeResumeOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Basic validation for PDF or DOCX (client-side, server should also validate)
      if (file.type === "application/pdf" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || file.type === "application/msword") {
        setResumeFile(file);
        setError(null);
      } else {
        setError("Please upload a PDF or DOCX file.");
        setResumeFile(null);
        toast({
          title: "Invalid File Type",
          description: "Please upload a PDF or DOCX file.",
          variant: "destructive",
        });
      }
    }
  };

  const handleSubmit = async () => {
    if (!resumeFile) {
      setError("Please select a resume file to analyze.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);

    try {
      const reader = new FileReader();
      reader.readAsDataURL(resumeFile);
      reader.onloadend = async () => {
        const base64data = reader.result as string;
        if (!base64data) {
            setError("Could not read file.");
            setIsLoading(false);
            return;
        }

        const input: AnalyzeResumeInput = { resumeDataUri: base64data };
        const result = await analyzeResume(input);
        setAnalysisResult(result);
        toast({
          title: "Analysis Complete",
          description: "Your resume feedback is ready.",
          variant: "default",
          className: "bg-primary text-primary-foreground",
        });
      };
      reader.onerror = () => {
        setError("Failed to read file.");
        setIsLoading(false);
      }
    } catch (err) {
      console.error("Resume analysis error:", err);
      const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred during analysis.";
      setError(errorMessage);
      toast({
        title: "Analysis Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-feedback" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground flex items-center justify-center gap-3">
            <Bot className="h-8 w-8 text-primary" />
            AI Resume Analyzer
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Get instant feedback on your resume using AI-powered analysis.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle>Upload Your Resume</CardTitle>
            <CardDescription>
              Upload your resume (PDF or DOCX) to get AI-driven suggestions for improvement.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Input
                id="resumeFile"
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="file:text-primary file:font-semibold file:bg-primary/10 file:hover:bg-primary/20 file:border-0 file:rounded-md file:px-3 file:py-1.5"
              />
              {resumeFile && <p className="text-sm text-muted-foreground">Selected file: {resumeFile.name}</p>}
            </div>
            
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button onClick={handleSubmit} disabled={isLoading || !resumeFile} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Upload className="mr-2 h-4 w-4" />
              )}
              Analyze Resume
            </Button>

            {isLoading && (
                <div className="text-center py-4">
                    <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
                    <p className="mt-2 text-muted-foreground">Analyzing your resume, please wait...</p>
                </div>
            )}

            {analysisResult && !isLoading && (
              <Card className="mt-6 bg-background">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <CheckCircle className="h-6 w-6" /> Analysis Results
                  </CardTitle>
                  {analysisResult.overallScore && (
                     <p className="text-2xl font-bold text-primary">Overall Score: {analysisResult.overallScore}/100</p>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Feedback:</h4>
                    <p className="text-sm text-muted-foreground whitespace-pre-wrap">{analysisResult.feedback}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Suggestions:</h4>
                    <p className="text-sm text-muted-foreground whitespace-pre-wrap">{analysisResult.suggestions}</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
