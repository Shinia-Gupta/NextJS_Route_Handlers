//NOTE_ there is no caching during development mode. To check caching, you need to build the app and run it in production mode

export const dynamic="force-static";    //enforces caching. The time changes only when the application is rebuilt 

//But if we want the time to change without re-building the application, we can re-validate the cached data using ISR
export const revalidate=10

export async function GET(){
    return Response.json({time:new Date().toLocaleTimeString()})
}