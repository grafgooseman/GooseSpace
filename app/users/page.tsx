import UserCard from '@/components/UserCard';
import { prisma } from "@/lib/prisma";

export default async function Users() {
    // throw new Error('This is an error');
    const users = await prisma.user.findMany();

    return (
        <main className="flex p-5">
            {users.map((user) => {
                return <UserCard key={user.id} {...user} />;
            })}
        </main>
    );
}
