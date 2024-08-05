"use client";
import { useState } from "react";
import { AnimateChangeInHeight } from "@/components/animate-change-in-height";
import RotatableArrow from "@/elements/shared/rotatable-arrow";

function InfoCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div className="flex max-w-[18.125rem] flex-col gap-5 rounded bg-white p-4 transition">
      {/* top */}
      <div className="flex items-center justify-between">
        <span className="text-sm/[19px] font-semibold text-slate-500">
          Endanged Species
        </span>
        <button className="flex max-h-6 max-w-6 items-center justify-center rounded border border-[#E7EAEE] p-1">
          <CloseIcon />
        </button>
      </div>

      {/* Details */}
      <div className="flex items-center gap-4">
        <div className="relative !size-12 rounded-full">
          <img
            className="absolute inset-0 h-full w-full rounded-full object-cover"
            alt="tiger"
            src="/tiger.png"
          />
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="font-medium leading-[22px] text-[#191D23]">
            Bengal tiger
          </h3>
          <span className="text-sm/[0.975rem] text-slate-500">
            Found in 53 countries
          </span>
          <span className="text-sm/[19px] text-emerald-700">Panthera</span>
        </div>
      </div>

      {/* About */}
      <div className="font-semibold text-[#191D23]">
        <h2 className="leading-[22px]">About</h2>
        <AnimateChangeInHeight
          className={{
            parent: "my-1",
          }}
        >
          <p
            className="line-clamp-3 font-normal leading-[22px] transition"
            style={{
              WebkitLineClamp: isExpanded ? "unset" : undefined,
            }}
          >
            The Bengal tiger is a population of the Panthera tigris tigris
            subspecies. It ranks among the biggest wild cats alive today. It is
            considered to belong to the world&lsquo;s charismatic megafauna.
          </p>
        </AnimateChangeInHeight>
        <button
          className="flex items-center gap-1 text-sm/[19px]"
          onClick={toggleExpanded}
        >
          <span>{isExpanded ? "Show Less" : "Show More"}</span>
          <RotatableArrow isUp={isExpanded} />
        </button>
      </div>
    </div>
  );
}

const CloseIcon = () => {
  return (
    <svg
      className="size-4"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4L4 12"
        stroke="#191D23"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 4L12 12"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default InfoCard;
