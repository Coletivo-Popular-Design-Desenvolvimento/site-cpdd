import type { Panel } from "./types"
import { CollapsedPanel } from "./CollapsedPanel"
import { ExpandedPanel } from "./ExpandedPanel"

interface AccordionPanelProps {
    panel: Panel
    isActive: boolean
    panelCount: number
    onClick: () => void
}

export function AccordionPanel({ panel, isActive, panelCount, onClick }: Readonly<AccordionPanelProps>) {
    return (
        <button
            onClick={onClick}
            aria-expanded={isActive}
            aria-label={panel.label}
            className="group relative overflow-hidden rounded-2xl border-0 bg-neutral-900 p-0 text-left outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            style={{
                flexGrow: isActive ? panelCount : 0,
                flexShrink: 0,
                flexBasis: isActive ? 0 : "90px",
                transition: "flex-grow 500ms ease",
            }}
        >
            <CollapsedPanel panel={panel} isActive={isActive} />
            <ExpandedPanel panel={panel} isActive={isActive} />
        </button>
    )
}
