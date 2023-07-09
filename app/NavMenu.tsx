import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignOutButton } from '../components/buttons';
import AuthCheck from '@/components/AuthCheck';

export default function NavMenu() {
    return (
        <nav className="flex bg-cyan-700 justify-between items-center">
            <Link href="/" className="m-5">
                <Image
                    src="/goose.png"
                    width={100}
                    height={100}
                    alt="GooseSpace Logo"
                />
            </Link>
            <ul className="flex m-5 text-white">
                <li className="m-5">
                    <Link
                        className="no-underline hover:text-cyan-300"
                        href="/about"
                    >
                        About
                    </Link>
                </li>
                <li className="m-5">
                    <Link
                        className="no-underline hover:text-cyan-300"
                        href="/blog"
                    >
                        Blog
                    </Link>
                </li>
                <li className="m-5">
                    <Link
                        className="no-underline hover:text-cyan-300"
                        href="/users"
                    >
                        Users
                    </Link>
                </li>
                <li className="m-5">
                    <SignInButton />
                </li>
                <li className="m-5">
                    <AuthCheck>
                        <SignOutButton />
                    </AuthCheck>
                </li>
            </ul>
        </nav>
    );
}
