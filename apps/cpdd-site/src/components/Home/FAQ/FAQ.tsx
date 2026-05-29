import AccordionCard from "./AccordionCard";
import { cards } from "./data";

export default function FAQ() {
    return (
        <section className="bg-cpdd-orange-500 text-cpdd-neutral-950">
            <div className="container py-6 flex flex-col gap-6 md:flex-row md:gap-34 md:items-center">
                <div className="md:flex-1">
                    <h2 className="font-heading text-5xl font-semibold mb-2 md:mb-6 md:text-8xl">FAQ</h2>
                    <p className="font-body text-sm md:text-xl">Reunimos aqui as perguntas mais comuns de quem está conhecendo o CPDD. Antes de participar, é normal querer entender como o coletivo funciona, o que se espera de quem entra e como é a rotina por dentro. As respostas abaixo cobrem o essencial. Se a sua dúvida não estiver na lista, é só falar com a gente.</p>
                    <button
                        className="button-lg border-4 border-cpdd-neutral-950 rounded-full py-3 text-xl font-bold hidden md:block w-8/10 mx-auto mt-16"
                        type="button"
                        hidden
                    >
                        Ver Todos
                    </button>
                </div>
                <div className="flex flex-col gap-2 md:flex-1 md:gap-6">
                    {cards.map((card) => (
                        <AccordionCard
                            key={card.id}
                            label={card.label}
                            description={card.description}
                        />
                    ))}
                </div>
                <button
                    className="button-sm border-2 border-cpdd-neutral-950 rounded-lg py-3 text-sm font-bold md:hidden block w-7/10 mx-auto"
                    type="button"
                    hidden
                >
                    Veja mais perguntas
                </button>
            </div>
        </section>
    );
}
