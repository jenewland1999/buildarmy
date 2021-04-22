import Image from "next/image";
import Link from "next/link";

type AppProps = {
  image: string;
  name: string;
  href: string;
};

const Category = ({ image, name, href }: AppProps) => (
  <Link href={href}>
    <a className="relative block bg-primary-lightest text-secondary-darkest text-center shadow-md h-full">
      <div className="aspect-w-1 aspect-h-1">
        <Image src={image} alt={name} layout="fill" objectFit="scale-down" />
      </div>
      <h3 className="bg-primary-lightest font-display font-bold p-2">{name}</h3>
    </a>
  </Link>
);

export default Category;
