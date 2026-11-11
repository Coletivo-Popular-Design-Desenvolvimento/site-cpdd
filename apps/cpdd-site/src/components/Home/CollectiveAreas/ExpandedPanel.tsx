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
            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out flex lg:max-h-none lg:flex-1 lg:rounded-2xl ${mobileHeightClass} ${desktopPointerClass} ${isMobileActive ? 'delay-500' : ''}`}
            aria-hidden={!isMobileActive && !isActive}
            style={{
                backgroundColor: panel.panelColor,
                color: panel.textColor,
            }}
        >
            <div
                className="flex flex-col justify-center gap-4 p-6 z-10 flex-1"
            >
                <div className={`flex flex-col gap-4 lg:transition-opacity ${contentFadeClass}`}>
                    <h3 className="subheading-sm md:subheading-md font-semibold">
                        {panel.title}
                    </h3>
                    <p className="body-sm md:body-md leading-relaxed">
                        {panel.description}
                    </p>
                    <h4 className="subheading-sm md:subheading-md font-semibold mt-2">
                        {panel.activitiesTitle}
                    </h4>
                    <ul className="body-sm md:body-md list-disc pl-5 space-y-1">
                        {panel.activities.map((a, index) => (
                            <li key={`${a}-${index}`}>{a}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Desktop image */}
            <div className="relative basis-3/10 shrink-0 h-90 lg:hidden xl:block xl:h-auto">
                <Image
                    src={panel.image || "/placeholder.svg"}
                    alt={`${panel.title} - ${panel.activitiesTitle}`}
                    fill
                    className="object-cover rounded-s-3xl lg:rounded-none"
                />
                <a
                    className="absolute top-2 left-4 w-min font-heading uppercase font-medium md:font-semibold lg:font-bold text-cpdd-neutral-950 text-sm md:text-200 lg:text-300 leading-none"
                    href={panel.imageLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {panel.imageDesc}
                </a>
            </div>
        </div>
    )
}
