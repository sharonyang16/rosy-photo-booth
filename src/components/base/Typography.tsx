import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "./utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      title: "text-[44px] leading-[52px] font-bold",
      header: "text-[28px] leading-[36px] font-bold",
      label: "text-base leading-[1.25] font-bold",
      body: "text-base",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: string;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ variant, className, as, ...props }, ref) => {
    const Component = as || "span";

    const componentProps = {
      className: cn(typographyVariants({ variant, className })),
      ...props,
      ref,
    };

    return React.createElement(Component, componentProps);
  }
);

Typography.displayName = "Typography";

export default Typography;
