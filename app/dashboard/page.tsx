import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { ProfileForm } from './ProfileForm';
import { redirect } from 'next/navigation';
import { SignOutButton } from '@/components/buttons';
import { authOptions } from "../api/auth/[...nextauth]/route"


export default async function Dashboard() {
    const session = await getServerSession(authOptions);

    if(!session){
        redirect('/api/auth/signin');
    }

    return (
        <>

        </>
}