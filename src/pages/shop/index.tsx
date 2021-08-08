import { GetStaticProps } from "next";
import { initializeApollo } from "../../../lib/apolloClient";
import Container from "../../components/STRUCTURE/Container";
import Layout from "../../components/STRUCTURE/Layout";
import ProductGrid from "../../components/ProductGrid";
import Section from "../../components/section/Section";
import SectionHeading from "../../components/section/SectionHeading";
import {
  GetProductsDocument,
  OrderEnum,
  ProductsOrderByEnum,
} from "../../generated/graphql";

const LatestProductsQueryVars = {
  first: 1000,
  where: {
    orderby: [
      {
        field: ProductsOrderByEnum.Date,
        order: OrderEnum.Desc,
      },
    ],
  },
};

const Shop = () => {
  return (
    <Layout>
      <Section className="bg-primary py-8 xl:py-16">
        <Container>
          <SectionHeading>All Products</SectionHeading>

          <ProductGrid variables={LatestProductsQueryVars} />
        </Container>
      </Section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

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
    revalidate: 1,
  };
};
export default Shop;
