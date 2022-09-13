import { NextRequest, NextFetchEvent, NextResponse } from "next/server";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { pathname } = req.nextUrl;
  if (pathname == "/") {
    return NextResponse.rewrite(new URL("/explore", req.url));
  }
  return NextResponse.next();
}
