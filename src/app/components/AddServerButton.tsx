import React from "react";
import { PlusIcon } from "./icons";

export default function AddServerButton() {
  return (
    <div className="group relative mt-2 cursor-pointer">
      <div className="absolute -left-3 flex h-full items-center">
        <div
          className={`${false ? "h-10 scale-100 opacity-100" : "h-5 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"} w-1 origin-left rounded-r bg-white transition-all duration-200`}
        ></div>
      </div>
      <div className="group-active:translate-y-px">
        <div
          className={`${false ? "bg-brand rounded-2xl text-white" : "group-hover:bg-brand-green overflow-hidden rounded-3xl bg-gray-700 text-gray-100 group-hover:rounded-2xl group-hover:text-white"} flex h-12 w-12 items-center justify-center overflow-hidden transition-all duration-200`}
        >
          <PlusIcon className="text-brand-green h-6 w-6 transition group-hover:text-white" />
        </div>
      </div>
    </div>
  );
}
