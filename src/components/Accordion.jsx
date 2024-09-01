import React, { useState, useRef } from "react";
import { FaChevronRight } from "react-icons/fa";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="mb-5">
      <button
        className="relative flex items-center justify-between w-full py-7 px-10 text-left text-white transition duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="absolute bottom-0 right-0 w-full h-full rounded-3xl border-b-2 border-r-2 border-[#2386F4]/60"></div>
        <div className="absolute top-0 left-0 w-full h-full rounded-3xl border-t-2 border-l-2 border-[#FB37FF]/60"></div>
        <span className="text-lg">{title}</span>
        <FaChevronRight
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </button>
      <div
        ref={contentRef}
        style={{ height: isOpen ? contentRef.current.scrollHeight : 0 }}
        className="relative overflow-hidden transition-height duration-500 ease-in-out"
      >
        <div className="absolute bottom-0 right-0 w-full h-full rounded-e-3xl border-b-2 border-r-2 border-[#2386F4]/60"></div>
        <div className="py-16 px-20 bg-transparent text-white">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
