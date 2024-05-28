"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";

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

//zod validation

import { z } from "zod";

const formSchema = z.object({
  photoName: z
    .string()
    .min(1, "Photo name is required")
    .max(20, "Photo name must be at most 20 characters"),
  takenBy: z
    .string()
    .min(1, "Taken by is required")
    .max(20, "Taken by must be at most 20 characters"),
  takenYear: z.string().min(4, "Taken year is required").max(4, "Invalid year"), //number olayi saibeli cunku data string olarak kaydediliyor
  photoUrl: z.string().min(1, "image URL is required"),
});

//zod validation

// interface IFormInput { photoName: string; takenBy: string; takenYear: string; image: FileList;}
export default function AddPhotoMainPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const { toast } = useToast();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const formData = new FormData();
      //gemini
      formData.append("photoName", data.photoName);
      formData.append("takenBy", data.takenBy);
      formData.append("takenYear", data.takenYear);
      //gemini
      formData.append("photoUrl", data.photoUrl); // "image" yerine "file" yaziyordu

      //clduploadwidget icin

      console.log(formData);

      const res = await axios.post("/api/upload", {
        photoName: data.photoName,
        takenBy: data.takenBy,
        takenYear: data.takenYear,
        photoUrl: data.photoUrl,
      });

      if (res.data.success) {
        toast({
          title: "Success",
          description: "Photo uploaded successfully",
        });
      }
    } catch (error: any) {
      console.error(error);
      // console.log(error.response.data.error);
      toast({
        title: "Error",
        description: "Failed to upload photo ",
      });
    }
  };
  return (
    <>
      {/*<form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Photo Name</label>
          <input {...register("photoName")} />
          {errors.photoName && <p>{errors.photoName.message}</p>}
        </div>
        <div>
          <label>Taken By</label>
          <input {...register("takenBy")} />
          {errors.takenBy && <p>{errors.takenBy.message}</p>}
        </div>
        <div>
          <label>Taken Year</label>
          <input {...register("takenYear")} />
          {errors.takenYear && <p>{errors.takenYear.message}</p>}
        </div>
        <div>
          <label>Image</label>
          <input type="file" {...register("image")} />
          {errors.image && <p>{errors.image.message}</p>}
        </div>
        <button type="submit">Upload</button>
      </form>*/}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="photoName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name of the photo</FormLabel>
                <FormControl>
                  <Input placeholder="Sunshine" {...field} />
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
                <FormLabel>Who took this photo?</FormLabel>
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
                <FormLabel>What year was this photo taken?</FormLabel>
                <FormControl>
                  <Input placeholder="2021" {...field} />
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
                <FormLabel>photoUrl</FormLabel>
                <FormControl>
                  <Input placeholder="photoUrl" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Upload</Button>
        </form>
      </Form>
    </>
  );
}
