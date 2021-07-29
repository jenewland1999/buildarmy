import classNames from "@utils/classNames";
import Image from "next/image";
import Button from "./Button";

interface Props {
  banner: {
    title: string;
    excerpt: string;
    image: {
      altText: string;
      sourceUrl: string;
      objectFit: string;
    };
    callToAction: {
      href: string;
      text: string;
    };
  };
  isFlipped?: boolean;
}

const Banner = (props: Props) => {
  const { banner, isFlipped } = props;
  const figure = (
    <figure
      className={classNames(
        isFlipped ? "md:-mr-4" : "md:-ml-4",
        "-mt-8 -mx-4 mb-8 h-56 relative md:-mx-0 md:-mb-8 md:h-auto"
      )}
    >
      <Image
        src={banner.image.sourceUrl}
        alt={banner.image.altText}
        layout="fill"
        objectFit={banner.image.objectFit}
        objectPosition="center"
      />
    </figure>
  );

  return (
    <section className="bg-secondary py-8 xl:py-16">
      <div className="relative max-w-screen-xl mx-auto px-4 md:grid md:grid-cols-2 md:gap-4">
        {!isFlipped && figure}
        <div>
          <h2 className="mb-8 font-display font-bold text-primary-lightest text-2xl after:block after:mt-2 after:w-16 after:h-1 after:bg-accent">
            {banner.title}
          </h2>
          <p className="text-primary-lightest mb-4">{banner.excerpt}</p>
          <Button as="a" href={banner.callToAction.href}>
            {banner.callToAction.text}
          </Button>
        </div>
        {isFlipped && figure}
      </div>
    </section>
  );
};

export default Banner;
