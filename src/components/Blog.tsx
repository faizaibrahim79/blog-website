import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

export interface Blog {
    heading : string ;
    description : string ;
    slug : string ;
    imageUrl : string ;
}
export default async function Home(){

    const data:Blog[] = await client.fetch(`
        *[_type == "blog"]{
        heading,
        description,
        "slug" : slug.current,
        "imageUrl" : image.asset -> url
        }
        `)

        console.log(data)

        return(
            <main className=" flex justify-center item-center flex-col gap-2">
                {/* upper blog section */}
                <h2 className="text-gray-700 text-xl mt-8 mx-8">Popular topics</h2>
                <div className="flex justify-between mt-2 mx-8 text-sm">
                    <ul className="flex gap-3  ">
                        <li className="text-yellow-500">All</li>
                        <li>Adventure</li>
                        <li>Travel</li>
                        <li>Fashion</li>
                        <li>Technology</li>
                        <li>Branding</li>
                    </ul>
                    <button className="border rounded-full px-2">View All</button>
                </div>
                {/* blogs start */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ml-8">

                    {
                        data.map((blog, index) => {
                        return(
                            
                    <Link key={index} href ={`/blog/${blog.slug}`}>
                    
                    <div className="p-2 shadow-lg rounded-md max-w-[13rem] hover:scale-105 active:scale-100 transition-all cursor-pointer">
                        <Image src = {blog.imageUrl} alt="" height = {300} width = {200}/>
                    <div className="p-2">
                        <h2 className="text-sm font-bold">{blog.heading}</h2>
                        <p className="text-sm text-gray-500 line-clamp-2">{blog.description}</p>
                    </div>

                    </div>
                    
                    </Link> 
                        )
                        })
                    }
                    
                </div>

            </main>
        )
}