// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// import { useRouter } from "next/navigation";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// const SwitchRoleScema = z.object({
//   newRole: z.enum(["admin", "user"], {
//     errorMap: () => ({ message: "Role must be either 'admin' or 'user'" }),
//   }),
// });

// export default function PanelSwitchRole({ email }: { email: string }) {
//   const router = useRouter();

//   const form = useForm<z.infer<typeof SwitchRoleScema>>({
//     resolver: zodResolver(SwitchRoleScema),
//     defaultValues: {
//       //TODO : photoNAme onceki varsayilan photoName olacak yazdim ama kontrol etmek lazim
//       //  newRole: photoName,
//     },
//   });
//   async function onSubmit(values: z.infer<typeof SwitchRoleScema>) {
//     console.log("form values:", values);

//     try {
//       const response = await fetch("/api/user-switch-role", {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           newRole: values.newRole,
//           email: email,
//         }),
//       });
//       console.log("Form submission method:", response.headers.get("method"));
//       if (response.ok) {
//         // Handle success
//         console.log("Role updated successfully");
//         router.refresh();

//         // You might want to update the UI here if needed
//       } else {
//         // Handle failure
//         console.error("Failed to update role");
//       }
//     } catch (error) {
//       console.error("An error occurred:", error);
//     } finally {
//     }
//   }
//   //burada kaldim

//   return (
//     <>
//       <Form {...form}>
//         <form
//           onSubmit={form.handleSubmit(onSubmit)}
//           method="PATCH"
//           className=""
//         >
//           <FormField
//             control={form.control}
//             name="newRole"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Select {...field} onValueChange={field.onChange}>
//                     <SelectTrigger className="w-[180px]">
//                       <SelectValue placeholder="Role" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="admin">Admin</SelectItem>
//                       <SelectItem value="user">User</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <Button
//             type="submit"
//             className="bg-gradient-to-r from-lime-600 to-teal-600 hover:from-lime-700 hover:to-teal-700 m-1 ml-12"
//           >
//             Update
//           </Button>
//         </form>
//       </Form>
//     </>
//   );
// }

//TODO
