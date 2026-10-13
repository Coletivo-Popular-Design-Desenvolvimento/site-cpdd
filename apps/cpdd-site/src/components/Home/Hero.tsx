import Image from "next/image";
import ApoiaseLogo from "@components/common/ApoiaseLogo";
import { AnalyticsLink } from "@lib/analytics";

const imageSrc = "/foice_martelo.png";
const imageAlt = "Foice e martelo projetados sobre dois smartphones na diagonal";
const linkApoiase = "https://apoia.se/cpdd";
const linkFormulario = "https://cpdd.notion.site/372c5f6d25f880fdb91bca16c5ad1ec4?pvs=105";

export default function Hero() {
    return (
        <section className="bg-cpdd-neutral-950 text-cpdd-neutral-50">
            <div className="container lg:flex lg:items-center lg:gap-16">
                <div className="lg:basis-108 py-7 md:py-46">
                    <h1 className="mb-4 lg:mb-6 text-cpdd-orange-500 font-heading font-semibold text-400 md:text-500 lg:text-600">
                        Tecnologia nas mãos de quem trabalha.
                    </h1>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={861}
                        height={609}
                        className="block lg:hidden mx-auto mb-4"
                    />
                    <p className="mb-6 body-sm text-sm md:body-md lg:body-lg">
                        O CPDD organiza designers, desenvolvedores e profissionais de gestão que
                        acreditam que tecnologia deve servir à classe trabalhadora, não ao mercado.
                        Se você compartilha dessa visão, esse é o seu lugar.
                    </p>
                    <div className="flex flex-col items-start gap-4">
                        <AnalyticsLink
                            analyticsParams={{ eventName: "cta_apoiase_click", ctaLocation: "hero", ctaDesc: "Apoia.se" }}
                            href={linkApoiase}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button-lg h-10 w-full flex items-center justify-center rounded-full border-2 px-12 py-1 border-cpdd-orange-500 text-cpdd-orange-500 transition-transform hover:scale-125 hover:md:scale-110"
                        >
                            <ApoiaseLogo className="w-25 fill-current" />
                        </AnalyticsLink>
                        <AnalyticsLink
                            analyticsParams={{ eventName: "cta_participe_click", ctaLocation: "hero" }}
                            href={linkFormulario}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button-lg h-10 w-full flex items-center justify-center rounded-full px-12 py-1 bg-cpdd-orange-500 text-cpdd-neutral-950 transition-transform hover:scale-125 hover:md:scale-110"
                        >
                            Quero participar
                        </AnalyticsLink>
                    </div>
                </div>
                <div className="flex-1">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={861}
                        height={609}
                        className="hidden lg:block mx-auto"
                    />
                </div>
            </div>
        </section>
    );
}
