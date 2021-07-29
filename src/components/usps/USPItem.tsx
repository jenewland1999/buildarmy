interface Props {
  usp: {
    title: string;
    description: string;
    icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  };
}

const USPItem = (props: Props) => {
  const { usp } = props;

  return (
    <li
      key={usp.title}
      className="bg-primary-lightest rounded shadow-md grid grid-cols-[auto,1fr] grid-rows-[auto,auto] gap-x-2 px-2 py-4 lg:flex lg:flex-col lg:items-center lg:text-center lg:p-4 lg:pt-10 lg:gap-0"
    >
      <usp.icon className="row-span-full self-center m-4 h-12 w-12 text-accent lg:m-0 lg:absolute lg:top-0 lg:-translate-y-2/4  lg:shadow lg:bg-primary-lightest lg:rounded lg:p-1" />
      <h3 className="mb-2 font-display font-bold">{usp.title}</h3>
      <p className="col-start-2">{usp.description}</p>
    </li>
  );
};

export default USPItem;
