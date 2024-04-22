import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const AccountQuestion1 = () => {
	return (
		<div>
			<div className="flex flex-col justify-center pb-16">
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
						<Label htmlFor="option-three">Still trying to figure it out</Label>
					</div>
				</RadioGroup>
			</div>
		</div>
	);
};

export default AccountQuestion1;
