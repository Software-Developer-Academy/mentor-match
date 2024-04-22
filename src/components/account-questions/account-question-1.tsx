import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const AccountQuestion1 = () => {
	const [radioState, setRadioState] = useState("A");
	const radioCheck = (currentState: string) => {
		console.log(currentState);
		setRadioState(currentState);
	};

	return (
		<div>
			<div className="flex flex-col justify-center pb-16">
				<h2 className="mb-6 text-2xl">What are your goals?</h2>
				<RadioGroup defaultValue="option-one">
					<div
						className={
							radioState === "A"
								? "flex items-center space-x-2 py-3  bg-[#C7D59F]  rounded-sm transition-colors hover: cursor-pointer "
								: "flex items-center space-x-2 py-3  bg-[#efefef] rounded-sm transition-colors hover:bg-[#e5e5e5] duration-300 cursor-pointer"
						}
						onClick={() => {
							radioCheck("A");
						}}
					>
						<RadioGroupItem
							className="invisible"
							value="Learn something new"
							id="option-one"
						/>
						<Label className="cursor-pointer" htmlFor="option-one">
							Learn something new
						</Label>
					</div>
					<div
						className={
							radioState === "B"
								? "flex items-center space-x-2 py-3  bg-[#C7D59F]  rounded-sm transition-colors hover: cursor-pointer "
								: "flex items-center space-x-2 py-3  bg-[#efefef] rounded-sm transition-colors hover:bg-[#e5e5e5] duration-300 cursor-pointer"
						}
						onClick={() => {
							radioCheck("B");
						}}
					>
						<RadioGroupItem
							className="invisible"
							value="Master a skill"
							id="option-two"
						/>
						<Label className="cursor-pointer" htmlFor="option-two">
							Master a skill
						</Label>
					</div>
					<div
						className={
							radioState === "C"
								? "flex items-center space-x-2 py-3  bg-[#C7D59F]  rounded-sm transition-colors hover: cursor-pointer "
								: "flex items-center space-x-2 py-3  bg-[#efefef] rounded-sm transition-colors hover:bg-[#e5e5e5] duration-300 cursor-pointer"
						}
						onClick={() => {
							radioCheck("C");
						}}
					>
						<RadioGroupItem
							className="invisible"
							value="Still trying to figure it out"
							id="option-three"
						/>
						<Label className="cursor-pointer" htmlFor="option-three">
							Still trying to figure it out
						</Label>
					</div>
				</RadioGroup>
			</div>
		</div>
	);
};

export default AccountQuestion1;
