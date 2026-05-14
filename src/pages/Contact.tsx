import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Send, Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// ১. ফর্ম ভ্যালিডেশন স্কিমা
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  botcheck: z.boolean().optional(), 
});

export default function Contact() {
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      botcheck: false,
    },
  });

  // এই ফাংশনটি মেসেজ পাঠাবে এবং আসল এরর ধরবে
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // স্প্যাম প্রোটেকশন চেক
    if (values.botcheck) return; 

    setIsSending(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "ce00ed30-20ca-4c28-901d-c878d2ca8d34", // তোমার নতুন Key বসানো হয়েছে
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
          from_name: "Studio Inova Contact Form"
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast({
          title: "Success!",
          description: "Message sent! Check your studioinova.official@gmail.com inbox.",
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Web3Forms Error",
          description: result.message || "Submission failed from server.",
        });
        console.error("API Error Response:", result);
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Connection Blocked!",
        description: "Adblocker বা Network issue. কনসোল চেক করো।",
      });
      console.error("Network Error:", error);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="pt-24 min-h-screen bg-background animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground italic">"Simple solutions for complex problems."</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details Card */}
          <div className="p-8 border border-border/40 rounded-3xl bg-card shadow-sm text-left">
            <h2 className="text-2xl font-bold mb-8 text-foreground border-b pb-4">Contact Details</h2>
            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10">
                  <Mail className="text-primary w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Email</h4>
                  <p className="text-foreground font-semibold">studioinova.official@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 border border-border/40 rounded-3xl bg-card shadow-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 text-left">

                {/* Hidden Spam Protection Field */}
                <input 
                  type="checkbox" 
                  className="hidden" 
                  style={{display:'none'}} 
                  {...form.register("botcheck")} 
                />

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-foreground">Full Name</FormLabel>
                      <FormControl><Input placeholder="Your Name" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-foreground">Email</FormLabel>
                      <FormControl><Input type="email" placeholder="your@email.com" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-foreground">Subject</FormLabel>
                      <FormControl><Input placeholder="How can we help?" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Describe your project..." className="min-h-[140px] resize-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* UX Improvement: Loading State Button */}
                <Button 
                  type="submit" 
                  disabled={isSending}
                  className="w-full h-14 bg-primary text-white font-bold rounded-xl flex gap-3 items-center justify-center text-lg transition-all active:scale-[0.98]"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={20} />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}