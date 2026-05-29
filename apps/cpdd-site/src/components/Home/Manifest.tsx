import Link from 'next/link';

const paragraphs =
    'A tecnologia nunca é neutra. Todo site, app ou código carrega interesses. No capitalismo, servem ao lucro. Nós escolhemos outro caminho: que a ciência e a técnica sirvam ao povo.\nO CPDD surge como resposta organizada a essa hegemonia neoliberal. Entendemos que só é possível disputar esse campo criando um espaço de formação política baseado na teoria marxista-leninista. Nosso objetivo é construir uma comunidade de esquerda radical capaz de enfrentar o domínio ideológico das Big Techs e fortalecer a luta de classes dentro do mercado. Avançando para o socialismo brasileiro.'.split(
        '\n'
    );

export default function Manifest() {
    return (
        <section className="bg-cpdd-neutral-50 text-cpdd-neutral-950">
            <div className="container py-8 md:py-16">
                <div>
                    <h2 className="heading-sm mb-8 md:display-md md:mb-11">Manifesto</h2>
                    <div className="space-y-4 body-sm text-sm md:body-lg">
                        {paragraphs.map((text, i) => (
                            <p key={i}>{text}</p>
                        ))}
                    </div>
                    <Link
                        hidden
                        href="#"
                        className="block mx-auto max-w-2/3 mt-8 text-center rounded-lg button-sm text-sm py-3 border-2 border-cpdd-neutral-950 md:border-4 md:button-lg md:mt-11 md:max-w-2/5 md:mr-0"
                    >
                        Saiba mais
                    </Link>
                </div>
            </div>
        </section>
    );
}
