import { NextRequest, NextFetchEvent, NextResponse } from "next/server";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { pathname } = req.nextUrl;
  if (pathname == "/") {
    return NextResponse.redirect("/explore");
  }
  return NextResponse.next();
}
