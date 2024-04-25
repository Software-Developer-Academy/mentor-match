"use client";

import { useRouter } from "next/navigation";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Experience } from "./account-questions/Experience";
import { Goals } from "./account-questions/Goals";

const AccountQuestionnaire = () => {
  const router = useRouter();

  const skipQuestions = () => {
    router.push("/home");
  };

  return (
    <div className="flex justify-center items-center gap-24 h-full">
      <div className="basis-1/2 px-10 max-w-[560px] py-12 mx-auto w-full">
        <div className="mb-24">
          <p
            className="text-center text-l hover: cursor-pointer"
            onClick={skipQuestions}
          >
            SKIP
          </p>
        </div>

        <div className="w-full">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Goals />
              </CarouselItem>

              <CarouselItem>
                <Experience />
              </CarouselItem>

              <CarouselItem>
                <Experience />
              </CarouselItem>
            </CarouselContent>
            <CarouselDots />
            <CarouselPrevious className="fill-slate-300" />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <div className="content-center max-w-[854px] relative text-white h-full px-16">
        <h1 className="text-4xl text-white text-left">
          &quot;<span className="text-[#b7ce63]">Education</span> is the most
          powerful weapon which you can use to
          <span className="text-[#b7ce63]"> change the world</span>.&quot;
        </h1>

        <p className="text-xl self-start text-slate-100 mt-5">
          -Nelson Mandela
        </p>

        <div
          aria-hidden="true"
          className="absolute w-full h-[190%] short:h-[195%] tall-desktop:h-[200%] bg-[#00658A] -z-10 top-[50%] translate-y-[-50%] rounded-l-[50%] right-0"
        ></div>
      </div>
    </div>
  );
};

export default AccountQuestionnaire;
