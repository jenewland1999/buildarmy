import Image from "next/image";
import Link from "next/link";
import { ProductSnippetFragment } from "src/generated/graphql";
import Button from "./Button";
import ProductBadge from "./ProductBadge";

interface Props {
  product: ProductSnippetFragment;
}

const ProductCard = (props: Props) => {
  const { product } = props;

  console.log(product);

  return (
    <article className="relative flex-shrink-0 bg-primary-lightest max-w-xs mb-4 mr-4 border border-primary rounded-md lg:m-0">
      <Image
        src={
          product?.image?.sourceUrl
            ? product.image.sourceUrl
            : "/images/product.jpg"
        }
        alt={product?.image?.altText ? product.image.altText : ""}
        layout="responsive"
        height={3}
        width={4}
        className="rounded-t-md"
      />
      <div className="p-4">
        <ul className="flex items-center absolute top-4 left-4">
          <ProductBadge>New</ProductBadge>
          <ProductBadge>{product.featured}</ProductBadge>
        </ul>
        <h3 className="text-secondary-darkest mb-6 leading-tight font-display font-bold">
          {product.name}
        </h3>
        <p className="mb-4 leading-none text-secondary-darkest text-2xl font-display font-bold">
          {product.__typename === "SimpleProduct" && product.price}
          <small className="ml-1 text-secondary-lightest text-xs font-normal">
            inc. VAT
          </small>
        </p>
        <Link href="/shop">
          <a className="after:absolute after:inset-0"></a>
        </Link>
        <div className="relative z-10">
          <Button isFullWidth>Add to Basket</Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
