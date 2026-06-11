import Image from 'next/image';
import WaveDivider from '../common/WaveDivider';

const imageSrc = 'leninSpeech.webp';
const text1 =
    'O CPDD é um coletivo independente de trabalhadores de tecnologia, design, comunicação e gestão que usam seu talento para transformar a sociedade. Se quem cria conhecimento não decide seu uso, a tecnologia vira arma das grandes empresas, não da maioria. Atuamos para construir um novo mundo, onde a soberania digital seja uma realidade e a tecnologia esteja nas mãos da classe trabalhadora.';
const text2 =
    'Sozinhos somos peças fáceis de trocar. Juntos viramos força que muda as regras do jogo. Organizar-se faz crescer a consciência crítica, cria redes de apoio e protege a categoria das pressões do mercado. Queremos quebrar a dependência das Big Techs e lembrar que produção digital também faz parte da luta de classes.';

export default function About() {
    return (
        <section className="bg-cpdd-neutral-950 text-cpdd-neutral-50 relative">
            <WaveDivider
                backgroundClassName="bg-cpdd-neutral-950"
                className="absolute inset-x-0 bg-cpdd-orange-500 h-12 md:h-25"
                widthClassName="min-w-42 w-5/12"
                xPosition="left"
                yPosition="bottom"
            />
            <h2 className="isolate container heading-sm md:display-md text-cpdd-orange-500 mb-4 pt-6 md:pt-11">
                Sobre nós
            </h2>
            <div className="relative body-md md:body-lg">
                <div className="md:container relative aspect-video md:aspect-auto md:h-250">
                    <div className="relative h-full">
                        <Image
                            alt='A imagem de fundo é uma pintura retratando Lenin discursando para uma multidão de operários e soldados. A pintura é titulada "Lenin Proclama Poder Soviético", pintada por Vladimir Serov'
                            src={imageSrc}
                            fill={true}
                            className="object-cover md:clip-about-image inset-~6!"
                        />
                    </div>
                </div>
                <div className="container py-6 grid gap-4 md:grid-cols-2 md:grid-rows-2 md:items-center md:gap-24 md:absolute md:inset-0">
                    <p className="md:col-2">{text1}</p>
                    <p>{text2}</p>
                </div>
            </div>
            <WaveDivider
                backgroundClassName="bg-cpdd-neutral-950"
                className="absolute inset-x-0 top-full h-12 md:h-25"
                widthClassName="w-26 md:w-5/12"
                yPosition="top"
                xPosition="right"
            />
        </section>
    );
}
