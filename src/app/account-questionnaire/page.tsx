"use client";

import { Button } from "@/components/ui/button";
// import { GradButton } from "@/components/ui/grad-button";
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
	Carousel,
	CarouselContent,
	CarouselDots,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import AccountQuestion1 from "@/components/account-questions/account-question-1";

const AccountQuestionnaire = () => {
	return (
		<div className="flex h-screen">
			<div className="basis-1/2 py-5 px-10">
				<div className="mb-10">
					<p className="text-right">SKIP</p>
				</div>

				{/* <div className="flex flex-col justify-center pb-16">
					<h2 className="mb-6 text-2xl">What are your goals?</h2>
					<RadioGroup defaultValue="option-one">
						<div className="flex items-center space-x-2">
							<RadioGroupItem value="option-one" id="option-one" />
							<Label htmlFor="option-one">Learn something new</Label>
						</div>
						<div className="flex items-center space-x-2">
							<RadioGroupItem value="option-two" id="option-two" />
							<Label htmlFor="option-two">Master a skill</Label>
						</div>
						<div className="flex items-center space-x-2">
							<RadioGroupItem value="option-three" id="option-three" />
							<Label htmlFor="option-three">
								Still trying to figure it out
							</Label>
						</div>
					</RadioGroup>
				</div> */}

				<div className="bg-slate-500">
					<Carousel>
						<CarouselContent>
							<CarouselItem>
								<AccountQuestion1 />
							</CarouselItem>
							<CarouselItem>bro</CarouselItem>
							<CarouselItem>bro</CarouselItem>
						</CarouselContent>
						<CarouselDots />
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</div>
			<div className="bg-[#00658A] flex items-center justify-center basis-1/2 p-10 rounded-l-[40%]">
				{/* <Image /> */}

				<div>
					<h1 className="text-2xl text-white text-left">
						"<span className="text-[#b7ce63]">Education</span> is the most
						powerful weapon which you can use to{" "}
						<span className="text-[#b7ce63]">change the world</span>."
					</h1>
					<p className="self-start text-slate-100 mt-5">-Nelson Mandela</p>
				</div>
			</div>
		</div>
	);
};

export default AccountQuestionnaire;
