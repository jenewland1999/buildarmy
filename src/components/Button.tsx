import Link from "@components/Link";
import { assertNever } from "@utils/assertNever";
import { classNames } from "@utils/classNames";

export enum Bevel {
  NONE,
  NORM,
  FULL,
}

export enum Size {
  SM,
  MD,
  LG,
}

export enum Variant {
  SOLID_SECONDARY,
  SOLID_ACCENT,
  OUTLINE_SECONDARY,
  OUTLINE_ACCENT,
  GHOST_SECONDARY,
  GHOST_ACCENT,
  LINK_SECONDARY,
  LINK_ACCENT,
  DISABLED,
}

type ButtonAnchorProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

interface Props extends ButtonAnchorProps {
  as?: "a" | "button";
  bevel?: Bevel;
  children?: React.ReactNode;
  isFullWidth?: boolean;
  size?: Size;
  variant?: Variant;
}

const BEVEL_MAP: Record<Bevel, string> = {
  [Bevel.NONE]: "rounded-none",
  [Bevel.NORM]: "rounded-md",
  [Bevel.FULL]: "rounded-full",
};

const SIZE_MAP: Record<Size, string> = {
  [Size.SM]: "px-2 py-1 text-sm",
  [Size.MD]: "px-3 py-1.5 text-base",
  [Size.LG]: "px-4 py-2 text-lg",
};

const VARIANT_MAP: Record<Variant, string> = {
  [Variant.DISABLED]: `
    bg-primary-darkest
    border-primary-darkest
    text-primary-lightest
    hover:bg-primary-darkest
    hover:cursor-not-allowed
    hover:border-primary-darkest
    focus:ring-0
    focus:ring-offset-0
  `,
  [Variant.SOLID_SECONDARY]: `
    bg-secondary
    border-secondary
    text-primary-lightest
    hover:bg-secondary-light
    hover:border-secondary-light
    focus:ring-offset-primary-lightest
    focus:ring-secondary`,
  [Variant.SOLID_ACCENT]: `
    bg-accent
    border-accent
    text-secondary-darkest
    hover:bg-accent-light
    hover:border-accent-light
    focus:ring-offset-primary-lightest
    focus:ring-accent`,
  [Variant.OUTLINE_SECONDARY]: `
    border-secondary
    text-secondary
    hover:bg-secondary
    hover:text-primary-lightest
    focus:ring-offset-primary-lightest
    focus:ring-secondary`,
  [Variant.OUTLINE_ACCENT]: `
    border-accent
    text-accent
    hover:bg-accent
    hover:text-secondary-darkest
    focus:ring-offset-primary-lightest
    focus:ring-accent`,
  [Variant.GHOST_SECONDARY]: `
    bg-secondary
    border-secondary
    bg-opacity-25
    border-opacity-0
    text-primary-lightest
    hover:bg-opacity-50
    focus:ring-offset-primary-lightest
    focus:ring-secondary
    focus:ring-opacity-25`,
  [Variant.GHOST_ACCENT]: `
    bg-accent
    border-accent
    bg-opacity-25
    border-opacity-0
    text-secondary-darkest
    hover:bg-opacity-50
    focus:ring-accent
    focus:ring-opacity-25`,
  [Variant.LINK_SECONDARY]: `
    border-none
    text-secondary
    hover:underline
    focus:ring-offset-primary-lightest
    focus:ring-secondary`,
  [Variant.LINK_ACCENT]: `
    border-none
    text-accent
    hover:underline
    focus:ring-offset-primary-lightest
    focus:ring-accent`,
};

const Button: React.FC<Props> = ({
  as = "button",
  bevel = Bevel.NORM,
  children,
  className,
  disabled,
  isFullWidth,
  size = Size.MD,
  variant = Variant.SOLID_ACCENT,
  ...rest
}) => {
  const props = {
    className: classNames(`
      align-middle
      appearance-none
      inline-flex
      items-center
      justify-center
      space-x-2
      border-2
      font-semibold
      select-none
      text-center
      transition-all
      whitespace-nowrap
      focus:ring-2
      focus:ring-offset-2
      focus:outline-none
      ${BEVEL_MAP[bevel]}
      ${SIZE_MAP[size]}
      ${disabled ? VARIANT_MAP[Variant.DISABLED] : VARIANT_MAP[variant]}
      ${isFullWidth ? "w-full" : "w-auto"}
    `),
    ...rest,
  };

  switch (as) {
    case "a":
      return <Link {...props}>{children}</Link>;
    case "button":
      return <button {...props}>{children}</button>;
    default:
      assertNever(as);
      return null;
  }
};

export default Button;
