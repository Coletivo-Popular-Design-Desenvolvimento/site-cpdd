import Image from "next/image"
import type { Panel } from "./types"

interface ExpandedPanelProps {
    panel: Panel
    isActive: boolean
    isMobileActive: boolean
}

export function ExpandedPanel({ panel, isActive, isMobileActive }: Readonly<ExpandedPanelProps>) {
    const mobileHeightClass = isMobileActive ? "max-h-[2000px]" : "max-h-0"
    const desktopPointerClass = isActive ? "" : "md:pointer-events-none"
    const contentFadeClass = isActive
        ? "md:opacity-100 md:duration-200 md:delay-500"
        : "md:opacity-0 md:duration-0 md:delay-0"

    return (
        <div
            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out md:max-h-none md:flex-1 md:flex md:flex-row md:rounded-2xl ${mobileHeightClass} ${desktopPointerClass}`}
            aria-hidden={!isMobileActive && !isActive}
        >
            <div
                className="relative flex flex-col justify-center gap-4 p-8 z-10 w-full md:w-[70%] shrink-0"
                style={{
                    backgroundColor: panel.panelColor,
                    color: panel.textColor,
                }}
            >
                <div className={`flex flex-col gap-4 md:transition-opacity ${contentFadeClass}`}>
                    <h3 className="text-2xl font-bold">
                        {panel.title}
                    </h3>
                    <p className="leading-relaxed line-clamp-5">
                        {panel.description}
                    </p>
                    <h4 className="text-lg font-bold mt-2">
                        {panel.activitiesTitle}
                    </h4>
                    <ul className="list-disc pl-5 space-y-1">
                        {panel.activities.map((a, index) => (
                            <li key={`${a}-${index}`}>{a}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Desktop image */}
            <div className="hidden md:block md:relative flex-1 min-w-0">
                <Image
                    src={panel.image || "/placeholder.svg"}
                    alt={`${panel.title} - ${panel.activitiesTitle}`}
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    )
}
