import Image, { ImageProps } from "next/image";
import Link from "next/link";
import Button from "./Button";
import SectionHeading from "./SectionHeading";

type BannerProps = {
  title: string;
  description: string;
  cta: string;
  href: string;
  image: ImageProps;
  reversed?: boolean;
};

// TODO: Find a more elegant way of displaying the banner image or source new images
const Banner = ({
  title,
  description,
  cta,
  href,
  image,
  reversed,
}: BannerProps) => (
  <section className="bg-secondary">
    <div
      className={`container mx-auto flex ${
        reversed ? " flex-col-reverse" : "flex-col"
      } md:flex-row`}
    >
      <div className="px-4 py-8 md:flex-1 lg:py-16 self-center">
        <SectionHeading title={title} inverse />
        <p className="text-primary-lightest mb-4 prose">{description}</p>
        <Link href={href} passHref>
          <Button variant="primary">{cta}</Button>
        </Link>
      </div>
      <div className={`relative ${image.width ? "" : "pt-56"} md:flex-1`}>
        <Image {...image} />
      </div>
    </div>
  </section>
);

export default Banner;
