import Image from "next/image";
import Link from "next/link";
import WaveDivider from "@components/common/WaveDivider";
import { projects } from "./data";

export default function Projects() {
    return (
        <section className="bg-cpdd-neutral-950 text-cpdd-neutral-50">
            <div className="relative bg-cpdd-orange-500 text-cpdd-neutral-950">
                <WaveDivider
                    backgroundClassName="bg-cpdd-neutral-950"
                    className="absolute inset-0"
                    widthClassName="w-0 sm:w-1/3 md:w-0 lg:w-1/4 xl:w-1/3"
                    xPosition="right"
                    yPosition="top"
                />
                <div className="isolate container min-h-12 md:min-h-25 flex items-center">
                    <h2 className="heading-sm md:display-md">
                        Projetos em destaque
                    </h2>
                </div>
            </div>
            <div className="md:container">
                <ul className="px-6 md:px-0 my-3 lg:my-5 flex gap-6 overflow-auto snap-x snap-mandatory">
                    {projects.map((project) => (
                        <li tabIndex={0} className="flex-1 min-w-54 h-75 md:h-112 lg:h-150 relative rounded-2xl lg:rounded-4xl overflow-clip snap-center group" key={project.id}>
                            <Image src={project.image} alt={project.imageAlt} fill className="object-cover"/>
                            <div
                                className="isolate h-full flex items-end px-4 lg:px-9 py-6 lg:py-12 bg-linear-to-t from-black from-15% to-transparent to-55% group-hover:hidden group-focus-within:hidden"
                                aria-hidden={true} // oculta para leitores de tela
                            >
                                <h3 className="heading-sm md:heading-md lg:heading-lg text-balance">{project.title}</h3>
                            </div>
                            <div className="sr-only group-hover:not-sr-only group-focus-within:not-sr-only">
                                <div className="isolate absolute inset-0 bg-cpdd-orange-500/94 text-cpdd-neutral-950 p-4 lg:p-9 lg:pt-16 flex flex-col">
                                    <h3 className="heading-sm md:heading-md lg:heading-lg mb-2 md:mb-6 lg:mb-12 text-balance">{project.title}</h3>
                                    <p className="body-alt-sm md:body-alt-md lg:body-alt-lg mb-2 md:mb-6 lg:mb-12">{project.description}</p>
                                    <p className="body-alt-sm lg:body-alt-md mt-auto">
                                        <strong className="font-semibold block">Sobre a pintura: </strong>
                                        {project.imageDesc}
                                    </p>
                                    <Link
                                        hidden
                                        className="button-md md:button-lg block border-2 md:border-4 border-cpdd-neutral-950 rounded-lg py-1 md:py-3 mt-auto"
                                        href={project.link}
                                    >
                                        Saiba mais
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="relative bg-cpdd-orange-500">
                <WaveDivider
                    backgroundClassName="bg-cpdd-neutral-950"
                    className="absolute inset-0"
                    widthClassName="w-1/2"
                    yPosition="bottom"
                    xPosition="left"
                />
                <div className="isolate container min-h-12 md:min-h-25 flex items-center">
                    <Link
                        hidden
                        className="block ml-auto text-cpdd-orange-500 border-current rounded-full w-2/5 py-1 md:py-3 border-2 md:border-4 button-md md:button-lg"
                        href="/projects"
                    >
                        Ver todos
                    </Link>
                </div>
            </div>
        </section>
    );
}
