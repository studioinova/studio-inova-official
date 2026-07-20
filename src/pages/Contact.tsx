import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Send, Loader2, MapPin } from "lucide-react";
import { FaYoutube, FaRedditAlien, FaInstagram } from "react-icons/fa";
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
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import noaAsset from "@/assets/noa-mascot.png.asset.json";

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
  const [successOpen, setSuccessOpen] = useState(false);

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
        setSuccessOpen(true);
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
          <p className="text-lg text-muted-foreground italic">We'd love to hear your feedback and suggestions</p>
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

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10">
                  <MapPin className="text-primary w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Location</h4>
                  <p className="text-foreground font-semibold">Dhaka, Bangladesh</p>
                </div>
              </div>

              {/* Follow Us */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Follow Us</h4>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.youtube.com/channel/UClhF1qOzzLkqKdK8cWFy3Ew"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-11 h-11 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-foreground transition-all duration-300 hover:scale-110 hover:border-red-500 hover:text-red-500 hover:bg-red-500/10"
                  >
                    <FaYoutube size={22} />
                  </a>
                  <a
                    href="https://www.reddit.com/user/studio_inova/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Reddit"
                    className="w-11 h-11 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-foreground transition-all duration-300 hover:scale-110 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-500/10"
                  >
                    <FaRedditAlien size={22} />
                  </a>
                  <a
                    href="https://www.instagram.com/studioinova.official/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-11 h-11 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-foreground transition-all duration-300 hover:scale-110 hover:border-pink-500 hover:text-pink-500 hover:bg-pink-500/10"
                  >
                    <FaInstagram size={22} />
                  </a>
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

      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent className="sm:max-w-md rounded-3xl border-border/40">
          <div className="flex flex-col items-center text-center pt-2">
            <img
              src={noaAsset.url}
              alt="Noa, Studio Inova mascot"
              className="w-28 h-28 object-contain drop-shadow-[0_12px_20px_rgba(10,37,64,0.25)] select-none"
              draggable={false}
            />
            <DialogTitle className="mt-4 text-xl font-bold text-foreground">
              Message Delivered
            </DialogTitle>
            <DialogDescription className="mt-2 text-base text-muted-foreground leading-relaxed">
              Perfect! <span className="font-semibold text-foreground">Noa</span> has safely secured your message. It is now on its way directly to Sajid and the Studio Inova.
            </DialogDescription>
            <Button
              onClick={() => setSuccessOpen(false)}
              className="mt-6 h-11 px-8 bg-primary text-white font-semibold rounded-xl"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}