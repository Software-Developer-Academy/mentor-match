import { Star } from "@/svgs/star";

type StarProps = {
  id: string;
  rating: number;
  color?: "primary" | "secondary" | "tertiary";
};

const RatingStars = ({ id, rating, color }: StarProps) => {
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
  return (
    <div className="flex items-center justify-center">
      {stars.map((star, index) => (
        <div key={index} className="w-[20px] px-[2px]">
          <Star id={id} fill={star} colorClass={color} />
        </div>
      ))}
    </div>
  );
};

export default RatingStars;
