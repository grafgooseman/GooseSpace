import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import Image from 'next/image';

interface Props {
    params: {
        id: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const user = await prisma.user.findUnique({ where: { id: params.id } });
    return { title: `User profile of ${user?.name}` };
}

export default async function UserProfile({ params }: Props) {
    const user = await prisma.user.findUnique({ where: { id: params.id } });
    const { name, bio, image, id } = user ?? {};

    return (
        <main className="p-5">
            <h1 className="text-4xl font-semibold py-7">{name}</h1>

            <Image
                className="rounded-2xl"
                width={300}
                height={300}
                src={image ?? "/mememan.webp"}
                alt={`${name}'s profile`}
            />

            <h3 className="py-3 text-lg">Bio</h3>
            <p>{bio }</p>
        </main>
    );
}
