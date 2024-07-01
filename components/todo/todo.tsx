// "use client";
// import { AddTodo, DeleteTodo, EditTodo } from "@/app/actions/actions";
// import { MdEdit } from "react-icons/md";
// import React, { useOptimistic, useRef } from "react";

// type Todo = {
//   id: number;
//   content: string;
// };

// type TodoListProps = {
//   data: Todo[] | undefined;
// };
// const Todo = ({ data }: TodoListProps) => {
//   const ref = useRef<HTMLFormElement>(null);
//   const [optimisticData, useOptimisticData] = useOptimistic(
//     data,
//     (state: Todo[] | undefined, newTodo: Todo) => {
//       return [...(state ?? []), newTodo]; // Ensure state is an array
//     }
//   );
//   return (
//     <div className="flex w-full max-w-sm flex-col gap-6">
//       <form
//         className="flex justify-between w-full max-w-xl"
//         ref={ref}
//         action={async (formData) => {
//           ref.current?.reset();
//           await AddTodo(formData);
//           useOptimisticData({
//             id: Math.random(),
//             content: formData.get("content") as string,
//           });
//         }}
//       >
//         <label className="flex" htmlFor="content">
//           <input
//             className="border-2 border-black"
//             type="text"
//             name="content"
//             id="content"
//             placeholder="add content"
//           />
//         </label>
//         <button
//           className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
//           type="submit"
//         >
//           Add Todo
//         </button>
//       </form>
//       <div className="flex items-start justify-start w-full max-w-[450px] flex-col gap-2">
//         {optimisticData?.map((todo) => (
//           <div className="" key={todo.id}>
//             <form>
//               <div className="flex gap-2 justify-between">
//                 {" "}
//                 <input name="newTodo" defaultValue={todo.content}></input>
//                 <button
//                   className="flex gap-2 items-center bg-black/80 rounded-lg py-1 px-2 text-white"
//                   formAction={async (formdata) => {
//                     await EditTodo(formdata, todo.id);
//                   }}
//                 >
//                   <MdEdit />
//                   Edit
//                 </button>
//                 <button
//                   className="flex gap-2 items-center bg-red-600 rounded-lg py-1 px-2 text-white"
//                   formAction={async () => {
//                     await DeleteTodo(todo.id);
//                   }}
//                 >
//                   <MdEdit />
//                   Delete
//                 </button>
//               </div>
//             </form>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Todo;
