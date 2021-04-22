import { ComponentPropsWithoutRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

import Button from "./Button";
import ProductRating from "./ProductRating";
interface ProductCardProps extends ComponentPropsWithoutRef<"a"> {
  prodId: string;
  prodName: string;
  prodImage: {
    altText: string;
    sourceUrl: string;
  };
  prodAvgRating: string;
  prodTags: string[];
  prodSlug: string;
  prodRegularPrice: string;
  prodSalePrice: string;
}

const ProductCard = ({
  prodId,
  prodName,
  prodImage,
  prodAvgRating,
  prodTags,
  prodSlug,
  prodRegularPrice,
  prodSalePrice,
  ...props
}: ProductCardProps) => (
  <Link href={`/shop/product/${prodSlug}`} passHref>
    <a {...props}>
      <article className="bg-primary-lightest shadow rounded-md">
        <Image
          src={prodImage.sourceUrl}
          alt={prodImage.altText}
          layout="responsive"
          height={3}
          width={4}
          className="rounded-t-md"
        />
        <div className="p-4">
          <ul>
            {prodTags &&
              prodTags.map((tag, index) => <li key={index}>{tag}</li>)}
          </ul>
          <h3 className="text-secondary-darkest mb-2 font-display font-bold">
            {prodName}
          </h3>
          <ProductRating className="mb-4" rating={prodAvgRating} />
          <div className="flex justify-between items-center">
            <p className="text-secondary-darkest text-2xl font-display font-bold">
              {prodRegularPrice}
              <small className="ml-1 text-secondary-lightest text-xs font-normal">
                inc. VAT
              </small>
            </p>
            <Button variant="primary" size="lg">
              <FontAwesomeIcon
                icon="cart-plus"
                title={`Add ${prodName} to cart`}
              />
            </Button>
          </div>
        </div>
      </article>
    </a>
  </Link>
);

export default ProductCard;
