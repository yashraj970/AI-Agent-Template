"use client";

import Image from "next/image";
import { useState } from "react";
import { TESTIMONIAL_ITEMS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => 
      prev === 0 ? TESTIMONIAL_ITEMS.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => 
      prev === TESTIMONIAL_ITEMS.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground">
            See how businesses are transforming their operations with our AI agents.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -top-8 left-10 text-primary/10">
              <Quote className="h-20 w-20" />
            </div>
            
            <Card className="border-none shadow-lg bg-card">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-8">
                  <p className="text-xl leading-relaxed relative z-10">
                    "{TESTIMONIAL_ITEMS[activeIndex].quote}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden bg-muted">
                      <div className="relative h-full w-full">
                        <div 
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${TESTIMONIAL_ITEMS[activeIndex].avatar})` }}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-medium">{TESTIMONIAL_ITEMS[activeIndex].author}</p>
                      <p className="text-sm text-muted-foreground">
                        {TESTIMONIAL_ITEMS[activeIndex].title}, {TESTIMONIAL_ITEMS[activeIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-center mt-8 gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex items-center gap-2 mx-4">
                {TESTIMONIAL_ITEMS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      activeIndex === index 
                        ? "w-6 bg-primary" 
                        : "w-2 bg-muted-foreground/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}