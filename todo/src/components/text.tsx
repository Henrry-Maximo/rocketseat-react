import React from "react"

interface TextProps {
  as?: keyof React.JSX.IntrinsicElements; // busca a chave de elementos do HTML em tipo React
  className?: string;
  children: React.ReactNode; // Resumo de diversos tipos para um elemento
}

export default function Text({ as = "span", className, children, ...props }: TextProps) {
  return React.createElement(
    as,
    {
      className,
      ...props
    },
    children
  )
}