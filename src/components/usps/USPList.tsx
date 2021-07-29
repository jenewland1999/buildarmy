interface Props {
  children: React.ReactNode;
}

const USPList = (props: Props) => {
  const { children } = props;
  return (
    <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{children}</ul>
  );
};

export default USPList;
