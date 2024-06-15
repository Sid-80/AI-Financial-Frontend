"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { createGoalBasedSchema } from "@/components/Validations/formValidation";
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
    | "fileName"
    | "goalName"
    | "goalAmount"
    | "timeHorizon"
    | "currentSaving"
    | "monthlyContribution"
    | "expectedRateOfReturn"
    | "inflationRate";
  label: string;
  placeholder: string;
};

export default function CreateForm() {
  const form = useForm<z.infer<typeof createGoalBasedSchema>>({
    resolver: zodResolver(createGoalBasedSchema),
    defaultValues: {
      fileName: undefined,
      goalName: undefined,
      goalAmount: undefined,
      timeHorizon: undefined,
      currentSaving: undefined,
      monthlyContribution: undefined,
      expectedRateOfReturn: undefined,
      inflationRate: undefined,
    },
  });

  const FormFields: FIELDS[] = [
    {
      name: "fileName",
      label: "File Name",
      placeholder: "Name...",
    },
    {
      name: "goalName",
      label: "Goal Name",
      placeholder: "Name...",
    },
    {
      name: "goalAmount",
      label: "Goal Amount",
      placeholder: "Amount...",
    },
    {
      name: "timeHorizon",
      label: "Time Horizon",
      placeholder: "Time...",
    },
    {
      name: "currentSaving",
      label: "Current Saving",
      placeholder: "Savings...",
    },
    {
      name: "monthlyContribution",
      label: "Monthly Contribution",
      placeholder: "Contributions...",
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

  function onSubmit(values: z.infer<typeof createGoalBasedSchema>) {
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
