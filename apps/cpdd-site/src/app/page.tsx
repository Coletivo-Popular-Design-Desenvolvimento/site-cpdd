import { AccordionGroup, type AccordionItemData } from "@cpdd/ui";

const accordionItems1: AccordionItemData[] = [
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

const accordionItems2: AccordionItemData[] = [
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

export default function Home() {
    return (
        <div className="flex flex-col gap-4 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1 className="text-4xl font-bold">Site do CPDD</h1>

            <div className="m-6 space-y-10 w-full">
                <div>
                    <h2 className="mb-2 text-2xl font-semibold">Accordion Group 1</h2>
                    <AccordionGroup items={accordionItems1} />
                </div>
                <div>
                    <h2 className="mb-2 text-2xl font-semibold">Accordion Group 2</h2>
                    <AccordionGroup items={accordionItems2} />
                </div>
            </div>
        </div>
    );
}
