import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import SectionHeading from "./SectionHeading";

type BannerProps = {
  title: string;
  description: string;
  cta: string;
  href: string;
  imgSrc: string;
  imgAlt: string;
  reversed?: boolean;
};

const Banner = ({
  title,
  description,
  cta,
  href,
  imgSrc,
  imgAlt,
  reversed,
}: BannerProps) => (
  <section
    className={`container mx-auto bg-secondary ${
      reversed ? " flex flex-col-reverse" : ""
    }`}
  >
    <div className="px-4 py-8">
      <SectionHeading title={title} inverse />
      <p className="text-primary-lightest mb-4">{description}</p>
      <Link href={href} passHref>
        <Button variant="primary">{cta}</Button>
      </Link>
    </div>
    <Image
      src={imgSrc}
      alt={imgAlt}
      layout="responsive"
      height={44}
      width={75}
      objectPosition={reversed ? "top" : "bottom"}
    />
  </section>
);

export default Banner;
