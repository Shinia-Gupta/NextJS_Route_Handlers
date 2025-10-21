import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request:NextRequest) {
  // const reqestHeaders=new Headers(request.headers);
  // console.log("Request Headers:",reqestHeaders.get("Authorization"));

  //OR

  const headersList=await headers();
  console.log("Request Headers:",headersList.get("Authorization"));
  
  const theme=request.cookies.get("theme");
  console.log("Current theme:",theme);
  // return new Response('Hello, Profile Page! This route file takes over from the page.tsx file both being on the same route and same level. So in case page.tsx and route.ts files are present on the same level for a folder, route.ts takes over from page.tsx fole');
  return new Response("<h1>Profile data</h1>",{
    headers:{
      "Content-Type":"text/html",
      "Set-Cookie":"theme=dark"
    }
  })
}