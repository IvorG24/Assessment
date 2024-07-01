import React from "react";
import Activity2 from "./modules/form";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { signOut } from "../actions/actions";
const page = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/sign-in");
  }
  return (
    <>
      {!user ? (
        <>
          <p>You are not Logged in</p>
        </>
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
          <Activity2 />
        </>
      )}
    </>
  );
};

export default page;
