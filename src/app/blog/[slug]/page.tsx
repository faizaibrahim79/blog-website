import { Blog } from "@/components/Blog";
import Comments from "@/components/Comments";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface Params {
    params: {
        slug: string;
    };
}

const BlogPost = async ({ params }: Params) => {
    const { slug } = params;

    const data: Blog = await client.fetch(
        `
        *[_type == "blog" && slug.current == $slug]{
        heading,
        description,
        "slug": slug.current,
        "imageUrl": image.asset->url
        }[0]
        `,
        { slug }
    );

    return (
        <main className="max-w-5xl shadow-xl rounded-lg mx-auto p-4 flex flex-col gap-4 items-center">
            {/* Main image */}
            <div>
                <Image
                    className="rounded-lg object-cover h-[20rem]"
                    src={data.imageUrl}
                    alt={data.heading}
                    height={600}
                    width={1024}
                />
            </div>
            <div>
                <h2 className="text-3xl font-bold my-10">{data.heading}</h2>
                <p className="text-lg">{data.description}</p>
            </div>
            <div className="bg-gray-400"> <Comments/></div>
           
        </main>
    );
};

export default BlogPost;
