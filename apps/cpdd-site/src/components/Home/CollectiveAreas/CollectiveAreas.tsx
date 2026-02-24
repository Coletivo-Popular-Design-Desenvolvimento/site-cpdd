"use client"

import { useState } from "react"
import { panels } from "./data"
import { AccordionPanel } from "./AccordionPanel"

export function CollectiveAreas() {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <section className="relative w-full py-12 px-6 md:px-12 lg:px-20 overflow-hidden" aria-labelledby="areas-do-coletivo-heading">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white" id="areas-do-coletivo-heading">
                    Áreas do Coletivo
                </h2>
            </div>

            <div className="flex flex-col md:flex-row h-[1100px] md:h-[640px] gap-2 rounded-2xl overflow-hidden">
                {panels.map((panel, index) => (
                    <AccordionPanel
                        key={panel.id}
                        panel={panel}
                        isActive={activeIndex === index}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>
        </section>
    )
}
