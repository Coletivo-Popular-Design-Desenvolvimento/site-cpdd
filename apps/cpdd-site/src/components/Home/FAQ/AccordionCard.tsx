'use client';

import { useId, useState } from "react";
import RightArrow from "@components/common/RightArrow";

export default function AccordionCard ({label, description}: { label: string, description: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const stateClassName = isOpen ? 'visible grid-rows-[1fr] pt-2' : 'invisible grid-rows-[0fr]';
  const id = useId();
  return (
    <div className="bg-cpdd-neutral-950 text-cpdd-neutral-50 rounded-2xl flex flex-col p-3 md:rounded-4xl md:p-8">
      <button
        aria-expanded={isOpen}
        aria-controls={id}
        className="font-button flex gap-2 items-center text-start font-semibold text-sm md:text-2xl text-[#D9D9D9]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="shrink-0 basis-16 flex justify-center items-center">
          <RightArrow className={`fill-current size-4 md:size-6 transition-[rotate] ${isOpen ? "rotate-90" : ''}`}/>
        </span>
        {label}
      </button>
      <div
        className={`transition-all grid ${stateClassName}`}
        id={id}
        aria-hidden={!isOpen}
      >
        <p className="font-body-alt pl-18 overflow-hidden text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
