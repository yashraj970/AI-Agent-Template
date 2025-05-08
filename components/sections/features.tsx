"use client";

import {
  MessageSquare,
  Eye,
  LineChart,
  GitBranch,
  Database,
  Users,
  Zap,
  Cpu,
  Network,
  Lock,
  BarChart,
  Settings,
} from "lucide-react";
import { FEATURE_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare className="h-6 w-6" />,
  Eye: <Eye className="h-6 w-6" />,
  LineChart: <LineChart className="h-6 w-6" />,
  GitBranch: <GitBranch className="h-6 w-6" />,
  Database: <Database className="h-6 w-6" />,
  Users: <Users className="h-6 w-6" />,
  Zap: <Zap className="h-6 w-6" />,
  Cpu: <Cpu className="h-6 w-6" />,
  Network: <Network className="h-6 w-6" />,
  Lock: <Lock className="h-6 w-6" />,
  BarChart: <BarChart className="h-6 w-6" />,
  Settings: <Settings className="h-6 w-6" />,
};

export function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Advanced AI Capabilities
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI agents leverage cutting-edge technology to deliver smart solutions
            for your business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURE_ITEMS.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>

        <div className="mt-20 relative rounded-xl overflow-hidden border bg-card">
          <div className="p-8 md:p-12">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-bold tracking-tight mb-4">
                End-to-End AI Integration
              </h3>
              <p className="text-muted-foreground mb-6">
                Seamlessly integrate AI capabilities into your existing workflows and systems.
                Our platform adapts to your needs, not the other way around.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "API-first architecture",
                  "Webhook support",
                  "Custom integrations",
                  "No-code automations",
                  "Enterprise SSO",
                  "Scalable infrastructure",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Zap className="h-3 w-3 text-primary" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 pointer-events-none hidden md:block">
            <Network className="h-64 w-64 text-muted-foreground/5" />
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

function FeatureCard({ title, description, icon, index }: FeatureCardProps) {
  return (
    <div 
      className={cn(
        "group relative p-6 rounded-xl border bg-card/50 hover:bg-card transition-all",
        index === 0 || index === 2 ? "md:col-span-1 row-span-1" : "",
        index === 1 ? "md:col-span-1 row-span-1" : "",
        index === 3 ? "md:col-span-1 row-span-1" : "",
        index === 4 || index === 5 ? "md:col-span-1 row-span-1" : ""
      )}
    >
      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary transition-colors group-hover:bg-primary/20">
        {icon in iconMap ? iconMap[icon] : <Zap className="h-6 w-6" />}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}