import { createClient } from "@supabase/supabase-js";
import { redirect } from "react-router-dom";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { data, error };
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

export async function getCurrentUser() {
  const { data } = await supabase.auth.getUser();
  return data?.user;
}

export async function getUserRole() {
  const user = await getCurrentUser();

  if (!user) return null;

  // Get user role from the profiles table
  const { data, error } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (error) {
    console.error("Error fetching user role:", error);
    return null;
  }

  return data?.role;
}

export async function requireAuth() {
  const user = await getCurrentUser();

  if (!user) {
    return redirect("/admin/login");
  }

  return user;
}

export async function requireAdminAuth() {
  const user = await getCurrentUser();

  if (!user) {
    return redirect("/admin/login");
  }

  const role = await getUserRole();

  if (role !== "admin") {
    await signOut();
    return redirect("/admin/login?error=unauthorized");
  }

  return user;
}
