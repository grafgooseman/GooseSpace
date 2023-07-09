import { getServerSession } from "next-auth";
import Image from "next/image";
// import { redirect } from "next/navigation";

export default async function Home() {
    const session = await getServerSession();

	if(!session){
		// redirect('/api/auth/signin'); //Throws some error for a millisecinds but redirects to Sign In
		return (
			<main className="p-24">
				<h1 className="text-5xl">Welcome to GooseSpace!</h1>
				<p className="text-2xl">Please sign in to continue.</p>
			</main>
		);
	}

    return (
        <main className="p-24"></main>
    );
}
