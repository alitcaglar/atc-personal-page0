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
import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { TbEye, TbEyeClosed } from "react-icons/tb";

import { fetchSessionDataCSR } from "@/utils/fetchSessionData";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export default function ATC266() {
  //session

  const router = useRouter();

  const [sessionEmail, setSessionEmail] = useState<any>(null);
  const [sessionRole, setSessionRole] = useState<any>(null);

  useEffect(() => {
    fetchSessionDataCSR(setSessionEmail, setSessionRole);
  }, []);

  console.log("Session email and role:", sessionEmail, sessionRole);

  //session

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("form values:", values);
    setIsLoading(true);
    try {
      const response = await fetch(`/api/auth/admin-signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      console.log("Response status:", response.status);
      console.log("Response status text:", response.statusText);

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Response is not in JSON format");
      }

      const responseBody = await response.json();
      console.log("Response body:", responseBody);

      if (response.ok) {
        console.log("Success:", values);
        toast({
          title: "SUCCESS!",
          description: "✔",
        });
        form.reset();
        router.push("/");
      }
    } catch (error) {
      toast({
        title: "ERROR",
        description: `${error}`,
      });
      console.error("An error occurred:", error);
      toast({
        title: "ERROR",
        description: `${error}`,
      });
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

  if (sessionEmail !== "atc266@gmail.com") {
    return <div className="h-screen"></div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="border-2 rounded-xl p-8 mt-16 border-teal-500 shadow-sm shadow-teal-300 bg-slate-500 bg-opacity-20">
        <p className="text-3xl font-bold bg-gradient-to-r from-teal-500 to-lime-500 bg-clip-text text-transparent">
          admin signUp
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
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Please enter your password"
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
              admin signUp
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