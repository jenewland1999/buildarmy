import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/outline";
import Container from "@components/Layout/Container";
import Layout from "@components/Layout/Layout";
import Section from "@components/Layout/Section";
import WrappedImage from "@components/WrappedImage";
import Button from "@components/Button";
import ProductCard from "@components/ProductCard";
import ProductGrid from "@components/ProductGrid";
import { categories, USPs } from "src/data";

const HomePage = () => {
  return (
    <Layout>
      <section className="relative h-[calc(100vh-56px)] md:h-auto md:py-48 grid place-items-center bg-homepage-hero bg-left-40 bg-cover before:absolute before:inset-0 before:bg-gradient-to-b before:from-secondary-dark before:to-secondary-lightest before:opacity-50">
        <div className="relative max-w-prose mx-auto px-4">
          <h2 className="mb-2 font-display font-bold text-primary text-[2.875rem] leading-[1.2] text-center">
            History of War in <span className="text-accent">Bricks</span>.
          </h2>
          <p className="mb-4 text-primary text-lg text-center">
            Build your armies with original, premium and historically accurate
            brick scale models and more.
          </p>
          <div className="text-center">
            <Button href="/shop" size={Button.size.LG}>
              Shop Now
            </Button>
          </div>
        </div>
      </section>
      <Section
        className="-mt-24"
        padding={Section.padding.MD}
        variant={Section.variant.PRIMARY}
      >
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {USPs.map((item) => (
              <div
                key={item.title}
                className="bg-primary-lightest rounded shadow-md grid grid-cols-[auto,1fr] grid-rows-[auto,auto] gap-x-2 px-2 py-4 lg:flex lg:flex-col lg:items-center lg:text-center lg:p-4 lg:pt-10 lg:gap-0"
              >
                <item.icon className="row-span-full self-center m-4 h-12 w-12 text-accent lg:m-0 lg:absolute lg:top-0 lg:-translate-y-2/4  lg:shadow lg:bg-primary-lightest lg:rounded lg:p-1" />
                <h3 className="mb-2 font-display font-bold">{item.title}</h3>
                <p className="col-start-2">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Section padding={Section.padding.LG} variant={Section.variant.PRIMARY}>
        <Container>
          <h2 className="mb-8 font-display font-bold text-2xl after:block after:mt-2 after:w-16 after:h-1 after:bg-accent">
            Product Categories
          </h2>
          <ul className="grid grid-cols-2 gap-4 mb-4 md:grid-cols-4">
            {categories.map((category) => (
              <li key={category.name}>
                <Link href={category.href}>
                  <a className="relative block text-center bg-primary-lightest shadow-md h-full">
                    <WrappedImage
                      className="aspect-w-1 aspect-h-1"
                      imageProps={{
                        src: category.imageSrc,
                        alt: "",
                        layout: "fill",
                        objectFit: "scale-down",
                      }}
                    />
                    <span className="bg-primary-lightest block p-2">
                      {category.name}
                    </span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div className="md:absolute md:top-0 md:right-4">
            <Button
              href="/shop"
              isFullWidth
              variant={Button.variant.SOLID_SECONDARY}
            >
              View all Categories
            </Button>
          </div>
        </Container>
      </Section>
      <section className="bg-secondary py-8 xl:py-16">
        <div className="relative max-w-screen-xl mx-auto px-4 md:grid md:grid-cols-2 md:gap-4">
          <div>
            <h2 className="mb-8 font-display font-bold text-primary-lightest text-2xl after:block after:mt-2 after:w-16 after:h-1 after:bg-accent">
              It&apos;s Competition Time!
            </h2>
            <p className="mb-4 text-white max-w-prose">
              Buildarmy is proud to present the sixth instalment of the image
              contest. Send in your photos (or rendered images) of military
              related brick creations for a chance to win a big prize.{" "}
            </p>
            <Button href="/post/6th-buildarmy-image-contest">Learn More</Button>
          </div>
          <figure className="-mb-8 -mx-4 mt-8 h-56 relative md:-mx-0 md:-mr-4 md:-my-8 md:h-auto xl:-mx-0 xl:-my-16">
            <Image
              src="/images/banner-competition.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
            />
          </figure>
        </div>
      </section>
      <section className="bg-primary py-8 xl:py-16">
        <div className="relative max-w-screen-xl mx-auto px-4">
          <h2 className="mb-8 font-display font-bold text-2xl after:block after:mt-2 after:w-16 after:h-1 after:bg-accent">
            Featured Products
          </h2>
          <ProductGrid>
            {Array(12)
              .fill("")
              .map((_, idx) => (
                <ProductCard key={idx} />
              ))}
          </ProductGrid>
          <div className="md:absolute md:top-0 md:right-4">
            <Button
              href="/shop"
              isFullWidth
              variant={Button.variant.SOLID_SECONDARY}
            >
              <span>View all</span>
              <ArrowRightIcon className="hidden md:block h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-secondary py-8 xl:py-16">
        <div className="relative max-w-screen-xl mx-auto px-4 md:grid md:grid-cols-2 md:gap-4">
          <figure className="-mt-8 -mx-4 mb-8 h-56 relative md:-mx-0 md:-ml-4 md:-mb-8 md:h-auto">
            <Image
              src="/images/banner-rewards.png"
              alt=""
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </figure>
          <div>
            <h2 className="mb-8 font-display font-bold text-primary-lightest text-2xl after:block after:mt-2 after:w-16 after:h-1 after:bg-accent">
              Want to earn rewards?
            </h2>
            <p className="text-primary-lightest mb-4">
              Buildarmy offers reward points for every purchase. For every pound
              (£) you spend, you will earn 1 point. 100 points is the equivalent
              of £1. Register now to start earning points.
            </p>
            <Button href="/account/register">Sign Up</Button>
          </div>
        </div>
      </section>
      <section className="bg-primary py-8 xl:py-16">
        <div className="relative max-w-screen-xl mx-auto px-4">
          <h2 className="mb-8 font-display font-bold text-2xl after:block after:mt-2 after:w-16 after:h-1 after:bg-accent">
            Latest Products
          </h2>
          <ProductGrid>
            {Array(12)
              .fill("")
              .map((_, idx) => (
                <ProductCard key={idx} />
              ))}
          </ProductGrid>
          <div className="md:absolute md:top-0 md:right-4">
            <Button
              href="/shop"
              isFullWidth
              variant={Button.variant.SOLID_SECONDARY}
            >
              <span>View all</span>
              <ArrowRightIcon className="hidden md:block h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
