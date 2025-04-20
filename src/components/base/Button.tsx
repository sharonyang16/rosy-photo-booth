import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "./utils";

const buttonVariants = cva("py-2 px-8 rounded-lg text-base cursor-pointer disabled:cursor-not-allowed disabled:opacity-50", {
  variants: {
    variant: {
      primary:
        "bg-[#f2afcf] enabled:hover:bg-[#ed9fc3] enabled:active:bg-[#ed9fc3] enabled:focus:bg-[#ed9fc3]",
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
