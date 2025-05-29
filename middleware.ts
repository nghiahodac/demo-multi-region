// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const location = request.cookies.get("location")?.value;

  const origin = request.nextUrl.origin;
  console.log("Location:", location);

  if (location === "my") {
    return NextResponse.rewrite(`${origin}/location/my`);
  }

  if (location === "vn") {
    return NextResponse.rewrite(`${origin}/location/vn`);
  }

  return NextResponse.rewrite(`${origin}/location/vn`);
}

export const config = {
  matcher: "/", // Only rewrite when accessing "/"
};
