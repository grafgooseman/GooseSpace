export const revalidate = 1200; // not necessary, just for ISR demonstration

interface Post {
    title: string;
    slug: string;
    content: string;
}

export async function generateStaticParams() {
    const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
        (res) => res.json()
    );

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

interface Props {
    params: {
        slug: string;
    };
}

export default async function BlogPost({ params }: Props) {
    //In a server componenet, you always need to qualify the URL with the domain name (full url)
    const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
        (res) => res.json()
    );

    const post = posts.find((post) => post.slug === params.slug)!; // ! -> its not null for sure, trust me

    return (
        <div className="flex flex-col items-center w-3/4 mx-auto">
            <h1 className="text-6xl font-bold m-5">{post.title}</h1>
            <p className="text-2xl m-5 self-start">{post.content}</p>
        </div>
    );
}
