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
                <h2 className="mb-9 display-md text-cpdd-orange-500">Projetos em destaque</h2>
                <ul className="mb-7 grid grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <li className="h-150 relative rounded-4xl overflow-clip group" key={project.id}>
                            <Image src={project.image} alt="" fill className="object-cover"/>
                            <div className="isolate h-full flex items-end justify-center p-8 bg-linear-to-t from-black/80 to-transparent to-75% group-hover:hidden">
                                <h3 className="heading-lg text-center text-pretty">{project.title}</h3>
                            </div>
                            <div className="hidden isolate absolute inset-0 bg-cpdd-orange-500/94 text-cpdd-neutral-950 p-9 pt-16 group-hover:flex flex-col">
                                <h3 className="heading-lg mb-12">{project.title}</h3>
                                <p className="body-alt-lg mb-12">{project.description}</p>
                                <p className="body-alt-lg mb-12">Publicado em {project.publishedAt}.</p>
                                <Link
                                    className="button-lg block border-4 border-cpdd-neutral-950 rounded-lg py-3 mt-auto"
                                    href={project.link}
                                >
                                    Saiba mais
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
                <Link
                    className="block ml-auto text-cpdd-orange-500 border-current rounded-full w-2/5 py-1 border-4 button-lg"
                    href="/projects"
                >
                    Ver todos
                </Link>
            </div>
        </section>
    );
}
