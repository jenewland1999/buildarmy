const SectionHeading = ({
  title,
  inverse,
}: {
  title: string;
  inverse?: boolean;
}) => (
  <>
    <h2
      className={`font-display font-bold text-3xl mb-2 ${
        inverse ? "text-primary-lightest" : "text-secondary-darkest"
      }`}
    >
      {title}
    </h2>
    <hr className="border-b-4 border-accent w-16 mb-8" />
  </>
);

export default SectionHeading;
