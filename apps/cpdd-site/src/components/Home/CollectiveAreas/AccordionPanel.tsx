import { forwardRef } from "react"
import type { Panel } from "./types"
import { CollapsedPanel } from "./CollapsedPanel"
import { ExpandedPanel } from "./ExpandedPanel"

interface AccordionPanelProps {
    panel: Panel
    isActive: boolean
    isMobileActive: boolean
    onClick: () => void
    dataIndex: number
}

export const AccordionPanel = forwardRef<HTMLDivElement, AccordionPanelProps>(
    function AccordionPanel({ panel, isActive, isMobileActive, onClick, dataIndex }, ref) {
        return (
            <div
                ref={ref}
                data-index={dataIndex}
                className="group flex flex-col md:flex-row items-stretch overflow-hidden basis-auto md:basis-[90px] md:gap-6"
                style={{
                    flexGrow: isActive ? 1 : 0,
                    transition: "flex-grow 500ms ease",
                }}
            >
                <button
                    onClick={onClick}
                    aria-expanded={isActive || isMobileActive}
                    aria-label={panel.label}
                    className="w-full md:w-auto flex-none border-0 bg-transparent p-0 text-left outline-none focus-visible:inset-ring-2 focus-visible:ring-cpdd-neutral-50"
                >
                    <CollapsedPanel panel={panel} isMobileActive={isMobileActive} />
                </button>
                <ExpandedPanel panel={panel} isActive={isActive} isMobileActive={isMobileActive} />
            </div>
        )
    }
)
