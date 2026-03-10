'use client';

import { useId, useState } from "react";
import RightArrow from "./RightArrow";

export default function AccordionCard ({label, description}: { label: string, description: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const gridRowsClassName = isOpen ? 'visible grid-rows-[1fr]' : 'invisible grid-rows-[0fr]';
  const id = useId();
  return (
    <div className="bg-cpdd-neutral-950 text-cpdd-neutral-50 rounded-2xl flex flex-col p-2">
      <button
        aria-expanded={isOpen}
        aria-controls={id}
        className="flex gap-2 items-center text-start"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="shrink-0 basis-16 flex justify-center items-center">
          <RightArrow className={`fill-current size-4 transition-[rotate] ${isOpen ? "rotate-90" : ''}`}/>
        </span>
        {label}
      </button>
      <div
        className={`transition-all grid ${gridRowsClassName}`}
        id={id}
        aria-hidden={!isOpen}
      >
        <p className="pl-18 overflow-hidden">
          {description}
        </p>
      </div>
    </div>
  );
}
