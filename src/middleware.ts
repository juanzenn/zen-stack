import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  // Example of how to block pages with next-auth
  // const token = await getToken({ req });
  // if (!token) {
  //   return NextResponse.redirect(new URL("/sign-in", req.nextUrl));
  // }

  return NextResponse.next()
}

export const config = {
  matcher: [],
};
