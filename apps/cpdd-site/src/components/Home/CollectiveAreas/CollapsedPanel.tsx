import type { Panel } from "./types"

interface CollapsedPanelProps {
    panel: Panel
    isActive: boolean
}

export function CollapsedPanel({ panel, isActive }: Readonly<CollapsedPanelProps>) {
    return (
        <div
            className="absolute inset-0 flex flex-col items-center justify-between py-6"
            style={{
                opacity: isActive ? 0 : 1,
                transition: "opacity 300ms ease",
                pointerEvents: isActive ? "none" : "auto",
            }}
        >
            <span
                className="h-6 w-3 rounded-full shrink-0"
                style={{ backgroundColor: panel.dotColor }}
            />

            <span
                className="text-white text-sm font-semibold tracking-wider"
                style={{ writingMode: "vertical-lr" }}
            >
                {panel.label}
            </span>

            <span className="h-3 w-3 shrink-0" />
        </div>
    )
}
