import NextLink from "next/link";

interface Props extends React.ComponentPropsWithoutRef<"a"> {
  children?: React.ReactNode;
}

const Link = (props: Props) => {
  const { children, href, ...rest } = props;

  if (href === undefined) {
    throw new Error("Prop `href` is missing from link.");
  }

  if (href?.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
        <span className="sr-only">(Opens in a new tab)</span>
      </a>
    );
  }

  return (
    <NextLink href={href}>
      <a {...rest}>{children}</a>
    </NextLink>
  );
};

export default Link;
