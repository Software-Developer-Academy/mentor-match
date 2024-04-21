"use client";

import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
const TestForm = () => {
  return (
    <div>
      <h1>testForm</h1>
      <Label>Hello</Label>
      <Input placeholder="John Doe" />

      <h1>Font check</h1>
      <p>paragraph font check</p>
    </div>
  );
};

export default TestForm;
