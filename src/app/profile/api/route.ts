export async function GET() {
  return new Response('Hello, Profile Page! This route file takes over from the page.tsx file both being on the same route and same level. So in case page.tsx and route.ts files are present on the same level for a folder, route.ts takes over from page.tsx fole');
}