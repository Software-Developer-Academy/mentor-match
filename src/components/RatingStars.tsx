import { Star } from "@/svgs/star";
import { StarProps } from "@/types";

const starStyles = {
  styleSize: {
    small: {
      width: "w-[15px]",
      gap: "gap-1",
    },
    medium: {
      width: "w-[20px]",
      gap: "gap-2",
    },
    large: {
      width: "w-[25px]",
      gap: "gap-3",
    },
  },
  styleAlign: {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  },
};

const RatingStars = ({
  id,
  rating = 0,
  colorClass = "tertiary",
  size = "medium",
  align = "center",
}: StarProps) => {
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
  const starSize = starStyles.styleSize[size].width;
  const starGap = starStyles.styleSize[size].gap;
  const starAlign = starStyles.styleAlign[align];

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
