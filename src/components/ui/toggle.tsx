"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium hover:bg-tech-gradient hover:text-white disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-tech-gradient data-[state=on]:text-white [&_svg]:pointer-events-none [&_svg]:shrink-0 focus-visible:border-tech-purple focus-visible:ring-tech-blue/50 focus-visible:ring-[3px] outline-none transition-all duration-200 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap border-2 border-tech-blue",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-tech-purple bg-transparent shadow-xs hover:bg-tech-gradient hover:text-white",
      },
      size: {
        default: "h-10 px-2 min-w-10",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-12 px-2.5 min-w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
