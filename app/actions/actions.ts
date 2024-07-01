"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function signUp(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }
  revalidatePath("/", "layout");
  redirect("/sign-in");
}

export async function signIn(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    throw error;
  }

  revalidatePath("/", "layout");
  redirect("/activity2");
}

export const signOut = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();
  redirect("/sign-in");
};

export const AddTodo = async (formdata: FormData) => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not Authorized");
  }
  try {
    // Define the todo object
    const newTodo = formdata.get("content") as string;

    // Insert the new todo into the 'todos' table in Supabase
    const { error } = await supabase.from("Todo").insert({ content: newTodo });

    if (error) {
      throw error;
    }

    revalidatePath("/");
  } catch (error) {
    console.error("Error adding todo:", error);
    throw error;
  }
};

export const EditTodo = async (formdata: FormData, id: number) => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not Authorized");
  }
  try {
    // Define the todo object
    const newTodo = formdata.get("newTodo") as string;

    // Insert the new todo into the 'todos' table in Supabase
    const { error } = await supabase
      .from("Todo")
      .update({ content: newTodo })
      .eq("id", id);

    if (error) {
      throw error;
    }

    revalidatePath("/");
  } catch (error) {
    console.error("Error adding todo:", error);
    throw error;
  }
};

export const DeleteTodo = async (id: number) => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not Authorized");
  }

  try {
    const { error } = await supabase.from("Todo").delete().eq("id", id);

    if (error) {
      throw error;
    }
    revalidatePath("/");
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
};
