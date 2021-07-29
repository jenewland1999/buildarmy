interface Props {
  children: React.ReactNode;
}

const CategoryList = (props: Props) => {
  const { children } = props;

  return (
    <ul className="grid grid-cols-2 gap-4 mb-4 md:grid-cols-4">{children}</ul>
  );
};

export default CategoryList;
