import {
  GetProductsQueryVariables,
  useGetProductsQuery,
} from "../generated/graphql";
import ProductCard from "./ProductCard";
import Loader from "./Loader";

interface Props {
  variables: GetProductsQueryVariables;
}

const ProductGrid: React.FC<Props> = ({ variables }) => {
  const { error, data, loading } = useGetProductsQuery({
    variables: variables,
  });

  if (loading) {
    return <Loader loading={loading} />;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  const products = data?.products?.edges || [];

  return (
    <div className="overflow-auto mb-4 flex lg:grid gap-4 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product, idx) =>
        !product?.node ? null : <ProductCard key={idx} product={product.node} />
      )}
    </div>
  );
};

export default ProductGrid;
