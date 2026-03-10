import AccordionCard from "./AccordionCard";
import { cards } from "./data";

export default function FAQ() {
    return (
        <section className="full-width layout-grid bg-cpdd-orange-500 text-cpdd-neutral-950">
            <div className="py-6">
                <div>
                    <h2 className="text-5xl font-semibold mb-2">FAQ</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Et urna maecenas amet sodales ut tellus enim neque porta. Integer convallis nulla cras convallis. Posuere vulputate tortor ornare vestibulum auctor. Facilisi elementum in rhoncus dictum. Vitae nunc potenti neque pretium semper. Commodo fermentum tellus pulvinar condimentum arcu nunc. Nulla dignissim ultricies amet vitae nibh. Volutpat viverra lacus accumsan sit mi.</p>
                </div>
                <div className="flex flex-col gap-2">
                    {cards.map((card) => (
                        <AccordionCard
                            key={card.id}
                            label={card.label}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
