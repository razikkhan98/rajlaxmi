import { useState } from "react";
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";
import { FaRegHeart, FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStar, FaStarHalf } from "react-icons/fa6";
//   Rating Change
export const renderStars = (product_id, rating, product) => {
  if (product_id == product?.id) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(
          <TiStarFullOutline
            key={i}
            className="text-color-terracotta"
            fontSize={20}
          />
        );
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(
          <TiStarHalfOutline
            key={i}
            className="text-color-terracotta"
            fontSize={20}
          />
        );
      } else {
        stars.push(
          <TiStarOutline
            key={i}
            className="text-color-terracotta"
            fontSize={20}
          />
        );
      }
    }
    return stars;
  }
};

 // Rating UI
 export const StarRating = ({ outOf = 5, onChange,SetRating }) => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  const stars = Array.from({ length: outOf }, (_, index) => index + 1);

  const handleClick = (e, star) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const clickPosition = e.clientX - left;
    const isHalf = clickPosition < width / 2;

    const newRating = isHalf ? star - 0.5 : star;
    setRating(newRating);
    SetRating(newRating)
    if (onChange) onChange(newRating);
  };

  const handleHover = (e, star) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const hoverPosition = e.clientX - left;
    const isHalf = hoverPosition < width / 2;
    setHovered(isHalf ? star - 0.5 : star);
  };

  const resetHover = () => {
    setHovered(0);
  };

  const renderIcon = (index) => {
    const current = hovered || rating;
    if (current >= index) return <FaStar className="me-1 " />;
    if (current >= index - 0.5) return <FaStarHalfAlt className="me-1 " />;
    return <FaRegStar className="me-1" />;
  };

  return (
    <div>
      <div className="rating d-flex">
        {stars.map((star) => (
          <span
            className="d-flex mx-1"
            key={star}
            onClick={(e) => handleClick(e, star)}
            onMouseMove={(e) => handleHover(e, star)}
            onMouseLeave={resetHover}
          >
            {renderIcon(star)}
          </span>
        ))}
      </div>
    </div>
  );
};