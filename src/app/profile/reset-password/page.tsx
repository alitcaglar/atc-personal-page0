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

import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export default function ResetPassword() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("form values:", values);
    setIsLoading(true);
    //TODO : change
    try {
      const response = await fetch(`/api/auth/send-reset-password`, {
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
        toast({
          title: "SUCCESS!",
          description: "Please check your email for verification",
        });

        form.reset();
      } else {
        toast({
          title: "ERROR",
          description: "Something went wrong",
        });
        console.error("Error from server:", responseBody);
      }
    } catch (error) {
      toast({
        title: "ERROR",
        description: `${error}`,
      });
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  }

  //TEST
  // function handleClick() {
  //   toast({
  //     title: "SUCCESS!",
  //     description: "",
  //   });
  // }

  //TEST

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="border-2 rounded-xl p-8 mt-16 border-teal-500 shadow-sm shadow-teal-300 bg-slate-500 bg-opacity-20">
        <p className="text-3xl font-bold bg-gradient-to-r from-teal-500 to-lime-500 bg-clip-text text-transparent mb-12">
          Reset Password
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} method="post">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Please enter your email" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="bg-gradient-to-r from-lime-600 to-teal-600 hover:ring-2 mt-12"
            >
              Send
              {isLoading && (
                <div className="animate-spin px-3">
                  <AiOutlineLoading3Quarters />
                </div>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
