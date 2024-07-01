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
import { TbEye, TbEyeClosed } from "react-icons/tb";

const formSchema = z.object({
  password: z.string().min(6, "Password must be at least 6 characters long"),
  confirmPassword: z
    .string()
    .min(6, "Password must be at least 6 characters long"),
});

export default function NewPassword() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("form values:", values);
    setIsLoading(true);

    if (values.password !== values.confirmPassword) {
      toast({
        title: "ERROR",
        description: "Passwords do not match",
      });
      setIsLoading(false);
      return;
    }
    //TODO change
    try {
      const response = await fetch(`/api/auth/new-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values.password),
      });

      console.log("Response status:", response.status);
      console.log("Response status text:", response.statusText);
      const responseBody = await response.json();
      console.log("Response body:", responseBody);

      if (response.ok) {
        console.log("Success:", values);
        toast({
          title: "SUCCESS!",
          description: `Password changed successfully.`,
        });
        router.push("/");
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

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="border-2 rounded-xl p-8 mt-16 border-teal-500 shadow-sm shadow-teal-300 bg-slate-500 bg-opacity-20">
        <p className="text-3xl font-bold bg-gradient-to-r from-teal-500 to-lime-500 bg-clip-text text-transparent">
          Change password
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} method="post">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Please enter your password"
                      {...field}
                      type={showPassword ? "text" : "password"}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Please enter your new password again"
                      type={showPassword ? "text" : "password"}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div
              className="text-3xl cursor-pointer flex justify-center w-8"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <TbEye /> : <TbEyeClosed />}
            </div>

            <Button
              type="submit"
              className="bg-gradient-to-r from-lime-600 to-teal-600 hover:ring-2 mt-3"
            >
              Reset Password
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
