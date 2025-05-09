"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

type PricingTier = {
  plan: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: string[];
  isPopular?: boolean;
};

const pricingData: PricingTier[] = [
  {
    plan: "Free Plan",
    monthlyPrice: "Free",
    yearlyPrice: "Free",
    features: [
      "5 AI requests per day",
      "Basic text generation",
      "Email support",
      "Community access",
    ],
  },
  {
    plan: "Pro Plan",
    monthlyPrice: "$29",
    yearlyPrice: "$290",
    features: [
      "Unlimited AI requests",
      "Advanced text generation",
      "Image generation",
      "Priority support",
      "API access",
    ],
    isPopular: true,
  },
  {
    plan: "Enterprise Plan",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    features: [
      "Dedicated instance",
      "Custom model training",
      "SSO & advanced security",
      "Dedicated account manager",
      "SLA guarantees",
    ],
  },
];

function PricingCard({
  plan,
  price,
  features,
  isPopular,
}: {
  plan: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}) {
  return (
    <div
      className={`relative bg-card/20 backdrop-blur-2xl rounded-3xl p-8 flex flex-col h-full border shadow-2xl
      ${isPopular ? "border-primary/20" : "border-border/5"}`}
    >
      <div className="mb-8">
        <p className="text-muted-foreground mb-2">{plan}</p>
        <h2 className="text-4xl font-bold text-foreground flex items-end gap-2">
          {price}
          {price !== "Free" && price !== "Custom" && (
            <span className="text-xl text-muted-foreground">/m</span>
          )}
        </h2>
      </div>

      <div className="flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 rounded-full p-1">
              <Check size={16} className="text-primary" />
            </div>
            <span className="text-muted-foreground text-sm">{feature}</span>
          </div>
        ))}
      </div>

      <button
        className={`mt-8 py-4 px-6 rounded-full text-sm font-medium transition-all
          ${
            isPopular
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
      >
        Get Started
      </button>
    </div>
  );
}

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "yearly"
  );

  return (
    <section
      id="pricing"
      className="min-h-screen bg-background overflow-hidden relative p-8"
    >
      <div className="absolute inset-0 bg-gradient-radial from-muted/50 via-background to-background" />

      {/* Background Text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none select-none">
        <h1 className="text-[20rem] font-bold text-muted">Pricing</h1>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h1 className="text-8xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Pricing
          </h1>
          <div className="inline-flex items-center gap-2 bg-card/40 backdrop-blur-xl p-1 rounded-full border border-border/10">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                billingCycle === "yearly"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              }`}
              onClick={() => setBillingCycle("yearly")}
            >
              Billed Yearly
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                billingCycle === "monthly"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Billed Monthly
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingData.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan.plan}
              price={
                billingCycle === "monthly"
                  ? plan.monthlyPrice
                  : plan.yearlyPrice
              }
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
