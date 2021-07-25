import Image from "next/image";
import Button from "./Button";
import ProductBadge from "./ProductBadge";

interface Props {}

const ProductCard = (props: Props) => {
  return (
    <article className="relative flex-shrink-0 bg-primary-lightest max-w-xs mb-4 mr-4 border border-primary rounded-md lg:m-0">
      <Image
        src="/images/product.jpg"
        alt=""
        layout="responsive"
        height={3}
        width={4}
        className="rounded-t-md"
      />
      <div className="p-4">
        <ul className="flex items-center absolute top-4 left-4">
          <ProductBadge>New</ProductBadge>
          <ProductBadge>Best Seller</ProductBadge>
        </ul>
        <h3 className="text-secondary-darkest mb-6 leading-tight font-display font-bold">
          Micro Tanks Bundle - Micro Soldiers, Tanks &amp; House
        </h3>
        <p className="mb-4 leading-none text-secondary-darkest text-2xl font-display font-bold">
          £45.99
          <small className="ml-1 text-secondary-lightest text-xs font-normal">
            inc. VAT
          </small>
        </p>
        <a href="/shop" className="after:absolute after:inset-0"></a>
        <Button isFullWidth>Add to Basket</Button>
      </div>
    </article>
  );
};

export default ProductCard;
