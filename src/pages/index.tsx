import Link from "next/link";

import Banner from "@components/Banner";
import Button from "@components/Button";
import Category from "@components/Category";
import Layout from "@components/Layout";
import ProductCard from "@components/ProductCard";
import SectionHeading from "@components/SectionHeading";
import USP from "@components/USP";

const HomePage = () => (
  <Layout>
    <div className="grid place-items-center min-h-screen bg-homepage-hero bg-cover bg-center md:min-h-0 md:py-48">
      <section
        id="hero"
        className="container px-4 mx-auto max-w-[360px] text-center"
      >
        <h1 className="mb-2 text-[3.5rem] leading-[67px] text-secondary-darkest font-serif font-bold">
          World War In <span className="text-accent">Bricks</span>.
        </h1>
        <p className="mb-4  font-semibold leading-loose text-secondary-darkest">
          Build your armies with{" "}
          <span className="bg-accent px-0.5 rounded">original</span>,{" "}
          <span className="bg-accent px-0.5 rounded">premium</span>, and{" "}
          <span className="bg-accent px-0.5 rounded">
            historically accurate
          </span>{" "}
          brick scale models and mini-figures.
        </p>
        <Link href="/shop/products" passHref>
          <Button variant="primary" size="lg">
            Shop Now
          </Button>
        </Link>{" "}
        <Link href="/about-us" passHref>
          <Button variant="link-secondary" size="lg">
            Learn More
          </Button>
        </Link>
      </section>
    </div>
    <section id="usps" className="container px-4 py-8 mx-auto -mt-24 mb-4">
      <ul className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 xl:grid-cols-4">
        <USP
          icon="percent"
          title="Multibuy Discount"
          description="Get 10% discount on all orders over £100 using coupon code BA100."
        />
        <USP
          icon="crown"
          title="Collect Reward Points"
          description="Collect 1 point for every £1 you spend to use on future orders."
          isReversed
        />
        <USP
          icon={["far", "life-ring"]}
          title="Live Support"
          description="Need help? We offer live support via Instagram and Facebook."
        />
        <USP
          icon="globe"
          title="International Shipping"
          description="We ship across the world to a variety of countries."
          isReversed
        />
      </ul>
    </section>
    <section id="categories" className="bg-primary-light py-8 lg:py-16">
      <div className="container mx-auto px-4 relative">
        <SectionHeading title="Product Categories" />
        <ul className="mb-8 sm:mb-0 grid gap-4 grid-cols-2 sm:grid-cols-4">
          <li>
            <Category
              image="/images/categories/wwii-artillery.jpg"
              name="WWII Artillery"
              href="#"
            />
          </li>
          <li>
            <Category
              image="/images/categories/wwii-light-vehicles.jpg"
              name="WWII Light Vehicles"
              href="#"
            />
          </li>
          <li>
            <Category
              image="/images/categories/wwii-planes.jpg"
              name="WWII Planes"
              href="#"
            />
          </li>
          <li>
            <Category
              image="/images/categories/wwii-tanks.jpg"
              name="WWII Tanks"
              href="#"
            />
          </li>
        </ul>
        <Link href="/shop/categories/" passHref>
          <Button
            variant="secondary"
            block
            className="sm:absolute sm:top-0 sm:right-4 sm:w-auto"
          >
            View all Categories
          </Button>
        </Link>
      </div>
    </section>
    <Banner
      title="It's Competition Time!"
      description="Buildarmy is proud to present the fifth instalment of the image contest.
        Send in your photos (or rendered images) of military related brick
        creations for a chance to win a big prize."
      cta="Learn More"
      href="/blog/2020/04/buildarmy-annual-competition"
      image={{
        src: "/images/banner-competition.jpg",
        alt: "",
        layout: "fill",
        objectFit: "cover",
      }}
    />
    <section className="bg-primary-light py-8 lg:py-16" id="featured-products">
      <div className="container mx-auto px-4 relative">
        <SectionHeading title="Featured Products" />
        <ul className="space-y-4 md:space-y-0 md:grid md: grid-cols-2 md:gap-4 xl:grid-cols-4 xl:gap-4">
          {Array(8)
            .fill("")
            .map((_, idx) => (
              <li key={idx}>
                <ProductCard
                  prodId="1"
                  prodName="Micro Tanks Bundle - Micro Soldiers, Tanks & House"
                  prodImage={{
                    altText: "",
                    sourceUrl:
                      "/images/ProductCarouselItem__feature-img@2x.jpg",
                  }}
                  prodTags={[]}
                  prodSlug=""
                  prodAvgRating="3.33"
                  prodRegularPrice="£45.99"
                  prodSalePrice=""
                  className="block max-w-sm"
                />
              </li>
            ))}
        </ul>
      </div>
    </section>
    <Banner
      title="Want to earn rewards?"
      description="Buildarmy offers reward points for every purchase. For every pound (£) you spend, you will earn 1 point. 100 points is the equivalent of £1. Register now to start earning points."
      cta="Register"
      href="/about-us/rewards/"
      image={{
        src: "/images/banner-rewards-md.png",
        alt: "",
        layout: "fill",
        objectFit: "contain",
      }}
      reversed
    />
    <section className="bg-primary-light py-8 lg:py-16" id="latest-products">
      <div className="container mx-auto px-4 relative">
        <SectionHeading title="Latest Products" />
        <ul className="space-y-4 md:space-y-0 md:grid md: grid-cols-2 md:gap-4 xl:grid-cols-4 xl:gap-4">
          {Array(8)
            .fill("")
            .map((_, idx) => (
              <li key={idx}>
                <ProductCard
                  prodId="1"
                  prodName="Micro Tanks Bundle - Micro Soldiers, Tanks & House"
                  prodImage={{
                    altText: "",
                    sourceUrl:
                      "/images/ProductCarouselItem__feature-img@2x.jpg",
                  }}
                  prodTags={[]}
                  prodSlug=""
                  prodAvgRating="3.33"
                  prodRegularPrice="£45.99"
                  prodSalePrice=""
                  className="block max-w-sm"
                />
              </li>
            ))}
        </ul>
      </div>
    </section>
  </Layout>
);

export default HomePage;
