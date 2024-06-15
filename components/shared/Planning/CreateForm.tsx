"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createRetirementSchema } from "@/components/Validations/formValidation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type FIELDS = {
  name:
    | "inflationRate"
    | "expectedRateOfReturn"
    | "expectedRetireExpenses"
    | "currentAge"
    | "retirementAge"
    | "currentIncome"
    | "currentSavings"
    | "monthlySavings";
  label: string;
  placeholder: string;
};

export default function CreateForm() {
  const form = useForm<z.infer<typeof createRetirementSchema>>({
    resolver: zodResolver(createRetirementSchema),
    defaultValues: {
      currentAge: undefined,
      currentIncome: undefined,
      currentSavings: undefined,
      retirementAge: undefined,
      expectedRateOfReturn: undefined,
      expectedRetireExpenses: undefined,
      inflationRate: undefined,
      monthlySavings: undefined,
    },
  });

  const FormFields: FIELDS[] = [
    {
      name: "currentAge",
      label: "Current Age",
      placeholder: "Age...",
    },
    {
      name: "retirementAge",
      label: "Retirement Age",
      placeholder: "Age...",
    },
    {
      name: "currentIncome",
      label: "Current Income",
      placeholder: "Income...",
    },
    {
      name: "currentSavings",
      label: "Current Savings",
      placeholder: "Savings...",
    },
    {
      name: "monthlySavings",
      label: "Monthly Savings",
      placeholder: "Savings...",
    },
    {
      name: "expectedRetireExpenses",
      label: "Expected Retire Expenses",
      placeholder: "Expenses...",
    },
    {
      name: "expectedRateOfReturn",
      label: "Expected Rate of Return",
      placeholder: "Rate of return...",
    },
    {
      name: "inflationRate",
      label: "Inflation Rate (%)",
      placeholder: "Inflation rate...",
    },
  ];

  function onSubmit(values: z.infer<typeof createRetirementSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="p-3 text-white items-center justify-center sm:p-4 flex flex-col gap-8 overflow-y-auto"
      >
        {FormFields.map((fieldItem: FIELDS, index) => (
          <FormField
            key={index}
            control={form.control}
            name={fieldItem.name}
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel>{fieldItem.label}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={fieldItem.placeholder}
                    className="bg-[#1A1A1A]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button className=" bg-green-700 hover:bg-green-700/70" type="submit">
          Save
        </Button>
      </form>
    </Form>
  );
}
