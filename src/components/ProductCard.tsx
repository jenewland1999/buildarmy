import Image from "next/image";
import Link from "next/link";

import Button from "./Button";
import ProductRating from "./ProductRating";

type ProductCardProps = {
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
};

const ProductCard = ({
  prodId,
  prodName,
  prodImage,
  prodAvgRating,
  prodTags,
  prodSlug,
  prodRegularPrice,
}: ProductCardProps) => (
  <Link href={`/shop/product/${prodSlug}`}>
    <article className="bg-primary-lightest shadow-lg">
      <Image
        src={prodImage.sourceUrl}
        alt={prodImage.altText}
        layout="responsive"
        height={3}
        width={4}
      />
      <div className="p-4">
        <h3 className="text-secondary-darkest mb-2 font-display font-bold">
          {prodName}
        </h3>
        <ProductRating className="mb-4" rating={prodAvgRating} />
        <div className="flex justify-between items-center">
          <p className="text-secondary-darkest text-2xl font-display font-bold">
            {prodRegularPrice}{" "}
            <span className="text-primary-darkest text-sm font-body font-normal">
              inc. VAT
            </span>
          </p>
          <Button variant="primary" size="lg">
            Add to Cart
          </Button>
        </div>
      </div>
    </article>
  </Link>
);

export default ProductCard;
