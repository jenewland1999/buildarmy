interface Props {
  children: React.ReactNode;
}

const ProductGrid = (props: Props) => {
  return (
    <div className="overflow-auto mb-4 grid gap-4 lg:grid-cols-3 xl:grid-cols-4">
      {props.children}
    </div>
  );
};

export default ProductGrid;
