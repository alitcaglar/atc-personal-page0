// import { getUserRoles } from "@/utils/getUserRoles";

// import updateUserRole from "@/utils/updateUserRole";

// import PanelSwitchRole from "./PanelSwitchRole";

// export default async function Atc266Panel() {
//   const userRoles = await getUserRoles();
//   return (
//     <div className="min-h-screen m-16">
//       <h1 className="text-3xl font-bold underline m-8">Developer Panel</h1>
//       <p>Change user role</p>

//       <div>
//         {userRoles?.map((user, index) => {
//           return (
//             <div key={index} className="grid grid-cols-3 ">
//               <p
//                 className={
//                   index % 2 === 0
//                     ? "p-4 bg-slate-500 bg-opacity-20 my-1"
//                     : "p-4 my-1"
//                 }
//               >
//                 {user.email}
//               </p>

//               <p
//                 className={
//                   (index % 2 === 0 ? "bg-slate-500 bg-opacity-20" : " ") +
//                   " p-4 my-1"
//                 }
//               >
//                 {user.role}
//               </p>
//               {user.role === "atc266" ? (
//                 <p
//                   className={
//                     index % 2 === 0
//                       ? "text-center text-red-500 p-4 bg-slate-500 bg-opacity-20 my-1"
//                       : "text-center text-red-500 p-4 my-1"
//                   }
//                 >
//                   ***Developer***
//                 </p>
//               ) : (
//                 <div
//                   className={
//                     index % 2 === 0
//                       ? "flex justify-center p-4 bg-slate-500 bg-opacity-20 my-2"
//                       : "flex justify-center p-4 my-2"
//                   }
//                 >
//                   <PanelSwitchRole email={user.email} />
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// // const handleSubmit = async (event: any) => {
// //   event.preventDefault(); // Formun varsayılan davranışını engelle

// //   const formData = new FormData(event.target);
// //   const email = formData.get("email");
// //   const newRole = formData.get("newRole");

// //   try {
// //     await updateUserRole(email as string, newRole as string);
// //     // Başarılı bir şekilde güncellendiğinde yapılacak işlemler buraya eklenebilir
// //   } catch (error) {
// //     console.error("Hata:", error);
// //     // Hata durumunda kullanıcıya bir hata mesajı gösterilebilir
// //   }
// // };

//TODO
