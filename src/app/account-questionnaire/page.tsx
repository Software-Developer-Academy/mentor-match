import { Button } from "@/components/ui/button";
import { GradButton } from "@/components/ui/grad-button";
import React from "react";

const AccountQuestionnaire = () => {
  return (
    <div>
      <h1>AccountQuestionnaire</h1>
      <Button>Click Me</Button>
      <Button variant="secondary">Click Me</Button>
      <Button variant={"tertiary"} className="bg-tertiary">
        Click Me
      </Button>

      <GradButton>hi</GradButton>
      <GradButton variant="secondary">hi</GradButton>
      <GradButton variant={"tertiary"}>hi</GradButton>
    </div>
  );
};

export default AccountQuestionnaire;
