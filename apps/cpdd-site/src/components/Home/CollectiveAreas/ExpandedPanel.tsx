import Image from "next/image"
import type { Panel } from "./types"

interface ExpandedPanelProps {
    panel: Panel
    isActive: boolean
}

export function ExpandedPanel({ panel, isActive }: Readonly<ExpandedPanelProps>) {
    return (
        <div
            className="absolute inset-0 flex md:flex-row"
            style={{
                opacity: isActive ? 1 : 0,
                transition: "opacity 400ms ease 150ms",
                pointerEvents: isActive ? "auto" : "none",
            }}
        >
            <div
                className="relative flex flex-col justify-center gap-4 p-8 z-10 w-full md:w-[70%] shrink-0"
                style={{
                    backgroundColor: panel.panelColor,
                    color: panel.textColor,
                }}
            >
                <div
                    className="flex flex-col gap-4"
                    style={{
                        opacity: isActive ? 1 : 0,
                        transition: isActive ? "opacity 250ms ease 450ms" : "opacity 50ms ease 0ms",
                    }}
                >
                <h2 className="text-4xl font-bold uppercase relative md:hidden">{panel.label}</h2>

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
