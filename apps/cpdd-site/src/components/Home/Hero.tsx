export default function Hero() {
    return (
        <section className="bg-cpdd-orange-500 text-cpdd-neutral-950">
            <div className="container py-11 sm:py-47 flex items-center">
                <div className="flex flex-col items-end sm:items-start gap-6 sm:gap-11">
                    <h1 className="max-w-3xl heading-lg text-end sm:text-start sm:display-lg">
                        Tecnologia nas mãos de quem trabalha.
                    </h1>
                    <h2 className="max-w-md text-end sm:text-start subheading-sm">
                        O CPDD organiza designers, desenvolvedores e profissionais de gestão que
                        acreditam que tecnologia deve servir à classe trabalhadora, não ao mercado.
                        Se você compartilha dessa visão, esse é o seu lugar.
                    </h2>
                    <div className="w-full sm:max-w-108 flex flex-col items-start gap-4">
                        <a
                            href="#"
                            target="_blank"
                            className="w-full h-10 button-lg px-12 py-1 border-2 rounded-full border-black transition-colors hover:bg-cpdd-neutral-950 hover:text-cpdd-orange-500"
                        >
                            <p className="w-full text-center">Quero fazer parte</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
