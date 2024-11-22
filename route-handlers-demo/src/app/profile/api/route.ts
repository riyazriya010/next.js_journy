import { cookies, headers } from "next/headers";
import {type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    // const requestHeaders = new Headers(request.headers)
       // console.log(requestHeaders.get('Authorization'))
    
    const headersList = await headers() // this is promise
    console.log(headersList.get('Authorization'))

    const theme = request.cookies.get("theme")
    console.log(theme)

    const cookie = await cookies()
    cookie.set("name", "Riyas")
    console.log(cookie.get("name"))

 

    // seding headers
    return new Response('<h1>Profile Api Data</h1>', {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=Dark"
        }
    })
}


