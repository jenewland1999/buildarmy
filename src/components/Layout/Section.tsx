import classNames from "@utils/classNames";

enum Variant {
  PRIMARY,
  SECONDARY,
  ACCENT,
}

enum Padding {
  NONE,
  SM,
  MD,
  LG,
}

interface Props {
  children: React.ReactNode;
  className?: string;
  padding: Padding;
  variant: Variant;
}

const PADDING_MAPS: Record<Padding, string> = {
  [Padding.NONE]: "py-0",
  [Padding.SM]: "py-4 md:py-6 xl:py-8",
  [Padding.MD]: "py-8 md:py-8 xl:py-8",
  [Padding.LG]: "py-10 md:py-12 xl:py-16",
};

const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.PRIMARY]: "bg-primary text-secondary-darkest",
  [Variant.SECONDARY]: "bg-secondary text-primary-lightest",
  [Variant.ACCENT]: "bg-accent text-secondary-darkest",
};

const Section = (props: Props) => {
  const { children, className, padding, variant } = props;

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

Section.defaultProps = {
  padding: Padding.MD,
  variant: Variant.PRIMARY,
};

Section.padding = Padding;
Section.variant = Variant;

export default Section;
