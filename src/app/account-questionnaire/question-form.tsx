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

  const { schema, defaultValues } = signupQuestions.reduce((acc, question) => {
    acc.schema[question.id] = question.type === "checkbox" ? z.array(z.string()) : z.string();
    acc.defaultValues[question.id] = question.type === "checkbox" ? [] : "";
    return acc;
  }, { schema: {} as Record<string, z.ZodType<any, any>>, defaultValues: {} as Record<string, any> });

  const formSchema = z.object({
    ...schema, // Use the schema object in formSchema
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...defaultValues
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => console.log(JSON.stringify(values));

  return (
    <>
      <div className="w-full max-h-screen">
        <Carousel className="pb-5">
          <Form {...form}>
            <form
              className="flex flex-col gap-6"
              ref={formRef}
              onSubmit={form.handleSubmit(onSubmit)}
              noValidate
            >
              <CarouselContent className="h-[calc(100dvh-8rem)] w-screen ml-0">
                {signupQuestions.map((question, index) => (
                  <CarouselItem key={index} className="overflow-y-auto flex justify-start p-10">
                    <FormField
                      control={form.control}
                      name={question.id}
                      render={({ field }) => (
                        <FormItem className="my-auto w-full md:w-2/5">
                          <div>
                            <FormLabel><h5 className="text-2xl font-normal">{question.question}</h5></FormLabel>
                            <FormDescription className="mb-10">{question.description}</FormDescription>
                          </div>
                          <FormControl>
                            <>
                              {question.type === "text" && (
                                <Input
                                  {...field}
                                  type="text"
                                  className="w-full"
                                />
                              )}
                              {question.type === "radio" && (
                                <RadioGroup
                                  onValueChange={field.onChange}
                                >
                                  {question.options ? question.options.map((option, index) => (
                                    <FormItem 
                                      key={index} 
                                      className="bg-[#d9d9d9] rounded-md transition-colors duration-300 hover:bg-secondary-accent hover:text-black checked:bg-secondary-accent checked:text-black checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:ring-offset-white overflow-hidden"
                                    >
                                      <FormControl>
                                        <RadioGroupItem value={'value' in option ? option.value : ""} className="peer hidden"/>
                                      </FormControl>
                                      <FormLabel
                                        className="!mt-0 py-3 px-4 w-full block text-black cursor-pointer peer-checked:bg-secondary-accent peer-checked:text-black peer-checked:border-transparent peer-aria-checked:bg-secondary-accent peer-aria-checked:text-black peer-aria-checked:border-transparent"
                                      >
                                        {'value' in option ? option.value : ""}
                                      </FormLabel>
                                    </FormItem>
                                  )) : null }
                                </RadioGroup>
                              )}
                              {question.type === "checkbox" && (
                                <div className="grid grid-cols-1">
                                  {question.options ? question.options.map((option, index) => (
                                    <div key={index} className={'options' in option ? "mb-5" : ""}>
                                      <div>
                                        <Label>{'title' in option ? option.title : ""}</Label>
                                      </div>
                                      {'options' in option ? option.options.map((item, index) => (
                                        <FormField
                                          key={index}
                                          control={form.control}
                                          name={question.id}
                                          render={({ field }) => {
                                            return (
                                              <FormItem 
                                                key={index}
                                                className="inline-flex m-2 ml-0 bg-[#d9d9d9] text-black rounded-md cursor-pointer transition-colors duration-300 hover:bg-secondary-accent hover:text-black checked:bg-secondary-accent checked:text-black checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:ring-offset-white overflow-hidden"
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
                                                <FormLabel className="!mt-0 py-2 px-4 peer-aria-checked:bg-secondary-accent peer-aria-checked:text-black peer-aria-checked:border-transparent peer-checked:bg-secondary-accent peer-checked:text-black peer-checked:border-transparent cursor-pointer">
                                                  {'value' in item ? item.value : ""}
                                                </FormLabel>
                                              </FormItem>
                                            )
                                          }}
                                        />
                                      )) 
                                      : 
                                      <FormField
                                        key={index}
                                        control={form.control}
                                        name={question.id}
                                        render={({ field }) => {
                                          return (
                                            <FormItem 
                                              key={index}
                                              className="inline-flex w-full m-2 ml-0 bg-[#d9d9d9] text-black rounded-md cursor-pointer transition-colors duration-300 hover:bg-secondary-accent hover:text-black checked:bg-secondary-accent checked:text-black checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:ring-offset-white overflow-hidden"
                                            >
                                              <FormControl>
                                                <Checkbox
                                                  {...field}
                                                  name={question.id}
                                                  value={'value' in option ? option.value : ""}
                                                  checked={Array.isArray(field.value) ? field.value.includes(option.value) : false}
                                                  onCheckedChange={(checked) => {
                                                    return checked
                                                      ? field.onChange([...(Array.isArray(field.value) ? field.value : []), option.value])
                                                      : field.onChange(Array.isArray(field.value) ? field.value.filter((value) => value !== option.value) : [])
                                                  }}
                                                  className="hidden"
                                                />
                                              </FormControl>
                                              <FormLabel className="w-full !mt-0 py-3 px-4 peer-aria-checked:bg-secondary-accent peer-aria-checked:text-black peer-aria-checked:border-transparent peer-checked:bg-secondary-accent peer-checked:text-black peer-checked:border-transparent cursor-pointer">
                                                {'value' in option ? option.value : ""}
                                              </FormLabel>
                                            </FormItem>
                                          )
                                        }}
                                      />
                                    }
                                    </div>
                                  )) : null }
                                </div>
                              )}
                              {question.type === "select" && (
                                <Select onValueChange={field.onChange}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder={'placeholder' in question ? question.placeholder : ""} />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {question.options ? question.options.map((option, index) => (
                                      <SelectItem key={index} value={'value' in option ? option.value : ""}>
                                        {'value' in option ? option.value : ""}
                                      </SelectItem>
                                    )) : null }
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
              <div className="w-screen px-10">
                <Button type="submit" className="w-full md:w-2/5">Submit</Button>
              </div>
            </form>
          </Form>
          <div className="w-screen px-10">
            <div className="flex justify-center items-center w-full md:w-2/5 relative mt-3">
              <CarouselPrevious className="relative left-0 translate-y-[0rem]" />
              <CarouselDots className="w-auto md:w-2/5 mx-3" />
              <CarouselNext className="relative right-0 translate-y-[0rem]" />
            </div>
          </div>
        </Carousel>
      </div>
      <div className="content-center hidden md:block w-1/2 absolute text-white h-screen px-16 right-0 top-0 z-10 overflow-hidden">
        <h1 className="text-4xl text-white text-left">
          &quot;<span className="text-secondary">Education</span> is the most powerful weapon which you can use to <span className="text-secondary"> change the world</span>.&quot;
        </h1>
        <p className="text-xl self-start text-slate-100 mt-5">
          -Nelson Mandela
        </p>
        <div
          aria-hidden="true"
          className="absolute w-full h-[190%] short:h-[195%] tall-desktop:h-[200%] bg-primary -z-10 top-[50%] translate-y-[-50%] rounded-l-[50%] right-0"
        ></div>
      </div>
    </>
  )
}

export default QuestionForm