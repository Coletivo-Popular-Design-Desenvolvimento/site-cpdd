'use client';

import { useState } from "react";
import Link from "next/link"
import { usePathname } from "next/navigation";
import CpddLogoTexto from "./CpddLogoTexto";
import HamburgerIcon from "./HamburgerIcon";

const menu = [
    { href: '/projetos', label: 'Projetos' },
    { href: '/manifesto', label: 'Manifesto' },
    { href: '/sobre-nos', label: 'Sobre nós' },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header
            className={
                "relative lg:bg-cpdd-orange-500 lg:text-cpdd-neutral-950"
                + " before:w-full before:h-1 before:absolute before:top-0 before:bg-cpdd-neutral-950 before:z-1 lg:before:h-4"
                + (isMenuOpen ? " bg-cpdd-neutral-950 text-cpdd-orange-500" : " bg-cpdd-orange-500 text-cpdd-neutral-950")
            }
        >
            <div className="container flex justify-between gap-16 lg:gap-32">
                <div
                    className={
                        "relative"
                        + " before:w-screen before:h-full before:absolute before:right-full before:top-0 before:bg-inherit"
                        + " after:h-full after:clip-rounded-wedge after:absolute after:left-full after:top-0 after:bg-inherit"
                        + (isMenuOpen ? " bg-cpdd-orange-500 text-cpdd-neutral-950" : " bg-cpdd-neutral-950 text-cpdd-orange-500")
                        + (pathname === "/" ? " lg:bg-cpdd-neutral-950 lg:text-cpdd-orange-500" : " lg:bg-cpdd-orange-500 lg:text-cpdd-neutral-950")
                    }
                >
                    <Link
                        className="block py-3 lg:py-6 isolate"
                        href="/"
                    >
                        <CpddLogoTexto className="fill-current w-40 lg:w-80"/>
                    </Link>
                </div>
                <button
                    hidden={true} // escondido enquanto não houver outras paginas
                    aria-label="Menu"
                    aria-expanded={isMenuOpen}
                    aria-controls="navbar-menu"
                    className="px-4 lg:hidden"
                    onClick={() => setIsMenuOpen(prev => !prev)}
                    type="button"
                >
                    <HamburgerIcon className="fill-current"/>
                </button>
                <nav
                    hidden={true} // escondido enquanto não houver outras paginas
                    id="navbar-menu"
                    className={
                        "absolute top-full inset-x-0 lg:static lg:block lg:bg-cpdd-orange-500 lg:text-cpdd-neutral-950"
                        + (isMenuOpen ? " block bg-cpdd-neutral-950 text-cpdd-orange-500" : " hidden")
                    }
                >
                    <ul className="h-11 grid grid-cols-3 lg:gap-6 lg:h-full">
                        {menu.map(({ href, label }) => (
                            <li key={href}>
                                <Link
                                    className={
                                        "max-lg:text-sm button-lg flex items-center justify-center h-full lg:px-15"
                                        + (pathname === href ? " bg-cpdd-neutral-950 text-cpdd-orange-500 lg:rounded-b-4xl" : "")
                                    }
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
