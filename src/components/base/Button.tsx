import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "./utils";

const buttonVariants = cva("py-2 px-8 rounded-lg text-base cursor-pointer disabled:cursor-not-allowed disabled:opacity-50", {
  variants: {
    variant: {
      primary:
        "bg-pink-primary enabled:hover:bg-pink-dark enabled:active:bg-pink-dark enabled:focus:bg-pink-dark",
      secondary:
        "border-1 border-gray-500 enabled:hover:border-gray-900 enabled:active:border-gray-900 enabled:focus:border-gray-900 enabled:hover:bg-gray-100 enabled:active:bg-gray-100 enabled:focus:bg-gray-100",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ variant, className, ...props }, ref) => {
    const componentProps = {
      className: cn(
        buttonVariants({ variant, className }),    
      ),
      ...props,
      ref,
    };

    return React.createElement("button", componentProps);
  }
);

Button.displayName = "Button";

export default Button;
