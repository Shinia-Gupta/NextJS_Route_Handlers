import { NextRequest, NextResponse } from "next/server";


export function middleware(request:NextRequest){
    //middleware logic

    // WAY 1- MATCHER CONFIG INSTEAD OF CONDITIONAL LOGIC
// return NextResponse.redirect(new URL('/',request.url));

//WAY 2 - CONDITIONAL LOGIC INSIDE MIDDLEWARE
// if(request.nextUrl.pathname==='/profile'){
//     return NextResponse.redirect(new URL('/hello',request.nextUrl));
//     // return NextResponse.rewrite(new URL('/hello',request.nextUrl));

// }


//Setting cookies in middleware
const response =NextResponse.next();
const themePreference=request.cookies.get("theme")
if(!themePreference){
    response.cookies.set("theme","dark");
}

//setting headers in middleware
response.headers.set("custom-header","custom-value-of-header");
return response;
}

// export const config={
//     matcher:['/profile/:path*']   //apply middleware only on /profile route and its sub-routes
// }