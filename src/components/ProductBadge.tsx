interface Props {
  children: React.ReactNode;
}

const ProductBadge = (props: Props) => {
  const { children, ...rest } = props;
  return (
    <span
      className="px-2 mr-2 mb-2 rounded bg-accent font-bold text-sm uppercase"
      {...rest}
    >
      {children}
    </span>
  );
};

export default ProductBadge;
