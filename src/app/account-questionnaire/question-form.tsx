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
    <Form {...form}>
      <form
        className="flex flex-col gap-6 w-full"
        ref={formRef}
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
      >
        {signupQuestions.map((question, index) => (
          <FormField 
            key={index}
            control={form.control}
            name={question.id as "q1" | "q2" | "q3" | "q4" | "q5"}
            render={({ field }) => (
              <FormItem>
                <div>
                  <FormLabel>{question.question}</FormLabel>
                  <FormDescription>Description</FormDescription>
                </div>
                <FormControl>
                  <>
                    {question.type === "radio" && (
                      <RadioGroup
                        onValueChange={field.onChange}
                      >
                        {question.options.map((option, index) => (
                          <FormItem key={index}>
                            <FormControl>
                              <RadioGroupItem value={'value' in option ? option.value : ""} />
                            </FormControl>
                            <FormLabel>
                              {'value' in option ? option.value : ""}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    )}
                    {question.type === "checkbox" && (
                      <>
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
                                    <FormItem key={index}>
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
                                        />
                                      </FormControl>
                                      <FormLabel>
                                        {'value' in item ? item.value : ""}
                                      </FormLabel>
                                    </FormItem>
                                  )
                                }}
                              />
                            )) : ""}
                          </div>
                        ))}
                      </>
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
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default QuestionForm