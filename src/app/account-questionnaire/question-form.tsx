"use client";

import { Spinner } from "@/components/loaders/spinner";
import { GradButton } from "@/components/ui/grad-button";
import { Input } from "@/components/ui/input";
import { signupUser } from "@/lib/User/actions";
import { signUpSchema } from "@/lib/User/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { use, useRef } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

import { signupQuestions } from "@/data/signup-questions"

const QuestionForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const methods = useForm();
  const onSubmit = (data: any) => console.log(JSON.stringify(data));

  return (
    <form
      className="flex flex-col gap-6 w-full"
      ref={formRef}
      onSubmit={methods.handleSubmit(onSubmit)}
      noValidate
    >
      {signupQuestions.map((question, index) => (
        <fieldset key={index}>
          <legend>{question.question}</legend>
          {question.type === "radio" && (
            <>
              {question.options.map((option, index) => (
                <div key={index}>
                  <input type="radio" id={`${question.id}_${index}`} name={question.id} value={'value' in option ? option.value : ""} />
                  <label htmlFor={`${question.id}_${index}`}>{'value' in option ? option.value : ""}</label>
                </div>
              ))}
            </>
          )}
          {question.type === "checkbox" && (
            <>
              {question.options.map((option, index) => (
                <div key={index}>
                  <h6>{'title' in option ? option.title : ""}</h6>
                  {'options' in option ? option.options.map((item, index) => (
                    <>
                      <input type="checkbox" id={`${question.id}_${item.value}`} name={`${question.id}_${item.value}`} value={'value' in item ? item.value : ""} />
                      <label htmlFor={`${question.id}_${item.value}`}>{'value' in item ? item.value : ""}</label>
                    </>
                  )) : ""}
                </div>
              ))}
            </>
          )}
          {question.type === "select" && (
            <select name={question.id} id={question.id}>
              {question.options.map((option, index) => (
                <>
                  <option key={index} value={'value' in option ? option.value : ""}>
                    {'value' in option ? option.value : ""}
                  </option>
                </>
              ))}
            </select>
          )}
        </fieldset>
      ))}
      <Button type="submit">Submit</Button>
    </form>
  )
}

export default QuestionForm