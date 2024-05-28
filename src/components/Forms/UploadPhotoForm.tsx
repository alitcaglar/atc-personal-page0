"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { uploadToCloudinary } from "@/utils/uploadToCloudinary";
import { useRouter } from "next/router";

import { useState, useEffect } from "react";

const uploadPhotoFormSchema = z.object({
  photoName: z.string().min(2, {
    message: "Photo name must be at least 2 characters.",
  }),
  takenBy: z.string().min(2, {
    message: "Taken by must be at least 2 characters.",
  }),
  takenYear: z
    .string()
    .min(4, {
      message: "Taken year must be 4 characters.",
    })
    .max(4, {
      message: "Taken year must be 4 characters.",
    }),
  photoUrl: z.string().url({ message: "Photo URL must be a valid URL." }),
});

export default function UploadPhotoForm() {
  const handleFormSubmit = (data: z.infer<typeof uploadPhotoFormSchema>) => {
    console.log(data);
  };

  // cloudinary url degistirme
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [photoUrl, setPhotoUrl] = useState<string>("");

  async function handleFileUpload() {
    if (!selectedFile) return;

    try {
      const uploadedUrl = await uploadToCloudinary(
        selectedFile,
        "dbjmcooux",
        "ml_default"
      );
      setPhotoUrl(uploadedUrl);
      console.log("Uploaded photo URL:", uploadedUrl);
    } catch (error) {
      console.error("Error uploading photo to Cloudinary:", error);
    }
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file);
  }

  // cloudinary url degistirme

  const form = useForm<z.infer<typeof uploadPhotoFormSchema>>({
    resolver: zodResolver(uploadPhotoFormSchema),
    defaultValues: {
      photoName: "",
      takenBy: "",
      takenYear: "",
      photoUrl: photoUrl,
    },
  });

  useEffect(() => {
    form.setValue("photoUrl", photoUrl);
  }, [form, photoUrl]);

  function onSubmit(values: z.infer<typeof uploadPhotoFormSchema>) {
    setPhotoUrl("");
    setSelectedFile(null);
    form.reset();
    console.log(values);
    console.log("onSubmit not handle");
  }

  return (
    <>
      {photoUrl ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="photoName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Photo Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Mountains" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="takenBy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Taken By</FormLabel>
                  <FormControl>
                    <Input placeholder="Anonymous" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="takenYear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Taken Year</FormLabel>
                  <FormControl>
                    <Input placeholder="2024" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="photoUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Image URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Add</Button>
          </form>
        </Form>
      ) : (
        <div>
          <p className="p-2">
            <Input
              type="file"
              onChange={handleFileChange}
              className="m-2 hover:cursor-pointer"
            />
            <Button onClick={handleFileUpload} className="m-2">
              Upload
            </Button>
            <p>{photoUrl}</p>
          </p>
        </div>
      )}
    </>
  );
}
