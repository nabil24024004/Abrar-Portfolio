import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const gradientButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-mono font-medium",
  {
    variants: {
      variant: {
        primary: 
          "bg-gradient-primary text-primary-foreground hover:shadow-glow hover:scale-105 active:scale-95",
        secondary: 
          "bg-gradient-secondary text-secondary-foreground hover:shadow-glow hover:scale-105 active:scale-95",
        outline: 
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow",
        ghost: 
          "bg-transparent text-foreground hover:bg-muted hover:text-accent transition-colors",
        hero: 
          "bg-gradient-primary text-primary-foreground hover:shadow-glow hover:scale-105 active:scale-95 shadow-elevated",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-14 rounded-xl px-8 text-base",
        xl: "h-16 rounded-2xl px-10 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gradientButtonVariants> {
  asChild?: boolean;
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(gradientButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
GradientButton.displayName = "GradientButton";

export { GradientButton, gradientButtonVariants };