"use client";

import React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselDots,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import AccountQuestion1 from "@/components/account-questions/account-question-1";
import { useRouter } from "next/navigation";

const AccountQuestionnaire = () => {
	const router = useRouter();

	const skipQuestions = () => {
		router.push("/home");
	};

	return (
		<div className="flex h-screen">
			<div className="basis-1/2 py-5 px-10 w-1/2">
				<div className="mb-24">
					<p
						className="text-right text-l hover: cursor-pointer"
						onClick={skipQuestions}
					>
						SKIP
					</p>
				</div>

				<div className="w-full">
					<Carousel>
						<CarouselContent>
							<CarouselItem>
								<AccountQuestion1 />
							</CarouselItem>
							<CarouselItem>
								<AccountQuestion1 />
							</CarouselItem>
							<CarouselItem>
								<AccountQuestion1 />
							</CarouselItem>
							<CarouselItem>
								<AccountQuestion1 />
							</CarouselItem>
						</CarouselContent>
						<CarouselDots />
						<CarouselPrevious className="fill-slate-300" />
						<CarouselNext />
					</Carousel>
				</div>
			</div>
			<div className="bg-[#00658A] flex items-center justify-center basis-3/5 p-10 rounded-l-[40%]">
				{/* <Image /> */}

				<div>
					<h1 className="text-2xl text-white text-left">
						&quot;<span className="text-[#b7ce63]">Education</span> is the most
						powerful weapon which you can use to
						<span className="text-[#b7ce63]"> change the world</span>.&quot;
					</h1>
					<p className="self-start text-slate-100 mt-5">-Nelson Mandela</p>
				</div>
			</div>
		</div>
	);
};

export default AccountQuestionnaire;
