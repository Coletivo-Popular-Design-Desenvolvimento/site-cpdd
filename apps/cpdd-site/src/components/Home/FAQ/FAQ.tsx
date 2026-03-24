import AccordionCard from "./AccordionCard";
import { cards } from "./data";

export default function FAQ() {
    return (
        <section className="full-width layout-grid bg-cpdd-orange-500 text-cpdd-neutral-950">
            <div className="py-6 grid gap-6 items-center md:grid-cols-[5fr_6fr] md:gap-32">
                <div>
                    <h2 className="font-heading text-5xl font-semibold mb-2 md:mb-6 md:text-8xl">FAQ</h2>
                    <p className="font-body text-sm md:text-xl">Lorem ipsum dolor sit amet consectetur. Et urna maecenas amet sodales ut tellus enim neque porta. Integer convallis nulla cras convallis. Posuere vulputate tortor ornare vestibulum auctor. Facilisi elementum in rhoncus dictum. Vitae nunc potenti neque pretium semper. Commodo fermentum tellus pulvinar condimentum arcu nunc. Nulla dignissim ultricies amet vitae nibh. Volutpat viverra lacus accumsan sit mi.</p>
                    <button
                        className="button-lg border-4 border-cpdd-neutral-950 rounded-full py-3 text-xl font-bold hidden md:block w-8/10 mx-auto mt-16"
                        type="button"
                    >
                        Ver Todos
                    </button>
                </div>
                <div className="flex flex-col gap-2 md:gap-6">
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
                >
                    Veja mais perguntas
                </button>
            </div>
        </section>
    );
}
