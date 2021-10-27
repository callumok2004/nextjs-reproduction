import type { NextFetchEvent } from 'next/server'
import { getSession } from "next-auth/client";
import { NextResponse } from "next/server";

export async function middleware(request: any, event: NextFetchEvent) {
  const path = request.nextUrl.href,
    notAllowed = ["/dashboard", "/admin"],
    session = await getSession();

  let error: string | boolean = false;

  console.log(1, session)

  if(!session && !notAllowed.some(x => path.startsWith(x))) error = "Redirecting to login...";

  if(error) return NextResponse.rewrite(`/auth/${error}`);
}
