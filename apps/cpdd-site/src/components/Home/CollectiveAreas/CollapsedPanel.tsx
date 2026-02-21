import type { Panel } from "./types"

interface CollapsedPanelProps {
    panel: Panel
    isActive: boolean
}

export function CollapsedPanel({ panel, isActive }: Readonly<CollapsedPanelProps>) {
    return (
        <div
            className="absolute inset-0 flex flex-row md:flex-col items-center justify-start md:justify-between gap-4 px-6 md:px-0 md:py-6"
            style={{
                opacity: isActive ? 0 : 1,
                transition: "opacity 300ms ease",
                pointerEvents: isActive ? "none" : "auto",
            }}
        >
            <span
                className="hidden md:block h-15 w-8 rounded-full shrink-0 transition-[height] duration-300 ease-in-out group-hover:h-28"
                style={{ backgroundColor: panel.dotColor }}
            />

            {/* Mobile: horizontal text with dotColor */}
            <span
                className="md:hidden text-2xl font-semibold tracking-wider uppercase"
                style={{ color: panel.dotColor }}
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
        </div>
    )
}
