import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MessageSquare, Zap } from "lucide-react";

export function Cta() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-radial from-primary/5 to-transparent opacity-60" />
        <div className="absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      </div>
      
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center justify-center gap-2 rounded-full bg-muted px-4 py-1 text-sm">
            <Zap className="h-4 w-4 text-primary" />
            <span>Ready to transform your business?</span>
          </div>
          
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Start using Nexus AI today
          </h2>
          
          <p className="mb-10 text-xl text-muted-foreground">
            Join thousands of businesses already leveraging our AI agents to automate workflows,
            gain insights, and make better decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button size="lg" variant="outline" className="px-8">
              <Mail className="mr-2 h-4 w-4" />
              Contact Sales
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span>24/7 Support</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              <span>Free 14-day trial</span>
            </div>
            
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L14.5 9H22L16 13.5L18.5 20.5L12 16L5.5 20.5L8 13.5L2 9H9.5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>No credit card required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}