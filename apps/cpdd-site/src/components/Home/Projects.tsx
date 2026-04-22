import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: 'Nome do projeto',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur varius.',
        image: 'https://picsum.photos/seed/project1/800/600',
        publishedAt: '01/04/2026',
        link: '#'
    },
    {
        id: 2,
        title: 'Nome do projeto 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur varius.',
        image: 'https://picsum.photos/seed/project2/800/600',
        publishedAt: '01/04/2026',
        link: '#'
    },
    {
        id: 3,
        title: 'Nome do projeto 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur varius.',
        image: 'https://picsum.photos/seed/project3/800/600',
        publishedAt: '01/04/2026',
        link: '#'
    },
];

export default function Projects() {
    return (
        <section className="bg-cpdd-neutral-950 text-cpdd-neutral-50">
            <div className="container">
                <h2 className="mb-4 lg:mb-9 heading-sm lg:display-md text-cpdd-orange-500">Projetos em destaque</h2>
            </div>
            <div className="md:container">
                <ul className="px-6 md:px-0 mb-7 flex gap-6 overflow-auto">
                    {projects.map((project) => (
                        <li tabIndex={0} className="flex-1 min-w-54 h-75 md:h-112 lg:h-150 relative rounded-lg lg:rounded-4xl overflow-clip group" key={project.id}>
                            <Image src={project.image} alt="" fill className="object-cover"/>
                            <div className="isolate h-full flex items-end px-4 lg:px-9 py-6 lg:py-12 bg-linear-to-t from-black/80 to-transparent to-75% group-hover:hidden group-focus-within:hidden">
                                <h3 className="heading-sm lg:heading-lg text-pretty">{project.title}</h3>
                            </div>
                            <div className="isolate absolute inset-0 bg-cpdd-orange-500/94 text-cpdd-neutral-950 p-4 lg:p-9 lg:pt-16 hidden flex-col group-hover:flex group-focus-within:flex">
                                <h3 className="heading-sm lg:heading-lg mb-2 md:mb-6 lg:mb-12 text-pretty">{project.title}</h3>
                                <p className="body-alt-md lg:body-alt-lg mb-2 md:mb-6 lg:mb-12">{project.description}</p>
                                <p className="body-alt-md lg:body-alt-lg mb-2 md:mb-6 lg:mb-12">Publicado em {project.publishedAt}.</p>
                                <Link
                                    className="button-md lg:button-lg block border-2 lg:border-4 border-cpdd-neutral-950 rounded-lg py-1 lg:py-3 mt-auto"
                                    href={project.link}
                                >
                                    Saiba mais
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="container">
                <Link
                    className="block ml-auto text-cpdd-orange-500 border-current rounded-full w-2/5 py-1 border-2 lg:border-4 button-md lg:button-lg"
                    href="/projects"
                >
                    Ver todos
                </Link>
            </div>
        </section>
    );
}
