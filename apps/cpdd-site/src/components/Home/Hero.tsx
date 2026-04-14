import ApoiaSeLogoTexto from '../common/ApoiaseLogoTexto';

export default function Hero() {
    return (
        <section className="bg-cpdd-orange-500 text-cpdd-neutral-950">
            <div className="container py-8 sm:py-36 flex items-center">
                <div className="flex flex-col gap-8 sm:gap-12">
                    <h1 className="heading-lg text-end sm:text-start sm:display-lg">
                        Venha fazer parte da revolução brasileira
                    </h1>
                    <p className="sm:max-w-108 text-end sm:text-start body-lg">
                        Lorem ipsum dolor sit amet consectetur. Amet blandit leo imperdiet tristique
                        scelerisque turpis enim lorem id. Dui dui eu accumsan sit iaculis pretium
                        morbi. Velit volutpat dignissim ullamcorper amet eu at magna nec non.
                    </p>
                    <div className="sm:max-w-108 flex flex-col items-start gap-4">
                        <a
                            href="#"
                            target="_blank"
                            className="hidden w-full h-10 button-lg px-12 py-1 border-2 rounded-full border-black transition-colors hover:bg-cpdd-neutral-950 hover:text-cpdd-orange-500"
                        >
                            <p className="w-full text-center">APOIA.se</p> {/*TO-DO: Adicionar logo do apoia.se}*/}
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            className="w-full h-10 button-lg px-12 py-1 border-2 rounded-full border-black transition-colors hover:bg-cpdd-neutral-950 hover:text-cpdd-orange-500"
                        >
                            <p className="w-full text-center">JUNTE-SE À NÓS</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
