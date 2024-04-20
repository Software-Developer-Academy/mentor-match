import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Navbar from "@/components/Navbar"
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";

import HeroImage1 from "@/app/svgs/hero-image1";
import Image1 from "@/app/svgs/image1";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex w-full flex-col items-center justify-between">
        <section className="w-full md:min-h-[100dvh] h-min flex flex-col md:flex-row bg-cover items-center justify-center py-32 lg:py-20 md:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <div className="flex lg:w-1/2 w-full flex-col text-center md:text-left px-10 md:px-10 lg:px-20">
              <h1 className="text-4xl lg:text-5xl font-bold">
                Find the <span className="text-primary">right mentor</span> and carve your <span className="text-primary">path to success</span>
              </h1>
              <p className="text-lg mt-7">
                Our platform helps you find the perfect mentor to guide you through your personal and professional development journey.
              </p>
              <Button asChild className="mt-10 max-w-min py-4 px-8 mx-auto md:mx-0">
                <Link href="/signup">Join Mentor Match today</Link>
              </Button>
            </div>
            <div className="flex w-1/2 h-full flex-col items-center justify-center mt-20 md:m-0">
              TODO: Hero animation
            </div>
          </div>
        </section>

        <section className="container flex flex-col-reverse md:flex-row gap-10 items-center justify-center py-10">
          <div className="flex w-1/2 flex-col items-center justify-center object-contain">
            <div className="relative w-full h-full lg:max-w-sm">
              <Image1 />
            </div>
          </div>
          <div className="flex w-full md:w-1/2 text-center md:text-left flex-col items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Do you feel like you're lacking direction and motivation?
            </h2>
          </div>
        </section>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Docs{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Learn{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Templates{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Explore starter templates for Next.js.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Deploy{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
