import { HTMLAttributes, ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline-primary"
  | "outline-secondary"
  | "link-primary"
  | "link-secondary";

interface ButtonProps extends HTMLAttributes<HTMLElement> {
  block?: boolean;
  children?: ReactNode;
  href?: string;
  size?: "sm" | "lg";
  variant: ButtonVariant;
}

const Button = ({
  block,
  children,
  className,
  href,
  size,
  variant,
  ...props
}: ButtonProps) => {
  const baseStyles = "border-2 rounded-md text-center align-middle select-none";
  const displayStyles = block ? "block w-full" : "inline-block";
  const sizeStyles = size
    ? size === "sm"
      ? "px-2 py-1 text-sm" // Small
      : "px-4 py-2 text-xl" // Large
    : "px-3 py-1.5"; // Regular
  let variantStyles = "";

  switch (variant) {
    case "primary":
      variantStyles = "bg-accent border-accent text-secondary-darkest";
      break;
    case "secondary":
      variantStyles = "bg-secondary border-secondary text-primary-lightest";
      break;
    case "outline-primary":
      variantStyles = "border-accent text-accent";
      break;
    case "outline-secondary":
      variantStyles = "border-secondary text-secondary";
      break;
    case "link-primary":
      variantStyles = "border-transparent text-accent";
      break;
    case "link-secondary":
      variantStyles = "border-transparent text-secondary";
      break;
  }

  const buttonStyles = `${baseStyles} ${displayStyles} ${sizeStyles} ${variantStyles} ${
    className ?? ""
  }`;

  if (href) {
    return (
      <a href={href} className={buttonStyles} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
