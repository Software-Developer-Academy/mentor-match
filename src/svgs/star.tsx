import { StarProps } from "@/types";

export const Star = ({ id, fill, colorClass = "tertiary" }: StarProps) => {
  return (
    <svg
      className={`star ${colorClass}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      <defs>
        <linearGradient id={`${id}-full`}>
          <stop className="stop-color" offset="100%" />
        </linearGradient>
        <linearGradient id={`${id}-half`}>
          <stop className="stop-color" offset="50%" />
          <stop className="stop-color2" offset="50%" stop-opacity="0.2" />
        </linearGradient>
        <linearGradient id={`${id}-transparent`}>
          <stop className="stop-color2" offset="100%" stop-opacity="0.2"  />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${id}-${fill})`}
        d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
    l11.547-1.2L16.026,0.6L20.388,10.918z"
      />
    </svg>
  );
};
