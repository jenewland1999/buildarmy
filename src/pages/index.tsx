import Banner from "@components/Banner";
import Button from "@components/Button";
import Category from "@components/Category";
import Layout from "@components/Layout";
import ProductCard from "@components/ProductCard";
import ProductRating from "@components/ProductRating";
import SectionHeading from "@components/SectionHeading";
import USP from "@components/USP";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const HomePage = () => (
  <Layout>
    <div
      className="grid place-items-center min-h-screen bg-homepage-hero bg-cover"
      style={{ minHeight: "calc(100vh - 72px)" }}
    >
      <section
        id="hero"
        className="container px-4 mx-auto max-w-[360px] text-center"
      >
        <h1 className="mb-2 text-[3.5rem] leading-[67px] text-secondary-darkest font-display font-bold">
          World War In <span className="text-accent">Bricks</span>.
        </h1>
        <p className="mb-4 font-body font-medium leading-loose text-secondary-darkest">
          Build your armies with{" "}
          <span className="bg-accent-lightest p-0.5 rounded">original</span>,{" "}
          <span className="bg-accent-lightest p-0.5 rounded">premium</span>, and{" "}
          <span className="bg-accent-lightest p-0.5 rounded">
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
      <ul>
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
    <section
      id="categories"
      className="container px-4 py-8 mx-auto bg-primary-light"
    >
      <SectionHeading title="Product Categories" />
      <ul className="grid grid-cols-2 gap-4 mb-8">
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
        <Button variant="secondary" block>
          View all Categories
        </Button>
      </Link>
    </section>
    <Banner
      title="It's Competition Time!"
      description="Buildarmy is proud to present the fifth instalment of the image contest.
        Send in your photos (or rendered images) of military related brick
        creations for a chance to win a big prize."
      cta="Learn More"
      href="/blog/2020/04/buildarmy-annual-competition"
      imgSrc="/images/Banner--Competition__img@2x.jpg"
      imgAlt=""
    />
    <section
      className="container mx-auto px-4 py-8 bg-primary-light"
      id="featured-products"
    >
      <SectionHeading title="Featured Products" />
      <ProductCard
        prodId="1"
        prodName="Micro Tanks Bundle - Micro Soldiers, Tanks & House"
        prodImage={{
          altText: "",
          sourceUrl: "/images/ProductCarouselItem__feature-img@2x.jpg",
        }}
        prodTags={[]}
        prodSlug=""
        prodAvgRating="3.33"
        prodRegularPrice="£45.99"
        prodSalePrice=""
      />
    </section>
    <Banner
      title="Want to earn rewards?"
      description="Buildarmy offers reward points for every purchase. For every pound (£) you spend, you will earn 1 point. 100 points is the equivalent of £1. Register now to start earning points."
      cta="Register"
      href="/about-us/rewards/"
      imgSrc="/images/Banner--Rewards__img@2x.png"
      imgAlt=""
      reversed
    />
    <section
      className="container mx-auto px-4 py-8 bg-primary-light"
      id="featured-products"
    >
      <SectionHeading title="Latest Products" />
      <ProductCard
        prodId="1"
        prodName="Micro Tanks Bundle - Micro Soldiers, Tanks & House"
        prodImage={{
          altText: "",
          sourceUrl: "/images/ProductCarouselItem__feature-img@2x.jpg",
        }}
        prodTags={[]}
        prodSlug=""
        prodAvgRating="3.33"
        prodRegularPrice="£45.99"
        prodSalePrice=""
      />
    </section>
  </Layout>
);

export default HomePage;
