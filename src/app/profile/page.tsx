"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export default function Profile() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("form values:", values);
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      console.log("Response status:", response.status);
      console.log("Response status text:", response.statusText);
      const responseBody = await response.json();
      console.log("Response body:", responseBody);

      if (response.ok) {
        console.log("Success:", values);
      } else {
        console.error("Error from server:", responseBody);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="border rounded-xl p-8  mt-16">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} method="post">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lime-600">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Please enter your email" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lime-600">Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Please enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-gradient-to-r from-lime-600 to-teal-600 hover:ring-2"
            >
              Sign In
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
