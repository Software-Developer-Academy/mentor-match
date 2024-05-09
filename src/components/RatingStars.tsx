import { Star } from "@/svgs/star";
import { StarProps } from "@/types";

const RatingStars = ({ 
  id, 
  rating = 0, 
  colorClass = "tertiary",
  size = "medium",
  align = "center" }: StarProps) => {
  const fullStars = Math.floor(rating);
  let hasHalfStar = rating % 1 !== 0;
  const stars = Array.from({ length: 5 }, (_, i) => {
    if (i < fullStars) {
      return "full";
    } else if (hasHalfStar) {
      hasHalfStar = false;
      return "half";
    }
    return "transparent";
  });
  const starSize = size === "small" ? "w-[15px]" : size === "medium" ? "w-[20px]" : size === "large" ? "w-[25px]" : "";
  const starGap = size === "small" ? "gap-1" : size === "medium" ? "gap-2" : size === "large" ? "gap-3" : "";
  const starAlign = align === "left" ? "justify-start" : align === "center" ? "justify-center" : align === "right" ? "justify-end" : "";

  return (
    <div className={`flex items-center ${starGap} ${starAlign}`}>
      {stars.map((star, index) => (
        <div key={index} className={`${starSize}`}>
          <Star id={id} colorClass={colorClass} fill={star} />
        </div>
      ))}
    </div>
  );
};

export default RatingStars;
