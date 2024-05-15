import Link from "next/link";

import NotFoundSvg from "@/svgs/not-found-svg";

export default function NotFound() {
  return (
    <div className="container min-h-screen w-full lg:w-2/3 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
      <div className="w-2/3 lg:w-1/3">
        <NotFoundSvg />
      </div>
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-[3rem] text-primary leading-tight my-5 lg:my-0">
          Not Found
        </h2>
        <p>The requested profile does not exist</p>
        <Link href="/" className="block text-primary mt-5">
          Return Home
        </Link>
      </div>
    </div>
  );
}
