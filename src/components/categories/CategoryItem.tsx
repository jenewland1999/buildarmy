import Link from "next/link";
import WrappedImage from "../WrappedImage";
import { ProductCategorySnippetFragment } from "../../generated/graphql";

interface Props {
  category: ProductCategorySnippetFragment;
}

const CategoryItem: React.FC<Props> = ({ category }) => {
  return (
    <li>
      <Link href={`/shop?category=${category.slug}`}>
        <a className="relative block text-center bg-primary-lightest shadow-md h-full">
          <WrappedImage
            className="aspect-w-1 aspect-h-1"
            src={
              category.image?.sourceUrl && category.image.sourceUrl !== ""
                ? category.image.sourceUrl
                : "/images/missing-img.svg"
            }
            alt={category?.image?.altText ?? ""}
            layout="fill"
            objectFit="scale-down"
          />
          <span className="bg-primary-lightest block p-2">{category.name}</span>
        </a>
      </Link>
    </li>
  );
};

export default CategoryItem;
