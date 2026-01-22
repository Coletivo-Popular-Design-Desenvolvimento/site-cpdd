import AccordionItem from './AccordionItem';

export interface AccordionItemData {
    id?: string;
    title: string;
    content: string;
}

export interface AccordionGroupProps {
    readonly items: readonly AccordionItemData[];
    readonly className?: string;
}

export default function AccordionGroup({ items, className = '' }: AccordionGroupProps) {
    return (
        <div className={`hs-accordion-group ${className}`}>
            {items.map((item, index) => (
                <AccordionItem
                    key={item.id ?? `accordion-item-${index}`}
                    title={item.title}
                    content={item.content}
                />
            ))}
        </div>
    );
}
