import type Icon from "./icon"


interface ButtonProps extends React.ComponentProps<"button"> {
  icon?: React.ComponentProps<typeof Icon>["svg"]
}

export default function Button({
  variant,
  size,
  disabled,
  className,
  children,
  icon: IconComponent,
  ...props
}: ButtonProps) {
  return <button {...props}>{children}</button>
}