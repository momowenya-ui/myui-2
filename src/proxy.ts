import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip protection for /admin (has its own auth) and /password itself
  if (
    pathname.startsWith("/admin") ||
    pathname.startsWith("/password")
  ) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get("site_password");
  if (cookie?.value === "wenqing2025") {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/password", request.url));
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp)).*)",
  ],
};
