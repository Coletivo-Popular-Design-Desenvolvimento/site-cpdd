import Image from "next/image";
import Link from "next/link";
import WaveDivider from "@components/common/WaveDivider";
import { projects } from "./data";

export default function Projects() {
    return (
        <section className="bg-cpdd-neutral-950 text-cpdd-neutral-50">
            <div className="relative bg-cpdd-orange-500">
                <WaveDivider
                    backgroundClassName="bg-cpdd-neutral-950"
                    className="absolute inset-0"
                    widthClassName="min-w-65 md:min-w-150 w-3/5"
                    xPosition="left"
                    yPosition="bottom"
                />
                <div className="isolate container min-h-12 md:min-h-25 flex items-center">
                    <h2 className="heading-sm md:display-md text-cpdd-orange-500">
                        Projetos em destaque
                    </h2>
                </div>
            </div>
            <div className="md:container">
                <ul className="px-6 md:px-0 my-3 lg:my-5 flex gap-6 overflow-auto">
                    {projects.map((project) => (
                        <li tabIndex={0} className="flex-1 min-w-54 h-75 md:h-112 lg:h-150 relative rounded-lg lg:rounded-4xl overflow-clip group" key={project.id}>
                            <Image src={project.image} alt="" fill className="object-cover"/>
                            <div className="isolate h-full flex items-end px-4 lg:px-9 py-6 lg:py-12 bg-linear-to-t from-black/80 to-transparent to-75% group-hover:hidden group-focus-within:hidden">
                                <h3 className="heading-sm md:heading-md lg:heading-lg text-balance">{project.title}</h3>
                            </div>
                            <div className="isolate absolute inset-0 bg-cpdd-orange-500/94 text-cpdd-neutral-950 p-4 lg:p-9 lg:pt-16 hidden flex-col group-hover:flex group-focus-within:flex">
                                <h3 className="heading-sm md:heading-md lg:heading-lg mb-2 md:mb-6 lg:mb-12 text-balance">{project.title}</h3>
                                <p className="body-alt-md lg:body-alt-lg mb-2 md:mb-6 lg:mb-12">{project.description}</p>
                                <p className="body-alt-md lg:body-alt-lg mb-2 md:mb-6 lg:mb-12">Publicado em {project.publishedAt}.</p>
                                <Link
                                    className="button-md md:button-lg block border-2 md:border-4 border-cpdd-neutral-950 rounded-lg py-1 md:py-3 mt-auto"
                                    href={project.link}
                                >
                                    Saiba mais
                                </Link>
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
                    yPosition="top"
                    xPosition="right"
                />
                <div className="isolate container min-h-12 md:min-h-25 flex items-center">
                    <Link
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
