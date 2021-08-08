import Image from "next/image";
import Link from "next/link";
import { isNumber } from "lodash";
import { StarIcon } from "@heroicons/react/solid";
import { ProductSnippetFragment } from "../generated/graphql";
import Button from "./Button";

interface Props {
  product: ProductSnippetFragment;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  if (product.__typename !== "SimpleProduct") {
    return null;
  }

  const isInStock = () =>
    product.stockStatus === "IN_STOCK" &&
    isNumber(product.stockQuantity) &&
    product.stockQuantity > 0;

  return (
    <article className="relative mb-4 flex flex-col w-full max-w-xs flex-shrink-0 bg-primary-lightest border border-primary rounded-lg shadow lg:m-0">
      <Image
        src={
          product.image?.sourceUrl && product.image.sourceUrl !== ""
            ? product.image.sourceUrl
            : "/images/missing-img.svg"
        }
        alt={product?.image?.altText ? product.image.altText : ""}
        layout="responsive"
        height={3}
        width={4}
        className="rounded-t-lg"
      />
      <div className="p-4 flex flex-grow flex-col items-start justify-end">
        <Link href={`/shop/${product.slug}`}>
          <a className="mb-auto hover:underline">
            <h3 className="mb-2 font-display font-bold leading-tight line-clamp-2">
              {product.name}
            </h3>
          </a>
        </Link>
        <p className="mb-4 px-1 pt-px pr-2 rounded-full inline-flex items-center bg-accent-lightest bg-opacity-25">
          <span className="sr-only">Rating</span>
          <StarIcon className="h-5 w-5 text-accent" aria-hidden="true" />
          <span className="ml-1 font-display font-bold">
            {product.averageRating?.toFixed(2)}
          </span>
        </p>
        <p className="mb-2 font-display font-bold text-2xl">
          {product.price}
          <small className="font-body font-semibold text-primary-darkest text-sm ml-1">
            Excl. <abbr title="Value Added Tax">VAT</abbr>
          </small>
        </p>
        {isInStock() ? (
          <Button isFullWidth>Add to Basket</Button>
        ) : (
          <Button disabled isFullWidth>
            Out of Stock
          </Button>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
