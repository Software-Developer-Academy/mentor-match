import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import RatingStars from "@/components/RatingStars";

function Card() {
  return (
    <div className="flex flex-col items-center gap-3 rounded border border-black p-8 px-16 text-center">
      <Image
        alt="John Doe avatar"
        width={75}
        height={75}
        src="/avatars/11.svg"
        className="mx-auto"
      />
      <h2 className="text-2xl">John Doe</h2>

      <RatingStars id="1" rating={4} />

      <div className="flex gap-2">
        <Badge variant="outline">HTML</Badge>
        <Badge variant="outline">HTML</Badge>
        <Badge variant="outline">HTML</Badge>
      </div>
    </div>
  );
}

export default Card;
