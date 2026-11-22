import Image from 'next/image';
import ApoiaseLogo from '@components/common/ApoiaseLogo';
import { AnalyticsLink } from '@lib/analytics';

const imageSrc = '/foice_martelo.png';
const imageAlt = 'Notebook com foice e martelo em neon, com brilho';
const linkApoiase = 'https://apoia.se/cpdd';
const linkFormulario = 'https://cpdd.notion.site/372c5f6d25f880fdb91bca16c5ad1ec4';

export default function Hero() {
    return (
        <section className="bg-cpdd-neutral-950 text-cpdd-neutral-50">
            <div className="container grid py-7 lg:grid-cols-2 lg:items-center lg:gap-x-16 lg:py-46">
                <h1 className="mb-4 text-cpdd-orange-500 font-heading font-semibold text-400 tracking-tight leading-tight lg:col-start-1 lg:row-start-1 lg:mb-6 lg:text-600">
                    Tecnologia nas mãos de quem trabalha<span className="lg:hidden">.</span>
                </h1>
                <div className="relative row-start-2 mx-auto mb-4 w-full lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:mb-0">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={861}
                        height={537}
                        className="relative z-10 mx-auto w-full"
                        priority
                    />
                </div>
                <p className="mb-8 lg:mb-16 text-sm md:body-md lg:col-start-1 lg:row-start-2 lg:body-lg">
                    O CPDD organiza designers, desenvolvedores, publicitários e profissionais de
                    gestão que acreditam que tecnologia deve servir à classe trabalhadora, não ao
                    mercado. Se você compartilha dessa visão, esse é o seu lugar.
                </p>
                <div className="flex flex-col items-start gap-4 lg:col-start-1 lg:row-start-3">
                    <AnalyticsLink
                        analyticsParams={{
                            eventName: 'cta_apoiase_click',
                            ctaLocation: 'hero',
                            ctaDesc: 'Apoia.se'
                        }}
                        aria-label="Acesse nosso Apoia.se"
                        href={linkApoiase}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group button-lg h-10 w-full flex items-center justify-center rounded-full border-2 px-12 py-1 border-cpdd-orange-500 text-cpdd-orange-500 motion-safe:transition-shadow motion-safe:duration-300 motion-safe:ease-out hover:inset-ring-2 hover:inset-ring-cpdd-orange-500 lg:border"
                    >
                        <ApoiaseLogo
                            className="w-25 fill-current motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:group-hover:scale-120"
                            role="img"
                            aria-label="Apoia.se"
                        />
                    </AnalyticsLink>
                    <AnalyticsLink
                        analyticsParams={{ eventName: 'cta_participe_click', ctaLocation: 'hero' }}
                        href={linkFormulario}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group button-lg h-10 w-full flex items-center justify-center rounded-full px-12 py-1 bg-cpdd-orange-500 text-cpdd-neutral-950"
                    >
                        <span className="motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:group-hover:scale-110">
                            Quero participar
                        </span>
                    </AnalyticsLink>
                </div>
            </div>
        </section>
    );
}
