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
        const id = `collective-areas-panel-${panel.id}`;
        return (
            <div
                ref={ref}
                data-index={dataIndex}
                className="group flex flex-col lg:flex-row items-stretch overflow-hidden basis-auto lg:basis-[90px] lg:gap-6"
                style={{
                    flexGrow: isActive ? 1 : 0,
                    transition: "flex-grow 500ms ease",
                }}
            >
                <button
                    onClick={onClick}
                    aria-expanded={isActive || isMobileActive}
                    aria-label={panel.label}
                    aria-controls={id}
                    className="w-full lg:w-auto flex-none border-0 bg-transparent p-0 text-left outline-none focus-visible:inset-ring-2 focus-visible:ring-cpdd-neutral-50"
                >
                    <CollapsedPanel panel={panel} isMobileActive={isMobileActive} />
                </button>
                <ExpandedPanel panel={panel} id={id} isActive={isActive} isMobileActive={isMobileActive} />
            </div>
        )
    }
)
