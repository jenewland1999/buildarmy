import { classNames } from "../../utils/classNames";

export enum Variant {
  PLAIN,
  PRIMARY,
  SECONDARY,
  ACCENT,
}

export enum Padding {
  NONE,
  SM,
  MD,
  LG,
}

interface Props {
  children: React.ReactNode;
  className?: string;
  padding?: Padding;
  variant?: Variant;
}

const PADDING_MAPS: Record<Padding, string> = {
  [Padding.NONE]: "",
  [Padding.SM]: "py-4 md:py-6 xl:py-8",
  [Padding.MD]: "py-8 md:py-8 xl:py-8",
  [Padding.LG]: "py-10 md:py-12 xl:py-16",
};

const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.PLAIN]: "bg-primary-lightest text-secondary-darkest",
  [Variant.PRIMARY]: "bg-primary text-secondary-darkest",
  [Variant.SECONDARY]: "bg-secondary text-primary-lightest",
  [Variant.ACCENT]: "bg-accent text-secondary-darkest",
};

const Section: React.FC<Props> = ({
  children,
  className,
  padding = Padding.MD,
  variant = Variant.PRIMARY,
}) => {
  return (
    <section
      className={classNames(
        PADDING_MAPS[padding],
        VARIANT_MAPS[variant],
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
