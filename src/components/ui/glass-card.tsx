import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "interactive";
  children: React.ReactNode;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border border-card-border backdrop-blur-xl transition-smooth",
          "bg-gradient-card shadow-card",
          {
            "shadow-card": variant === "default",
            "shadow-elevated transform-gpu": variant === "elevated",
            "hover:shadow-glow hover:border-primary/30 hover:-translate-y-1 cursor-pointer": variant === "interactive",
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export { GlassCard };