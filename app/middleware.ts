import { NextRequest, NextResponse } from "next/server"

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value

  // Om det inte finns en token, skicka användaren till /login
  if (!token && req.nextUrl.pathname.startsWith("/todos")) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  return NextResponse.next()
}
