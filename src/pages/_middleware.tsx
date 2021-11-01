import type { NextFetchEvent } from 'next/server'
import { NextResponse } from "next/server";

export async function middleware(request: any, event: NextFetchEvent) {
  const path = request.nextUrl.href,
    notAllowed = ["/dashboard", "/admin"],
    sessionExists = request.headers.get("cookie")?.split("; ").some((x: any) => x.includes("next-auth.session-token"));

  let error: string | boolean = false;

  if(!sessionExists && notAllowed.some(x => path.startsWith(x))) error = "Redirecting to login...";

  if(error) return NextResponse.rewrite(`/auth/${error}`);
}
