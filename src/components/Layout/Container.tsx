interface Props {
  children: React.ReactNode;
}

const Container = (props: Props) => {
  const { children } = props;

  return (
    <div className="relative max-w-screen-xl mx-auto px-4">{children}</div>
  );
};

export default Container;
