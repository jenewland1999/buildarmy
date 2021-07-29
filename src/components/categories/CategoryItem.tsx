import Link from "next/link";
import WrappedImage from "@components/WrappedImage";
import { ProductCategorySnippetFragment } from "src/generated/graphql";

interface Props {
  category: ProductCategorySnippetFragment;
}

const CategoryItem = (props: Props) => {
  const { category } = props;

  return (
    <li>
      <Link href={`/shop?category=${category.slug}`}>
        <a className="relative block text-center bg-primary-lightest shadow-md h-full">
          {category.image && (
            <WrappedImage
              className="aspect-w-1 aspect-h-1"
              imageProps={{
                src: category?.image?.sourceUrl ?? "",
                alt: category?.image?.altText ?? "",
                layout: "fill",
                objectFit: "scale-down",
              }}
            />
          )}
          <span className="bg-primary-lightest block p-2">{category.name}</span>
        </a>
      </Link>
    </li>
  );
};

export default CategoryItem;
