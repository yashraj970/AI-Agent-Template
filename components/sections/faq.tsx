"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger
} from "@/components/ui/accordion";

export function Faq() {
  const [openItem, setOpenItem] = useState<string | null>("item-0");

  return (
    <section id="faq" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Get answers to common questions about our AI agents.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible value={openItem || undefined} 
            onValueChange={(value) => setOpenItem(value)}>
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b">
                <AccordionTrigger className="text-left text-lg font-medium py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Still have questions? <a href="#" className="text-primary hover:underline">Contact our support team</a>
          </p>
        </div>
      </div>
    </section>
  );
}