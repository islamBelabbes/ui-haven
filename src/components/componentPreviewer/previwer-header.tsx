import Image from "next/image";
import React from "react";

const breakPoints = [
  {
    device: "laptop",
    width: 1024,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
        />
      </svg>
    ),
  },
  {
    device: "tablet",
    with: 768,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z"
        />
      </svg>
    ),
  },
  {
    device: "mobile",
    width: 390,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
  },
];

function PreviewerHeader() {
  return (
    <div className="flex w-full items-center justify-between">
      <EditOnGitHub />
      <BreakPoints />
      <Tabs />
    </div>
  );
}

const EditOnGitHub = () => {
  return (
    <a href="">
      <div className="flex items-center gap-1 rounded bg-black/80 px-3 py-2 text-sm font-bold">
        <Image
          src="github.svg"
          width={96}
          height={96}
          className="size-7"
          alt="github logo"
        />
        <span>Edit on github</span>
      </div>
    </a>
  );
};

const BreakPoints = () => {
  return (
    <div className="flex gap-1">
      {breakPoints.map(({ device, width, icon }) => {
        return (
          <button
            key={device}
            className="flex size-9 items-center justify-center rounded bg-black/80"
          >
            {icon}
          </button>
        );
      })}
    </div>
  );
};

const Tabs = () => {
  return (
    <div className="flex gap-1">
      <button className="rounded bg-black/80 px-3 py-2 text-sm font-bold">
        Preview
      </button>
      <button className="rounded bg-black/80 px-3 py-2 text-sm font-bold">
        Code
      </button>
    </div>
  );
};

export default PreviewerHeader;
