import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function middleware (
    request: NextRequest
) {

    //work with cookies
    const response = NextResponse.next()

    const themePreference = request.cookies.get("theme")
    if(!themePreference){
        response.cookies.set("theme", "dark")
    }

    //set custom headers
    response.headers.set("custom-header", "custom-value")

    return response

    //custom matcher config:
    // return NextResponse.redirect(new URL("/", request.url))

    //conditional statements
    if(request.nextUrl.pathname === "/profile"){
        // return NextResponse.redirect(new URL("/hello", request.url))
        return NextResponse.rewrite(new URL("/hello", request.url))
    }
}

// export const config = {
//     matcher: "/profile/:path*"
// }