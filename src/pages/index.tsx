import { ArrowRightIcon } from "@heroicons/react/outline";
import Container from "@components/layout/Container";
import Layout from "@components/layout/Layout";
import Section from "@components/section/Section";
import Button from "@components/Button";
import ProductCard from "@components/ProductCard";
import ProductGrid from "@components/ProductGrid";
import { banners, USPs } from "src/data";
import Banner from "@components/Banner";
import SectionHeading from "@components/section/SectionHeading";
import { initializeApollo } from "@lib/apolloClient";
import USPList from "@components/usps/USPList";
import USPItem from "@components/usps/USPItem";
import CategoryItem from "@components/categories/CategoryItem";
import CategoryList from "@components/categories/CategoryList";
import {
  GetCategoriesDocument,
  GetProductsDocument,
  useGetCategoriesQuery,
  useGetProductsQuery,
} from "src/generated/graphql";

const Index = () => {
  // const { data, error, loading } = useGetProductsAndCategoriesQuery();
  const { error, data, loading } = useGetCategoriesQuery();
  const {
    error: err,
    data: dat,
    loading: loa,
  } = useGetProductsQuery({
    variables: { where: { category: "uncategorized" } },
  });

  if (err) console.error(err.graphQLErrors);

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
            <Button as="a" href="/shop" size={Button.size.LG}>
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
          <USPList>
            {USPs.map((usp, idx) => (
              <USPItem key={idx} usp={usp} />
            ))}
          </USPList>
        </Container>
      </Section>

      <Section padding={Section.padding.LG} variant={Section.variant.PRIMARY}>
        <Container>
          <SectionHeading>Product Categories</SectionHeading>
          <CategoryList>
            {data?.productCategories?.nodes?.map((category, idx) =>
              !category ? null : <CategoryItem category={category} key={idx} />
            )}
          </CategoryList>
          <div className="md:absolute md:top-0 md:right-4">
            <Button
              as="a"
              href="/shop"
              isFullWidth
              variant={Button.variant.SOLID_SECONDARY}
            >
              View all Categories
            </Button>
          </div>
        </Container>
      </Section>

      <Banner banner={banners[0]} isFlipped />

      <Section>
        <Container>
          <SectionHeading>Featured Products</SectionHeading>

          <ProductGrid>
            {dat?.products?.nodes?.map((product, idx) =>
              !product ? null : <ProductCard product={product} key={idx} />
            )}
          </ProductGrid>

          <div className="md:absolute md:top-0 md:right-4">
            <Button
              as="a"
              href="/shop"
              isFullWidth
              variant={Button.variant.SOLID_SECONDARY}
            >
              <span>View all</span>
              <ArrowRightIcon className="hidden md:block h-4 w-4" />
            </Button>
          </div>
        </Container>
      </Section>

      <Banner banner={banners[1]} />

      <Section className="bg-primary py-8 xl:py-16">
        <Container>
          <SectionHeading>Latest Products</SectionHeading>

          <ProductGrid>
            {dat?.products?.nodes?.map((product, idx) =>
              !product ? null : <ProductCard product={product} key={idx} />
            )}
          </ProductGrid>

          <div className="md:absolute md:top-0 md:right-4">
            <Button
              as="a"
              href="/shop"
              isFullWidth
              variant={Button.variant.SOLID_SECONDARY}
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

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GetCategoriesDocument,
  });

  await apolloClient.query({
    query: GetProductsDocument,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};

export default Index;
