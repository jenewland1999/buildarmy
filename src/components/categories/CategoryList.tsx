import Loader from "../Loader";
import {
  GetCategoriesQueryVariables,
  useGetCategoriesQuery,
} from "../../generated/graphql";
import CategoryItem from "./CategoryItem";

interface Props {
  variables: GetCategoriesQueryVariables;
}

const CategoryList: React.FC<Props> = ({ variables }) => {
  const { error, data, loading } = useGetCategoriesQuery({
    variables,
  });

  if (loading) {
    return <Loader loading={loading} />;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  const categories = data?.productCategories?.edges || [];

  return (
    <ul className="grid grid-cols-2 gap-4 mb-4 md:grid-cols-4">
      {categories.map((category, idx) =>
        !category?.node ? null : (
          <CategoryItem key={idx} category={category.node} />
        )
      )}
    </ul>
  );
};

export default CategoryList;
