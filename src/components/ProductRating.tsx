import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HTMLAttributes } from "react";

interface ProductRatingProps extends HTMLAttributes<HTMLElement> {
  className: string;
  rating: string;
}

const ProductRating = ({ className, rating, ...props }: ProductRatingProps) => (
  <div className={`flex ${className ?? ""}`} {...props}>
    <div className="flex relative text-secondary">
      <Rating icon="star" total={5} />
      <div
        className={`flex absolute overflow-hidden top-0 text-accent`}
        style={{ width: `${parseFloat(rating) * 2 * 10}%` }}
      >
        <Rating icon="star" total={5} />
      </div>
    </div>
  </div>
);

// TODO: Find a less "hacky" implementation for ratings
const Rating = ({ icon, total }: { icon: IconProp; total: number }) => (
  <>
    {Array(total)
      .fill("")
      .map((_, i) => (
        <FontAwesomeIcon key={i} icon={icon} />
      ))}
  </>
);

export default ProductRating;
