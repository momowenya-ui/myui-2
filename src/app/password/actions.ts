"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function submitPassword(formData: FormData) {
  const entered = formData.get("password") as string;
  if (entered === "wenqing2025") {
    const cookieStore = await cookies();
    cookieStore.set("site_password", "wenqing2025", {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
    redirect("/");
  }
  redirect("/password?error=1");
}
