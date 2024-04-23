import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export const Experience = () => {
  const [radioState, setRadioState] = useState("");
  const radioCheck = (currentState: string) => {
    setRadioState(currentState);
  };

  return (
    <div>
      <div className="flex flex-col justify-center pb-16">
        <h2 className="mb-6 text-2xl">What is your experience level?</h2>
        <RadioGroup defaultValue="option-one">
          <div
            className={
              radioState === "A"
                ? "flex items-center space-x-2 py-3 bg-[#C7D59F] rounded-sm transition-colors hover:cursor-pointer"
                : "flex items-center space-x-2 py-3 bg-[#efefef] rounded-sm transition-colors hover:bg-[#e5e5e5] duration-300 cursor-pointer"
            }
            onClick={() => {
              radioCheck("A");
            }}
          >
            <RadioGroupItem
              className="invisible"
              value="Less than 2 years"
              id="option-one"
            />
            <Label className="cursor-pointer" htmlFor="option-one">
              Less than 2 years
            </Label>
          </div>
          <div
            className={
              radioState === "B"
                ? "flex items-center space-x-2 py-3 bg-[#C7D59F] rounded-sm transition-colors hover: cursor-pointer "
                : "flex items-center space-x-2 py-3 bg-[#efefef] rounded-sm transition-colors hover:bg-[#e5e5e5] duration-300 cursor-pointer"
            }
            onClick={() => {
              radioCheck("B");
            }}
          >
            <RadioGroupItem
              className="invisible"
              value="2 - 5 years"
              id="option-two"
            />
            <Label className="cursor-pointer" htmlFor="option-two">
              2 - 5 years
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
              value="More than 5 years"
              id="option-three"
            />
            <Label className="cursor-pointer" htmlFor="option-three">
              More than 5 years
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};
