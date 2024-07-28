"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function InfoCard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHeightChanged, setIsHeightChanged] = useState(false);

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
        <h2 className="mb-1 leading-[22px]">About</h2>
        <AnimateChangeInHeight>
          <div className="inline-block">
            <p
              className="mb-1 line-clamp-3 font-normal leading-[22px] transition"
              style={{
                WebkitLineClamp: isExpanded ? "unset" : undefined,
              }}
            >
              The Bengal tiger is a population of the Panthera tigris tigris
              subspecies. It ranks among the biggest wild cats alive today. It
              is considered to belong to the world's charismatic megafauna.
            </p>
          </div>
        </AnimateChangeInHeight>
        <button
          className="flex items-center gap-1 text-sm/[19px]"
          onClick={toggleExpanded}
        >
          <span>{isExpanded ? "Show Less" : "Show More"}</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : undefined }}
            transition={{ duration: 0.3 }}
          >
            <ShowMoreIcon />
          </motion.div>
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

const ShowMoreIcon = () => {
  return (
    <svg
      className="size-5"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5893 13.0892C10.2638 13.4146 9.73618 13.4146 9.41074 13.0892L5.24408 8.92251C4.91864 8.59707 4.91864 8.06943 5.24408 7.744C5.56951 7.41856 6.09715 7.41856 6.42259 7.744L10 11.3214L13.5774 7.744C13.9028 7.41856 14.4305 7.41856 14.7559 7.744C15.0814 8.06943 15.0814 8.59707 14.7559 8.92251L10.5893 13.0892Z"
        fill="#191D23"
      />
    </svg>
  );
};

export default InfoCard;

interface AnimateChangeInHeightProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimateChangeInHeight: React.FC<AnimateChangeInHeightProps> = ({
  children,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number | "auto">("auto");

  useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        // We only have one entry, so we can use entries[0].
        const observedHeight = entries[0]!.contentRect.height;
        setHeight(observedHeight);
      });

      resizeObserver.observe(containerRef.current);

      return () => {
        // Cleanup the observer when the component is unmounted
        resizeObserver.disconnect();
      };
    }
  }, []);

  return (
    <motion.div
      className={"overflow-hidden"}
      style={{ height }}
      animate={{ height }}
      transition={{ duration: 0.2 }}
    >
      <div ref={containerRef}>{children}</div>
    </motion.div>
  );
};
