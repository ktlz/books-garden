import React from "react";
import { FaStar } from "react-icons/fa";

type StarRatingProps = {
  rating: number;
  className?: string;
  color?: string;
};

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  color,
  className = "",
}) => {
  return (
    <div className={`flex justify-center gap-1 ${className}`}>
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar
          key={index}
          style={index < rating ? { color } : { color: "#E0E0E0" }}
          size={16}
        />
      ))}
    </div>
  );
};

export default StarRating;
