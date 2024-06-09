"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { Toaster } from "@/components/ui/toaster";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

import { useToast } from "@/components/ui/use-toast";

const EmailSendFormSchema = z.object({
  text: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export default function EmailSendForm() {
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof EmailSendFormSchema>>({
    resolver: zodResolver(EmailSendFormSchema),
    defaultValues: {
      text: "",
    },
  });

  async function onSubmit(data: z.infer<typeof EmailSendFormSchema>) {
    setIsLoading(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setIsSuccess(true);
      toast({
        title: "SUCCESS!",
        description: "Email adress sent successfully!",
      });
      await new Promise((resolve) => {
        setTimeout(resolve, 20000);
      });
      setIsSuccess(false);
      console.log(result.message);
    } catch (error) {
      console.log("Error sending email");
      toast({
        title: "ERROR!",
        description: "Email adress sent successfully!",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Toaster />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          //TODO methoda bak
          method="POST"
          className="space-y-8 flex items-center"
        >
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="opacity-0">@</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email adress to get in touch"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="absolute bottom-[180px]" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className={
              isSuccess
                ? "pointer-events-none bg-slate-500 hidden"
                : "bg-gradient-to-r from-lime-600 to-teal-600 hover:ring-2 m-4"
            }
          >
            {isLoading ? (
              <div className="animate-spin px-3">
                <AiOutlineLoading3Quarters />
              </div>
            ) : (
              "Send"
            )}
          </Button>
        </form>
      </Form>
    </>
  );
}
