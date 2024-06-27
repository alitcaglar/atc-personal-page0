"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DummySwitchRoleSchema = z.object({
  newRole: z.enum(["admin", "user"], {
    errorMap: () => ({ message: "Role must be either 'admin' or 'user'" }),
  }),
});

export default function DummyPanelSwitchRole({ email }: { email: string }) {
  const form = useForm<z.infer<typeof DummySwitchRoleSchema>>({
    resolver: zodResolver(DummySwitchRoleSchema),
    defaultValues: {
      // Varsayılan değerler burada olabilir
    },
  });

  function onSubmit(values: z.infer<typeof DummySwitchRoleSchema>) {
    // İşlevsiz dummy submit fonksiyonu
    console.log("Dummy form values:", values);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          method="PATCH"
          className=""
        >
          <FormField
            control={form.control}
            name="newRole"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select {...field} onValueChange={field.onChange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="user">User</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-gradient-to-r from-lime-600 to-teal-600 hover:from-lime-700 hover:to-teal-700 m-1 ml-12"
          >
            Update
          </Button>
        </form>
      </Form>
    </>
  );
}
