import Image from "next/image"
import type { Panel } from "./types"

interface ExpandedPanelProps {
    panel: Panel
    isActive: boolean
    isMobileActive: boolean
}

export function ExpandedPanel({ panel, isActive, isMobileActive }: Readonly<ExpandedPanelProps>) {
    const mobileHeightClass = isMobileActive ? "max-h-[2000px]" : "max-h-0"
    const desktopPointerClass = isActive ? "" : "lg:pointer-events-none"
    const contentFadeClass = isActive
        ? "lg:opacity-100 lg:duration-200 lg:delay-500"
        : "lg:opacity-0 lg:duration-0 lg:delay-0"

    return (
        <div
            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out lg:max-h-none lg:flex-1 lg:flex lg:flex-row lg:rounded-2xl ${mobileHeightClass} ${desktopPointerClass}`}
            aria-hidden={!isMobileActive && !isActive}
        >
            <div
                className="relative flex flex-col justify-center gap-4 p-8 z-10 w-full xl:w-[70%] shrink-0"
                style={{
                    backgroundColor: panel.panelColor,
                    color: panel.textColor,
                }}
            >
                <div className={`flex flex-col gap-4 lg:transition-opacity ${contentFadeClass}`}>
                    <h3 className="subheading-md font-semibold">
                        {panel.title}
                    </h3>
                    <p className="body-md leading-relaxed">
                        {panel.description}
                    </p>
                    <h4 className="subheading-md font-semibold mt-2">
                        {panel.activitiesTitle}
                    </h4>
                    <ul className="body-md list-disc pl-5 space-y-1">
                        {panel.activities.map((a, index) => (
                            <li key={`${a}-${index}`}>{a}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Desktop image */}
            <div className="hidden xl:block lg:relative flex-1 min-w-0">
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
