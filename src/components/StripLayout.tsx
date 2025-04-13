import React, { ComponentProps, ElementType } from "react";
import { Layout } from "@/types/photobooth";
import { layoutToClass } from "@/types/constants";

type StripLayoutProps = {
  children: React.ReactNode;
  layout: Layout;
  className?: string;
};
const StripLayout = ({
  children,
  layout,
  className,
  ...props
}: StripLayoutProps & ComponentProps<ElementType>) => {
  return (
    <div {...props} className={`${layoutToClass.get(layout)} ${className}`}>
      {children}
    </div>
  );
};

export default StripLayout;
