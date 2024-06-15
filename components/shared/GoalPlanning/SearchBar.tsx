"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { SearchIcon } from "lucide-react";

export const searchSchema = z.object({
  text: z.string().min(2, { message: "User Prompt required!" }).max(200),
});

export default function SearchBar() {
  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      text: "",
    },
  });

  function onSubmit(values: z.infer<typeof searchSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-2"
      >
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem className="w-full flex items-end justify-end">
              <FormControl>
                <Input
                  placeholder="Search..."
                  className="bg-[#1A1A1A] w-full sm:w-[500px] text-white"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant={"secondary"} size={"icon"} type="submit">
          <SearchIcon />
        </Button>
      </form>
    </Form>
  );
}
