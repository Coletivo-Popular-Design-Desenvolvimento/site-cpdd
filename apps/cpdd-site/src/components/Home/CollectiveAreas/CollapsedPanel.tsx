import RightArrow from "@src/components/common/RightArrow"
import type { Panel } from "./types"

interface CollapsedPanelProps {
    panel: Panel
    isMobileActive: boolean
}

export function CollapsedPanel({ panel, isMobileActive }: Readonly<CollapsedPanelProps>) {
    return (
        <span
            className="flex flex-row md:flex-col items-center justify-start md:justify-between gap-4 px-6 md:px-0 py-4 md:py-6 w-full md:w-[90px] h-auto md:h-full shrink-0 transition-colors duration-500 ease-in-out md:bg-transparent!"
            style={{
                backgroundColor: isMobileActive ? panel.panelColor : undefined,
            }}
        >
            <span
                className="hidden md:block h-15 w-8 rounded-full shrink-0 transition-[height] duration-300 ease-in-out group-hover:h-28"
                style={{ backgroundColor: panel.panelColor }}
            />

            {/* Mobile: horizontal text — grows & recolors when active */}
            <span
                className={`md:hidden font-semibold tracking-wider uppercase transition-all duration-500 ease-in-out ${
                    isMobileActive ? "text-4xl font-bold" : "text-2xl"
                }`}
                style={{ color: isMobileActive ? panel.textColor : panel.panelColor }}
            >
                {panel.label}
            </span>
            <span
                className="transition-colors duration-500 ease-in-out"
                style={{ color: isMobileActive ? panel.textColor : panel.panelColor }}
            >
                <RightArrow className={`transition-[rotate] fill-current md:hidden size-4 ${isMobileActive ? 'rotate-90' : ''}`}/>
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
