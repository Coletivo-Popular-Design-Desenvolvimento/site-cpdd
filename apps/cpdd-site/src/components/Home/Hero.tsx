import Image from "next/image";
import ApoiaseLogo from "@components/common/ApoiaseLogo";
import { AnalyticsLink } from "@lib/analytics";

const imageSrc = "/foice_martelo.png";
const linkApoiase = "https://apoia.se/cpdd";
const linkFormulario = "https://cpdd.notion.site/372c5f6d25f880fdb91bca16c5ad1ec4?pvs=105";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-cpdd-neutral-950 text-cpdd-neutral-50">
            <div className="container grid grid-cols-1 items-center gap-10 py-12 sm:py-20 lg:min-h-[calc(100svh-104px)] lg:grid-cols-[minmax(0,434px)_minmax(0,1fr)] lg:gap-16 lg:py-20">
                <div className="relative z-10 flex w-full flex-col items-start">
                    <h1
                        className="mb-6 w-full max-w-[434px] text-[44px] leading-[43px] text-cpdd-orange-500 sm:text-[50px] sm:leading-[49px] lg:h-[114px] lg:text-[58px] lg:leading-[57px]"
                        style={{
                            fontFamily: "var(--font-barlow-condensed), sans-serif",
                            fontWeight: 600,
                        }}
                    >
                        Tecnologia nas mãos de quem trabalha.
                    </h1>
                    <div className="relative mx-auto w-full max-w-[861px] mb-6 block lg:hidden">
                        <Image
                            src={imageSrc}
                            alt="Foice e martelo projetados sobre dois smartphones na diagonal"
                            width={861}
                            height={609}
                            priority
                            className="h-auto w-full"
                        />
                    </div>
                    <p className="mb-6 w-full max-w-md body-lg"
                        style={{
                                fontFamily: "var(--font-slabo-27px), sans-serif",
                                fontWeight: 400,
                            }}
                        >
                        O CPDD organiza designers, desenvolvedores e profissionais de gestão que
                        acreditam que tecnologia deve servir à classe trabalhadora, não ao mercado.
                        Se você compartilha dessa visão, esse é o seu lugar.
                    </p>
                    <div className="flex w-full max-w-108 flex-col items-start gap-4">
                        <AnalyticsLink
                            analyticsParams={{ eventName: "cta_apoiase_click", ctaLocation: "hero", ctaDesc: "Apoia.se" }}
                            href={linkApoiase}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button-lg flex h-10 w-full items-center justify-center rounded-full border-2 border-cpdd-orange-500 px-12 py-1 text-cpdd-orange-500 transition-transform hover:scale-125 hover:md:scale-110"
                        >
                            <ApoiaseLogo className="w-25 fill-current" />
                        </AnalyticsLink>
                        <AnalyticsLink
                            analyticsParams={{ eventName: "cta_participe_click", ctaLocation: "hero" }}
                            href={linkFormulario}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button-lg flex h-10 w-full items-center justify-center rounded-full bg-cpdd-orange-500 px-12 py-1 text-cpdd-neutral-950 transition-transform hover:scale-125 hover:md:scale-110"
                        >
                            <span className="w-full text-center">Quero participar</span>
                        </AnalyticsLink>
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-[861px] hidden lg:block lg:justify-self-end">
                    <Image
                        src={imageSrc}
                        alt="Foice e martelo projetados sobre dois smartphones na diagonal"
                        width={861}
                        height={609}
                        priority
                        className="h-auto w-full"
                    />
                </div>
            </div>
        </section>
    );
}
