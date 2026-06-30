import ApoiaseLogo from "@components/common/ApoiaseLogo";
import { AnalyticsLink } from "@lib/analytics";

const linkApoiase = 'https://apoia.se/cpdd';
const linkFormulario = 'https://docs.google.com/forms/d/e/1FAIpQLSfRAP3ykDl7eq7XRjTytIn_35WXso2bnJwY1ZpeGrD5VklAAw/viewform';

export default function Hero() {
    return (
        <section className="bg-cpdd-orange-500 text-cpdd-neutral-950">
            <div className="container py-11 sm:py-47 flex items-center">
                <div className="flex flex-col items-end sm:items-start">
                    <h1 className="max-w-3xl heading-lg sm:display-lg mb-11">
                        Tecnologia nas mãos de quem trabalha.
                    </h1>
                    <p className="max-w-md body-lg mb-2">
                        O CPDD organiza designers, desenvolvedores e profissionais de gestão que
                        acreditam que tecnologia deve servir à classe trabalhadora, não ao mercado.
                        Se você compartilha dessa visão, esse é o seu lugar.
                    </p>
                    <div className="mt-4 w-full sm:max-w-108 flex flex-col items-start gap-4">
                        <a
                            href={linkApoiase}
                            target="_blank"
                            className="w-full h-10 button-lg px-12 py-1 border-2 rounded-full border-black transition-colors hover:bg-cpdd-orange-700 hover:text-cpdd-neutral-950 flex items-center justify-center"
                        >
                            <ApoiaseLogo className="fill-current w-25"/>
                        </a>
                        <AnalyticsLink
                            analyticsParams={{ eventName: 'cta_participe_click', ctaLocation: 'hero' }}
                            href={linkFormulario}
                            target="_blank"
                            className="w-full h-10 button-lg px-12 py-1 rounded-full transition-colors hover:bg-cpdd-neutral-50 hover:text-cpdd-neutral-950 bg-cpdd-neutral-950 text-cpdd-neutral-50"
                        >
                            <p className="w-full text-center">Junte-se à nós</p>
                        </AnalyticsLink>
                    </div>
                </div>
            </div>
        </section>
    );
}
