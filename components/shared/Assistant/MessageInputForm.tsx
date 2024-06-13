"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { assistantSchema } from "@/components/Validations/formValidation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SendIcon } from "lucide-react";

export default function MessageInputForm() {
  const form = useForm<z.infer<typeof assistantSchema>>({
    resolver: zodResolver(assistantSchema),
    defaultValues: {
      prompt: "",
    },
  });

  function onSubmit(values: z.infer<typeof assistantSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="p-3 sm:p-4 xl:p-8 flex gap-3"
      >
        <FormField
          control={form.control}
          name="prompt"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  placeholder="Issue..."
                  className="bg-[#1A1A1A]"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                A problem well-stated is a problem half-solved
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className=" bg-green-700 hover:bg-green-700/70"
          size={"icon"}
          type="submit"
        >
          <SendIcon />
        </Button>
      </form>
    </Form>
  );
}
