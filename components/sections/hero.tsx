"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, BrainCircuit, Sparkles } from "lucide-react";
import { motion } from "react-motion";

export function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your email signup logic here
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-[50rem] overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-neutral-500/[0.03] bg-[center_top_-1px] dark:bg-grid-neutral-100/[0.05] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        <div className="absolute top-0 left-0 right-0 h-[40rem] bg-gradient-to-b from-background to-transparent opacity-80" />
        <div className="absolute top-[30%] -left-[10%] -right-[10%] aspect-square rounded-full bg-primary/10 blur-[128px]" />
      </div>

      <div className="container relative">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Intelligent AI for everyone</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Supercharge Your Business with
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 px-2">
              Intelligent AI
            </span>
            Agents
          </h1>
          
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
            Nexus AI provides advanced AI agents that automate tasks, generate insights,
            and help your business make better decisions. Designed for businesses of all sizes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto">
            <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2 mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-11"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" size="lg" className="px-8">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          
          <p className="mt-4 text-sm text-muted-foreground">
            Free 14-day trial · No credit card required
          </p>
          
          <div className="mt-16 relative w-full max-w-4xl mx-auto">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 blur-xl rounded-xl opacity-70"></div>
            <div className="relative z-10 rounded-xl overflow-hidden border shadow-2xl">
              <div className="bg-card/50 backdrop-blur-sm p-2 border-b">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
              </div>
              <div className="bg-card p-6 aspect-[16/9]">
                <div className="flex h-full items-center justify-center">
                  <div className="flex flex-col items-center gap-4">
                    <BrainCircuit className="h-16 w-16 text-primary" />
                    <p className="text-xl font-medium">AI Assistant Interface</p>
                    <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-muted/50 text-sm">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                      </span>
                      <span>Nexus AI is ready to assist you...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}