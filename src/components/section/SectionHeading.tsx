interface Props {
  children: React.ReactNode;
}

const SectionHeading = (props: Props) => {
  return (
    <h2 className="mb-8 font-display font-bold text-2xl after:block after:mt-2 after:w-16 after:h-1 after:bg-accent">
      {props.children}
    </h2>
  );
};

export default SectionHeading;
