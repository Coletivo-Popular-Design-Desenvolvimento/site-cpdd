import { AccordionGroup } from "@cpdd/ui";
import type { AccordionItemData } from "@cpdd/ui";

export const accordionItems1: AccordionItemData[] = [
    {
        title: 'Accordion #1',
        content: "This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions."
    },
    {
        title: 'Accordion #2',
        content: "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions."
    },
    {
        title: 'Accordion #3',
        content: "This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions."
    }
];

export const accordionItems2: AccordionItemData[] = [
    {
        title: 'Accordion #1',
        content: "This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions."
    },
    {
        title: 'Accordion #2',
        content: "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions."
    },
    {
        title: 'Accordion #3',
        content: "This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions."
    }
];


export default function FAQ() {
    return (
        <div className="flex flex-col space-y-8 bg-slate-800 p-6 rounded-2xl">
            <div>
                <h2 className="mb-2 text-2xl font-semibold">Grupo 1</h2>
                <AccordionGroup items={accordionItems1} />
            </div>
            <div>
                <h2 className="mb-2 text-2xl font-semibold">Grupo 2</h2>
                <AccordionGroup items={accordionItems2} />
            </div>
        </div>
    );
}
