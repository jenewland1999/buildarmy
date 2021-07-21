import Image from "next/image";

import Layout from "@components/Layout/Layout";
import {
  GiftIcon,
  GlobeAltIcon,
  ReceiptTaxIcon,
  SupportIcon,
} from "@heroicons/react/solid";
import { ArrowRightIcon } from "@heroicons/react/outline";
import Container from "@components/Layout/Container";
import Section from "@components/Layout/Section";
import { productCategories } from "src/data";
import Link from "next/link";
import WrappedImage from "@components/WrappedImage";

const USPs = [
  {
    icon: ReceiptTaxIcon,
    title: "Multibuy Discount",
    description:
      "Get 10% discount on all orders over £100 using coupon code BA100.",
  },
  {
    icon: GiftIcon,
    title: "Collect Reward Points",
    description:
      "Collect 1 point for every £1 you spend to use on future orders.",
  },
  {
    icon: SupportIcon,
    title: "Live Support",
    description: "Need help? We offer live support via Instagram and Facebook.",
  },
  {
    icon: GlobeAltIcon,
    title: "International Shipping",
    description: "We ship across the world to a variety of countries.",
  },
];

const categories = [
  {
    name: "WWII Tanks",
    href: "/shop?category=wwii-tanks",
    imageSrc: "/images/categories/wwii-tanks.jpg",
  },
  {
    name: "WWII Artillery",
    href: "/shop?category=wwii-artillery",
    imageSrc: "/images/categories/wwii-artillery.jpg",
  },
  {
    name: "WWII Light Vehicles",
    href: "/shop?category=wwii-light-vehicles",
    imageSrc: "/images/categories/wwii-light-vehicles.jpg",
  },
  {
    name: "WWII Planes",
    href: "/shop?category=wwii-planes",
    imageSrc: "/images/categories/wwii-planes.jpg",
  },
];

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
            <a
              href="/shop"
              className="inline-flex items-center justify-center bg-accent text-secondary-darkest rounded px-3.5 py-2 text-xl text-center"
            >
              Shop Now
            </a>
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
          <a
            href="/shop"
            className="block bg-secondary text-primary-lightest text-center rounded px-3 py-1.5 md:absolute md:top-0 md:right-4"
          >
            View all Categories
          </a>
        </Container>
      </Section>
      <section className="bg-secondary py-8 xl:py-16">
        <div className="relative max-w-screen-xl mx-auto px-4 md:grid md:grid-cols-2 md:gap-4">
          <div>
            <h2 className="mb-8 font-display font-bold text-primary-lightest text-2xl after:block after:mt-2 after:w-16 after:h-1 after:bg-accent">
              It&apos;s Competition Time!
            </h2>
            <p className="mb-4 text-white max-w-prose">
              Buildarmy is proud to present the fifth instalment of the image
              contest. Send in your photos (or rendered images) of military
              related brick creations for a chance to win a big prize.{" "}
            </p>
            <a
              href="https://buildarmy.com/6th-buildarmy-image-contest/"
              className="inline-flex items-center justify-center bg-accent py-1.5 px-3 text-center rounded"
            >
              Learn More
            </a>
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
          <article className="mb-4 flex overflow-auto lg:grid lg:grid-cols-3 lg:gap-4 xl:grid-cols-4">
            {Array(12)
              .fill("")
              .map((item, idx) => (
                <article
                  key={idx}
                  className="relative flex-shrink-0 bg-primary-lightest max-w-xs mb-4 mr-4 border border-primary rounded-md lg:m-0"
                >
                  <Image
                    src="/images/product.jpg"
                    alt=""
                    layout="responsive"
                    height={3}
                    width={4}
                    className="rounded-t-md"
                  />
                  <div className="p-4">
                    <ul className="flex items-center absolute top-4 left-4">
                      <li className="px-2 mr-2 mb-2 rounded bg-accent font-bold text-sm uppercase">
                        NEW
                      </li>
                      <li className="px-2 mr-2 mb-2 rounded bg-accent font-bold text-sm uppercase">
                        BEST SELLER
                      </li>
                    </ul>
                    <h3 className="text-secondary-darkest mb-6 leading-tight font-display font-bold">
                      Micro Tanks Bundle - Micro Soldiers, Tanks &amp; House
                    </h3>
                    <p className="mb-4 leading-none text-secondary-darkest text-2xl font-display font-bold">
                      £45.99
                      <small className="ml-1 text-secondary-lightest text-xs font-normal">
                        inc. VAT
                      </small>
                    </p>
                    <button className="relative z-10 inline-flex items-center justify-center w-full bg-accent text-secondary-darkest rounded py-2 text-center">
                      Add to Basket
                    </button>
                    <a
                      href="/shop"
                      className="after:absolute after:inset-0 after:z-0"
                    ></a>
                  </div>
                </article>
              ))}
          </article>
          <a
            href="/shop"
            className="block bg-secondary text-primary-lightest text-center rounded px-3 py-1.5 md:absolute md:top-0 md:right-4 md:flex md:items-center md:space-x-2 md:text-lg md:bg-transparent md:text-secondary-darkest"
          >
            <span>View all</span>
            <ArrowRightIcon className="hidden md:block h-4 w-4" />
          </a>
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
            <a
              href="/account/register"
              className="inline-flex items-center justify-center bg-accent py-1.5 px-3 text-center rounded"
            >
              Sign up
            </a>
          </div>
        </div>
      </section>
      <section className="bg-primary py-8 xl:py-16">
        <div className="relative max-w-screen-xl mx-auto px-4">
          <h2 className="mb-8 font-display font-bold text-2xl after:block after:mt-2 after:w-16 after:h-1 after:bg-accent">
            Latest Products
          </h2>
          <article className="mb-4 flex overflow-auto lg:grid lg:grid-cols-3 lg:gap-4 xl:grid-cols-4">
            {Array(12)
              .fill("")
              .map((item, idx) => (
                <article
                  key={idx}
                  className="relative flex-shrink-0 bg-primary-lightest max-w-xs mb-4 mr-4 border border-primary rounded-md lg:m-0"
                >
                  <Image
                    src="/images/product.jpg"
                    alt=""
                    layout="responsive"
                    height={3}
                    width={4}
                    className="rounded-t-md"
                  />
                  <div className="p-4">
                    <ul className="flex items-center absolute top-4 left-4">
                      <li className="px-2 mr-2 mb-2 rounded bg-accent font-bold text-sm uppercase">
                        NEW
                      </li>
                      <li className="px-2 mr-2 mb-2 rounded bg-accent font-bold text-sm uppercase">
                        BEST SELLER
                      </li>
                    </ul>
                    <h3 className="text-secondary-darkest mb-6 leading-tight font-display font-bold">
                      Micro Tanks Bundle - Micro Soldiers, Tanks &amp; House
                    </h3>
                    <p className="mb-4 leading-none text-secondary-darkest text-2xl font-display font-bold">
                      £45.99
                      <small className="ml-1 text-secondary-lightest text-xs font-normal">
                        inc. VAT
                      </small>
                    </p>
                    <button className="relative z-10 inline-flex items-center justify-center w-full bg-accent text-secondary-darkest rounded py-2 text-center">
                      Add to Basket
                    </button>
                    <a
                      href="/shop"
                      className="after:absolute after:inset-0 after:z-0"
                    ></a>
                  </div>
                </article>
              ))}
          </article>
          <a
            href="/shop"
            className="block bg-secondary text-primary-lightest text-center rounded px-3 py-1.5 md:absolute md:top-0 md:right-4 md:flex md:items-center md:space-x-2 md:text-lg md:bg-transparent md:text-secondary-darkest"
          >
            <span>View all</span>
            <ArrowRightIcon className="hidden md:block h-4 w-4" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
