'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { signupQuestions } from "@/data/signup-questions"

import { RadioGroupComponent, CheckboxComponent, SelectComponent, TextComponent } from "./form-components";

const AccountQuestionnaire = () => {
  const formRef = useRef<HTMLFormElement>(null);

  /**
   * Generates the schema and default values for the signup questions. Since the sign up form doesn't need validation, the schema and default values are empty arrays and strings.
   *
   * @returns An object containing the schema and default values.
   */
  const { schema, defaultValues } = signupQuestions.reduce((acc, question) => {
    acc.schema[question.id] = question.type === "checkbox" ? z.array(z.string()) : z.string();
    acc.defaultValues[question.id] = question.type === "checkbox" ? [] : "";
    return acc;
  }, { schema: {} as Record<string, z.ZodTypeAny>, defaultValues: {} as Record<string, [] | ""> });

  const formSchema = z.object({
    ...schema,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...defaultValues
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => console.log(JSON.stringify(values));

  const router = useRouter();

  const skipQuestions = () => {
    router.push("/");
  };

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
                                <TextComponent field={{ ...field, placeholder: question.placeholder }} />
                              )}
                              {question.type === "radio" && (
                                <RadioGroupComponent field={{ ...field, onValueChange: field.onChange }} question={question} />
                              )}
                              {question.type === "checkbox" && (
                                <CheckboxComponent form={form} question={question} />
                              )}
                              {question.type === "select" && (
                                <SelectComponent field={{ ...field, onValueChange: field.onChange }} question={question} />
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
                <div className="flex justify-center items-center gap-5 w-full md:w-2/5 relative">
                  <Button type="button" onClick={skipQuestions} className="flex grow shrink-0 basis-0 bg-primary-accent">Skip</Button>
                  <Button type="submit" className="flex grow shrink-0 basis-0">Submit</Button>
                </div>
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
};

export default AccountQuestionnaire;
