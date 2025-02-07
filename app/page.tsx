import React from "react";
import { createClient } from "@/utils/supabase/server";
import { signOut } from "./actions/actions";
// import Todo from "@/components/todo/todo";

export default async function Home() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase.from("Todo").select();
  // const todos: Todo[] | undefined = data ?? undefined;

  return (
    <>
      {!user ? (
        <div className="flex items-center justify-center min-h-screen">
          <p>Please login first.</p>
        </div>
      ) : (
        <>
          <form action={signOut}>
            <button
              className=" py-2 m-2 px-4 cursor-pointer rounded-lg bg-blue-600 text-white font-semibold"
              type="submit"
            >
              Signout
            </button>
          </form>
          <main className="flex flex-col min-h-screen items-center justify-center">
            {/* <Todo data={todos} /> */}
          </main>
        </>
      )}
    </>
  );
}
