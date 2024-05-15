import { UseFormReturn } from "react-hook-form";

import { Checkbox } from "@/components/ui/checkbox"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Field, Question } from "@/types"

export const TextComponent = ({ field }: { field: Field }) => {
  return (
    <Input
      {...field}
      type="text"
      className="w-full"
    />
  )
}

export const RadioGroupComponent = ({ field, question }: { field: Field, question: Question }) => {
  return (
    <RadioGroup
      onValueChange={field.onValueChange}
    >
      {question.options ? question.options.map((option, index) => (
        <FormItem 
          key={index} 
          className="bg-[#d9d9d9] rounded-md transition-colors duration-300 hover:bg-secondary-accent hover:text-black checked:bg-secondary-accent checked:text-black checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:ring-offset-white overflow-hidden"
        >
          <FormControl>
            <RadioGroupItem value={option.value ? option.value : ""} className="peer hidden"/>
          </FormControl>
          <FormLabel
            className="!mt-0 py-3 px-4 w-full block text-black cursor-pointer peer-checked:bg-secondary-accent peer-checked:text-black peer-checked:border-transparent peer-aria-checked:bg-secondary-accent peer-aria-checked:text-black peer-aria-checked:border-transparent"
          >
            {'value' in option ? option.value : ""}
          </FormLabel>
        </FormItem>
      )) : null }
    </RadioGroup>
  )
}

export const CheckboxComponent = ({ form, question }: { form: UseFormReturn, question: Question }) => {
  return (
    <div className="grid grid-cols-1">
      {question.options ? question.options.map((option, index) => (
        <div key={index} className={'options' in option ? "mb-5" : ""}>
          <div>
            <Label>{'title' in option ? option.title : ""}</Label>
          </div>
          {option.options ? option.options.map((item, index) => (
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
  )
}

export const SelectComponent = ({ field, question }: { field: Field, question: Question }) => {
  return (
    <Select onValueChange={field.onValueChange}>
      <FormControl>
        <SelectTrigger>
          <SelectValue placeholder={'placeholder' in question ? question.placeholder : ""} />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {question.options ? question.options.map((option, index) => (
          <SelectItem key={index} value={option.value ? option.value : ""}>
            {'value' in option ? option.value : ""}
          </SelectItem>
        )) : null }
      </SelectContent>
    </Select>
  )
}
