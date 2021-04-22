import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type AppProps = {
  icon: IconProp;
  title: string;
  description: string;
  isReversed?: boolean;
};

const USP = ({ icon, title, description, isReversed }: AppProps) => (
  <li className="bg-primary-lightest text-secondary-darkest grid grid-cols-[auto,3fr] gap-x-4 p-4 items-center rounded-lg shadow-md last:mb-0 h-full">
    <FontAwesomeIcon
      className="text-accent m-1.5 my-3 ml-auto"
      icon={icon}
      size="3x"
      fixedWidth
    />
    <div className={isReversed ? `order-first` : ``}>
      <p className="font-display font-bold mb-2">{title}</p>
      <p>{description}</p>
    </div>
  </li>
);

export default USP;
