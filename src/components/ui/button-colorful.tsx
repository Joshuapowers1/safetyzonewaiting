import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ButtonColorfulProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export function ButtonColorful({
  className,
  label = "Explore Components",
  ...props
}: ButtonColorfulProps) {
  return (
    <Button
      className={cn(
        "relative overflow-hidden px-6 py-2 transition-all duration-300 hover:shadow-lg group",
        className
      )}
      {...props}
    >
      {/* Gradient background effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite] opacity-80 group-hover:opacity-100 transition-opacity" />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2 text-primary-foreground font-semibold">
        {label}
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Button>
  );
}
