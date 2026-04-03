'use client';

import Link from "next/link"
import { usePathname } from "next/navigation";
import CpddLogoTexto from "./CpddLogoTexto";

const menu = [
    { href: '/projetos', label: 'Projetos' },
    { href: '/manifesto', label: 'Manifesto' },
    { href: '/sobre-nos', label: 'Sobre nós' },
];

const landingPageActiveClassName = [
    "text-cpdd-orange-500 relative",
    "before:w-screen before:h-full before:absolute before:right-0 before:top-0 before:bg-cpdd-neutral-950",
    "after:h-full after:clip-rounded-wedge after:absolute after:left-full after:top-0 after:bg-cpdd-neutral-950",
].join(' ');

const menuButtonActiveClassName = "rounded-b-4xl bg-cpdd-neutral-950 text-cpdd-orange-500";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="bg-cpdd-orange-500 text-cpdd-neutral-950 relative before:w-full before:h-4 before:absolute before:top-0 before:bg-cpdd-neutral-950">
            <div className="container flex justify-between gap-32">
                <div className={pathname === "/" ? landingPageActiveClassName : undefined}>
                    <Link
                        className="block py-6 isolate"
                        href="/"
                    >
                        <CpddLogoTexto className="fill-current w-80"/>
                    </Link>
                </div>
                <nav>
                    <ul className="h-full flex gap-6">
                        {menu.map(({ href, label }) => (
                            <li key={href}>
                                <Link
                                    className={`button-lg flex items-center h-full px-15 ${pathname === href ? menuButtonActiveClassName : ""}`}
                                    href={href}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
