import Image from "next/image";
import { GetStaticProps } from "next";
import { ArrowRightIcon } from "@heroicons/react/outline";
import {
  GetCategoriesDocument,
  GetProductsDocument,
  OrderEnum,
  ProductsOrderByEnum,
} from "../generated/graphql";
import Layout from "../components/layout/Layout";
import Button, { Size, Variant as ButtonVariant } from "../components/Button";
import heroImage from "../../public/images/hero-image.jpg";
import Section, {
  Padding,
  Variant as SectionVariant,
} from "../components/section/Section";
import Container from "../components/layout/Container";
import USPList from "../components/usps/USPList";
import { banners, USPs } from "../data";
import USPItem from "../components/usps/USPItem";
import SectionHeading from "../components/section/SectionHeading";
import CategoryList from "../components/categories/CategoryList";
import CTASection from "../components/CTASection";
import ProductGrid from "../components/ProductGrid";
import { initializeApollo } from "../../lib/apolloClient";

const CategoriesQueryVars = { first: 4 };
const FeaturedProductsQueryVars = {
  first: 8,
  where: { featured: true, supportedTypesOnly: true },
};
const LatestProductsQueryVars = {
  first: 12,
  where: {
    orderby: [
      {
        field: ProductsOrderByEnum.Date,
        order: OrderEnum.Desc,
      },
    ],
    supportedTypesOnly: true,
  },
};

const Index = () => {
  return (
    <Layout>
      <section className="relative lg:grid lg:grid-cols-2 lg:shadow-md">
        <div className="relative max-w-screen-xl mx-auto px-4">
          <div className="py-8 xs:py-16 md:px-48 md:text-center lg:text-left lg:px-0 lg:py-48 lg:max-w-sm">
            <h2 className="mb-4 font-display font-bold text-5xl xs:text-6xl">
              World War in <span className="text-accent">Bricks</span>
            </h2>
            <p className="mb-4 xs:text-lg">
              Build your armies with original, premium, and historically
              accurate brick scale models and minifigures.
            </p>
            <div className="space-x-4">
              <Button as="a" href="/shop" size={Size.LG}>
                Shop Now
              </Button>
              <Button
                as="a"
                href="/about-us"
                size={Size.LG}
                variant={ButtonVariant.LINK_SECONDARY}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="relative h-80 lg:absolute lg:right-0 lg:h-full lg:w-2/4">
          <Image
            src={heroImage}
            alt=""
            priority={true}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </div>
      </section>

      <Section
        className="-mt-32"
        padding={Padding.LG}
        variant={SectionVariant.PLAIN}
      >
        <Container>
          <USPList>
            {USPs.map((usp, idx) => (
              <USPItem key={idx} usp={usp} />
            ))}
          </USPList>
        </Container>
      </Section>

      <Section padding={Padding.LG} variant={SectionVariant.PLAIN}>
        <Container>
          <SectionHeading>Product Categories</SectionHeading>
          <CategoryList variables={CategoriesQueryVars} />
          <div className="md:absolute md:top-0 md:right-4">
            <Button
              as="a"
              href="/shop"
              isFullWidth
              variant={ButtonVariant.SOLID_SECONDARY}
            >
              View all Categories
            </Button>
          </div>
        </Container>
      </Section>

      <CTASection banner={banners[0]} isFlipped />

      <Section>
        <Container>
          <SectionHeading>Featured Products</SectionHeading>

          <ProductGrid variables={FeaturedProductsQueryVars} />

          <div className="md:absolute md:top-0 md:right-4">
            <Button
              as="a"
              href="/shop"
              isFullWidth
              variant={ButtonVariant.SOLID_SECONDARY}
            >
              <span>View all</span>
              <ArrowRightIcon className="hidden md:block h-4 w-4" />
            </Button>
          </div>
        </Container>
      </Section>

      <CTASection banner={banners[1]} />

      <Section className="bg-primary py-8 xl:py-16">
        <Container>
          <SectionHeading>Latest Products</SectionHeading>

          <ProductGrid variables={LatestProductsQueryVars} />

          <div className="md:absolute md:top-0 md:right-4">
            <Button
              as="a"
              href="/shop"
              isFullWidth
              variant={ButtonVariant.SOLID_SECONDARY}
            >
              <span>View all</span>
              <ArrowRightIcon className="hidden md:block h-4 w-4" />
            </Button>
          </div>
        </Container>
      </Section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  /**
   * Query to retrieve the first four product categories
   */
  await apolloClient.query({
    query: GetCategoriesDocument,
    variables: CategoriesQueryVars,
  });

  /**
   * Query to retrieve the first 12 featured products
   */
  await apolloClient.query({
    query: GetProductsDocument,
    variables: FeaturedProductsQueryVars,
  });

  /**
   * Query to retrieve the first 12 latest products
   */
  await apolloClient.query({
    query: GetProductsDocument,
    variables: LatestProductsQueryVars,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default Index;
