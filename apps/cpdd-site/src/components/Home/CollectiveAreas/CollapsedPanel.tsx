import type { Panel } from "./types"

interface CollapsedPanelProps {
    panel: Panel
}

export function CollapsedPanel({ panel }: Readonly<CollapsedPanelProps>) {
    return (
        <span
            className="flex flex-row md:flex-col items-center justify-start md:justify-between gap-4 px-6 md:px-0 py-4 md:py-6 w-full md:w-[90px] h-auto md:h-full shrink-0"
        >
            <span
                className="hidden md:block h-15 w-8 rounded-full shrink-0 transition-[height] duration-300 ease-in-out group-hover:h-28"
                style={{ backgroundColor: panel.panelColor }}
            />

            {/* Mobile: horizontal text with panelColor */}
            <span
                className="md:hidden text-2xl font-semibold tracking-wider uppercase"
                style={{ color: panel.panelColor }}
            >
                {panel.label}
            </span>

            {/* Desktop: vertical text */}
            <span
                className="hidden md:block text-white text-4xl font-semibold tracking-wider rotate-180 transition-[font-size] duration-300 ease-in-out uppercase group-hover:text-5xl"
                style={{ writingMode: "vertical-lr" }}
            >
                {panel.label}
            </span>
        </span>
    )
}
