import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

// can using at any other place
export const textVariants = cva("font-sans text-gray-400", {
  variants: {
    variant: {
      "body-sm-bold": "text-sm leading-5 font-semibold",
      "body-md": "text-base leading-6 font-normal",
      "body-md-bold": "text-base leading-6 font-semibold",
    },
  },
  defaultVariants: {
    variant: "body-md",
  },
});

// extenda as propriedades de textVariants buscando com VariantProps
interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements; // busca a chave de elementos do HTML em tipo React
  className?: string;
  children: React.ReactNode; // Resumo de diversos tipos para um elemento
}

export default function Text({
  as = "span",
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props,
    },
    children
  );
}
