import Image from "next/image"
import type { Panel } from "./types"

interface ExpandedPanelProps {
    panel: Panel
    isActive: boolean
}

export function ExpandedPanel({ panel, isActive }: Readonly<ExpandedPanelProps>) {
    return (
        <div
            className="absolute inset-0 flex"
            style={{
                opacity: isActive ? 1 : 0,
                transition: "opacity 400ms ease 150ms",
                pointerEvents: isActive ? "auto" : "none",
            }}
        >
            <div
                className="relative flex flex-col justify-center gap-4 p-8 shrink-0 z-10"
                style={{
                    backgroundColor: panel.color,
                    width: "50%",
                    minWidth: "280px",
                }}
            >
                <h3 className="text-2xl font-bold">
                    {panel.title}
                </h3>
                <p className="text-sm leading-relaxed line-clamp-5">
                    {panel.description}
                </p>
                <h4 className="text-lg font-bold mt-2">
                    {panel.activitiesTitle}
                </h4>
                <ul className="list-disc pl-5 text-sm space-y-1">
                    {panel.activities.map((a, index) => (
                        <li key={`${a}-${index}`}>{a}</li>
                    ))}
                </ul>
            </div>

            <div className="relative flex-1 min-w-0">
                <Image
                    src={panel.image || "/placeholder.svg"}
                    alt={panel.title}
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    )
}
