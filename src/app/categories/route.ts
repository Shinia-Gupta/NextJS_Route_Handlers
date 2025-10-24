

//Right now we have static data of categories, but in real world scenario, we will have database fetching the categories. So, in real world scenario, the API will be called everytime without caching. So we can explicitely cache the response since this data does not frequently change via configuration option "dynmic"

export const dynamic="force-static";    //this ensures that the reponse is always cached and served instantly to all users(in this example, we won't be able to check whether it is working or not, So we will apply this config option in the /time route as well)
export async function GET(){

    const categories=[
        {id:1,name:"Electronics"},
        {id:2,name:"Books"},
        {id:3,name:"Clothing"},
        {id:4,name:"Home & Kitchen"}
    ]
    return Response.json(categories)
}