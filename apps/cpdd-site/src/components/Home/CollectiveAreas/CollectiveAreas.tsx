"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { panels } from "./data"
import { AccordionPanel } from "./AccordionPanel"
import WaveDivider from "@components/common/WaveDivider"

export function CollectiveAreas() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [mobileActiveSet, setMobileActiveSet] = useState<Set<number>>(new Set())
    const panelRefs = useRef<(HTMLDivElement | null)[]>([])
    const queueRef = useRef<number[]>([])
    const processingRef = useRef(false)
    const activeSetRef = useRef<Set<number>>(new Set())

    const processQueue = useCallback(function drain() {
        if (processingRef.current) return
        if (queueRef.current.length === 0) return

        processingRef.current = true
        const index = queueRef.current.shift()!

        setMobileActiveSet((prev) => {
            const next = new Set(prev)
            next.add(index)
            activeSetRef.current = next
            return next
        })

        globalThis.setTimeout(() => {
            processingRef.current = false
            drain()
        }, 400)
    }, [])

    const enqueuePanel = useCallback((index: number) => {
        if (activeSetRef.current.has(index)) return
        if (queueRef.current.includes(index)) return
        queueRef.current.push(index)
        processQueue()
    }, [processQueue])

    // Scroll-based: only ADDS panels to the active set, never removes
    useEffect(() => {
        const mediaQuery = globalThis.matchMedia("(max-width: 767px)")
        let observer: IntersectionObserver | null = null

        function handleIntersection(entries: IntersectionObserverEntry[]) {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    const index = Number((entry.target as HTMLElement).dataset.index)
                    if (!Number.isNaN(index)) {
                        enqueuePanel(index)
                    }
                }
            }
        }

        function setup() {
            observer?.disconnect()
            observer = null

            if (!mediaQuery.matches) return

            observer = new IntersectionObserver(handleIntersection, {
                root: null,
                rootMargin: "-30% 0px -50% 0px",
                threshold: 0,
            })

            panelRefs.current.forEach((ref) => {
                if (ref) observer!.observe(ref)
            })
        }

        setup()
        mediaQuery.addEventListener("change", setup)

        return () => {
            observer?.disconnect()
            mediaQuery.removeEventListener("change", setup)
        }
    }, [enqueuePanel])

    function handleClick(index: number) {
        setActiveIndex(index)
        // Click toggles on mobile
        setMobileActiveSet((prev) => {
            const next = new Set(prev)
            if (next.has(index)) {
                next.delete(index)
            } else {
                next.add(index)
            }
            activeSetRef.current = next
            return next
        })
    }

    const setPanelRef = useCallback((el: HTMLDivElement | null, index: number) => {
        panelRefs.current[index] = el
    }, [])

    return (
        <section className="relative w-full overflow-hidden bg-cpdd-neutral-950" aria-labelledby="areas-do-coletivo-heading">
            <div className="relative">
                <WaveDivider
                    backgroundClassName="bg-cpdd-neutral-950"
                    className="bg-cpdd-neutral-50 absolute inset-0"
                    widthClassName="min-w-56 md:min-w-130 w-5/12"
                    xPosition="left"
                    yPosition="bottom"
                />
                <div className="isolate container min-h-12 md:min-h-25 flex items-center">
                    <h2 className="heading-sm md:display-md md:pt-11 mb-4" id="areas-do-coletivo-heading">
                        Áreas do Coletivo
                    </h2>
                </div>
            </div>
            <div className="md:container md:my-6 flex flex-col md:flex-row md:h-[640px] md:gap-6 md:rounded-2xl overflow-hidden">
                {panels.map((panel, index) => (
                    <AccordionPanel
                        key={panel.id}
                        ref={(el) => setPanelRef(el, index)}
                        dataIndex={index}
                        panel={panel}
                        isActive={activeIndex === index}
                        isMobileActive={mobileActiveSet.has(index)}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </div>
            <WaveDivider
                backgroundClassName="bg-cpdd-neutral-950"
                className="bg-cpdd-orange-500 h-12 md:h-25"
                widthClassName="min-w-56 md:min-w-130 w-5/12"
                xPosition="left"
                yPosition="top"
            />
        </section>
    )
}
