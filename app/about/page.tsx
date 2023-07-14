export const dynamic = 'force-static' // nothing changes, its just to be explicit

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "Social media for geese",
};

export default function Home() {
    return (
        <main>
            <h1 className="text-6xl font-bold m-5">About</h1>
            <p className="text-2xl m-5 self-start">This is the about page</p>
        </main>
    );
}
