"use client";

import { Spinner } from "@/components/loaders/spinner";
import { GradButton } from "@/components/ui/grad-button";
import { Input } from "@/components/ui/input";
import { signupUser } from "@/lib/User/actions";
import { signUpSchema } from "@/lib/User/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { use, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { signupQuestions } from "@/data/signup-questions"

const QuestionForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const formSchema = z.object({
    q1: z.string(),
    q2: z.string(),
    q3: z.array(z.string()),
    q4: z.string(),
    q5: z.string()
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      q1: "",
      q2: "",
      q3: [],
      q4: "",
      q5: ""
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => console.log(JSON.stringify(values));

  return (
    <div className="w-full max-h-screen p-5">
      <Carousel className="pb-5">
        <Form {...form}>
          <form
            className="flex flex-col gap-6 w-full"
            ref={formRef}
            onSubmit={form.handleSubmit(onSubmit)}
            noValidate
          >
            <CarouselContent className="max-h-[75dvh]">
              {signupQuestions.map((question, index) => (
                <CarouselItem key={index} className="overflow-y-auto flex justify-center">
                  <FormField
                    control={form.control}
                    name={question.id as "q1" | "q2" | "q3" | "q4" | "q5"}
                    render={({ field }) => (
                      <FormItem className="p-5 w-1/2 my-auto">
                        <div>
                          <FormLabel><h5 className="text-2xl font-normal">{question.question}</h5></FormLabel>
                          <FormDescription className="mb-10">Description</FormDescription>
                        </div>
                        <FormControl>
                          <>
                            {question.type === "radio" && (
                              <RadioGroup
                                onValueChange={field.onChange}
                              >
                                {question.options.map((option, index) => (
                                  <FormItem 
                                    key={index} 
                                    className="bg-[#d9d9d9] rounded-md transition-colors duration-300 hover:bg-secondary hover:text-black checked:bg-secondary checked:text-black checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:ring-offset-white overflow-hidden"
                                  >
                                    <FormControl>
                                      <RadioGroupItem value={'value' in option ? option.value : ""} className="peer hidden"/>
                                    </FormControl>
                                    <FormLabel
                                      className="!mt-0 py-3 px-4 w-full block text-black cursor-pointer peer-checked:bg-secondary peer-checked:text-black peer-checked:border-transparent peer-aria-checked:bg-secondary peer-aria-checked:text-black peer-aria-checked:border-transparent"
                                    >
                                      {'value' in option ? option.value : ""}
                                    </FormLabel>
                                  </FormItem>
                                ))}
                              </RadioGroup>
                            )}
                            {question.type === "checkbox" && (
                              <div className="grid grid-cols-1 gap-5">
                                {question.options.map((option, index) => (
                                  <div key={index}>
                                    <div>
                                      <Label>{'title' in option ? option.title : ""}</Label>
                                    </div>
                                    {'options' in option ? option.options.map((item, index) => (
                                      <FormField
                                        key={index}
                                        control={form.control}
                                        name={question.id as "q1" | "q2" | "q3" | "q4" | "q5"}
                                        render={({ field }) => {
                                          return (
                                            <FormItem 
                                              key={index}
                                              className="inline-flex m-2 ml-0 bg-[#d9d9d9] text-black rounded-md cursor-pointer transition-colors duration-300 hover:bg-secondary hover:text-black checked:bg-secondary checked:text-black checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:ring-offset-white overflow-hidden"
                                            >
                                              <FormControl>
                                                <Checkbox
                                                  {...field}
                                                  name={question.id}
                                                  value={'value' in item ? item.value : ""}
                                                  checked={Array.isArray(field.value) ? field.value.includes(item.value) : false}
                                                  onCheckedChange={(checked) => {
                                                    return checked
                                                      ? field.onChange([...(Array.isArray(field.value) ? field.value : []), item.value])
                                                      : field.onChange(Array.isArray(field.value) ? field.value.filter((value) => value !== item.value) : [])
                                                  }}
                                                  className="hidden"
                                                />
                                              </FormControl>
                                              <FormLabel className="!mt-0 py-2 px-4 peer-aria-checked:bg-secondary peer-aria-checked:text-black peer-aria-checked:border-transparent peer-checked:bg-secondary peer-checked:text-black peer-checked:border-transparent cursor-pointer">
                                                {'value' in item ? item.value : ""}
                                              </FormLabel>
                                            </FormItem>
                                          )
                                        }}
                                      />
                                    )) : ""}
                                  </div>
                                ))}
                              </div>
                            )}
                            {question.type === "select" && (
                              <Select onValueChange={field.onChange}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select your preferred language" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {question.options.map((option, index) => (
                                    <SelectItem key={index} value={'value' in option ? option.value : ""}>
                                      {'value' in option ? option.value : ""}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            )}
                          </>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        <CarouselDots className="mt-5" />
        <CarouselPrevious className="fill-slate-300" />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default QuestionForm