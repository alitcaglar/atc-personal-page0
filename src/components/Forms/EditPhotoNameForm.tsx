"use client";

import { useRouter } from "next/navigation";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

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

import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { fetchSessionDataCSR } from "@/utils/fetchSessionData";
import Link from "next/link";

const EditPhotoNameFormSchema = z.object({
  newPhotoName: z.string().min(2, {
    message: "Photo name must be at least 2 characters.",
  }),
});

/////////////////////////FUNCTION/////////////////////////
export default function EditPhotoNameForm({
  photoName,
}: {
  photoName: string;
}) {
  const router = useRouter();

  const { toast } = useToast();

  const form = useForm<z.infer<typeof EditPhotoNameFormSchema>>({
    resolver: zodResolver(EditPhotoNameFormSchema),
    defaultValues: {
      //TODO : photoNAme onceki varsayilan photoName olacak yazdim ama kontrol etmek lazim
      newPhotoName: photoName,
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(values: z.infer<typeof EditPhotoNameFormSchema>) {
    //console.log("form values:", values);

    toast({
      title: "Photo name is changing...",
      description: " ",
    });

    setIsLoading(true);
    try {
      const response = await fetch("/api/photo-album-patch", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newPhotoName: values.newPhotoName,
          photoName: photoName,
        }),
      });
      const responseBody = await response.json();

      await new Promise((resolve) => setTimeout(resolve, 2000));

      // console.log("Form submission method:", response.headers.get("method"));
      if (response.ok) {
        // Handle success
        console.log("Photo name updated successfully");
        toast({
          title: "SUCCESS!",
          description:
            "Photo name updated successfully! Please refresh the page",
        });
        router.refresh();
        // You might want to update the UI here if needed
      } else {
        // Handle failure
        console.error("Failed to update photo name");
        toast({
          title: `${responseBody.error}`,
          description: "",
        });
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          //TODO methoda bak
          method="PATCH"
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="newPhotoName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Photo Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="bg-gradient-to-r from-lime-600 to-teal-600 hover:from-lime-700 hover:to-teal-700"
          >
            {isLoading ? (
              <div className="animate-spin px-3">
                <AiOutlineLoading3Quarters />
              </div>
            ) : (
              "Update"
            )}
          </Button>
        </form>
      </Form>
    </>
  );
}
