import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import { LoadingNav } from "./server";

const Navbar = () => {
  return (
    <nav className="glassmorphism-80 fixed z-50 w-full p-2 bg-white">
      <div className="lg:container w-full flex justify-between">
        <Link href="/" className="flex flex-center gap-2 items-center">
          <Image
            src="/images/logo.svg"
            alt="Mentor Match Logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <h1 className="text-2xl text-primary font-bold hidden md:inline-block">
            Mentor Match
          </h1>
        </Link>

        <Suspense fallback={<>Loading...</>}>
          <LoadingNav />
        </Suspense>
      </div>
    </nav>
  );
};

export default Navbar;
