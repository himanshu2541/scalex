import React from "react";

const StickyNote = ({ title = "title", desc = "description" }) => {
  return (
    <div className="relative">
      <img src="/sticky-notes/sticky-note.png" alt="" className="h-[400px]" />
      <div className="absolute top-[100px] left-1/2 -translate-x-1/2 flex gap-3 flex-col w-full px-12">
        <div className="font-bold text-2xl text-secondary text-center">
          {title}
        </div>
        <div className="text-sm sm:text-md flex flex-col gap-2">
          {desc.map((d, i) => (
            <div key={i} className="flex gap-1">
              <span>-</span>
              <span>{d}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StickyNote;
