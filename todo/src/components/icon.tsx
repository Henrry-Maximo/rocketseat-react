import React from "react"
import { cva, type VariantProps } from "class-variance-authority";

/*
  * chama o cva e passa o objeto de variantes
  * o objeto de variantes é um objeto que contém as variantes e seus valores
  * cada chave do objeto é uma variante e seu valor é um objeto que contém os valores da variante
  * o objeto de valores é um objeto que contém os valores de cada variante
  * cada valor é uma função que recebe um objeto com os valores das variantes atuais e retorna uma string com as classes a serem aplicadas
  * o objeto de valores é passado para o cva e retorna uma função que recebe um objeto com os valores das variantes atuais e retorna uma string com as classes a serem aplicadas
*/ 

export const iconVariants = cva("", {
  variants: {
    animate: {
      false: "",
      true: "animate-spin"
    }
  },
  defaultVariants: {
    animate: false
  }
});

interface IconProps extends React.ComponentProps<"svg">, VariantProps<typeof iconVariants> {
  /** Componente SVG a ser renderizado */
  svg: React.FC<React.ComponentProps<"svg">>;
  /** Tamanho do ícone (aplica width e height) */
  size?: number | string;
}

/**
 * Componente wrapper para ícones SVG
 * Permite reutilização consistente de ícones com props padronizadas
 */
export default function Icon({ 
  svg: SvgComponent, 
  size = 24, 
  width, 
  height,
  animate,
  className,
  ...props 
}: IconProps) {
  return (
    <SvgComponent
      className={iconVariants({animate, className})}
      width={width ?? size}
      height={height ?? size}
      {...props} 
    />
  )
}