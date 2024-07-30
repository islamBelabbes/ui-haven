import Image from "next/image";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import cn from "@/lib/cn";

import { motion } from "framer-motion";
import {
  type TBreakPoints,
  type TMods,
  useElementPreviewer,
} from "./element-previewer-root";
import { REPO_URL } from "@/lib/constants";
import { convertCase } from "@/lib/utils";

const breakPoints: {
  device: string;
  width: TBreakPoints;
  icon: React.ReactNode;
}[] = [
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
        className="size-5"
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
    width: 768,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5"
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
        className="size-5"
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

const mods: TMods[] = ["preview", "code"];

function ElementPreviewerHeader() {
  return (
    <div className="bg flex w-full items-center justify-between border p-2">
      <LeftButtons />
      <BreakPoints />
      <Mods />
    </div>
  );
}

const LeftButtons = () => {
  const { element } = useElementPreviewer();
  const githubUrl = `${REPO_URL}/blob/main/src/elements/components/${element.attributes.exported}`;
  const liveUrl = `/elements/${convertCase(element.attributes.exported)}`;
  return (
    <div className="flex gap-3">
      <div>
        <a href={githubUrl} target="_blank">
          <div
            className={buttonVariants({
              variant: "outline",
              className: "flex items-center gap-2",
            })}
          >
            <Image
              src="/github.svg"
              width={96}
              height={96}
              className="size-6"
              alt="github logo"
            />
          </div>
        </a>
      </div>

      <div>
        <a href={liveUrl} target="_blank">
          <div
            className={buttonVariants({
              variant: "outline",
              className: "flex items-center gap-2",
            })}
          >
            <ArrowUpRightIcon />
          </div>
        </a>
      </div>
    </div>
  );
};

const BreakPoints = () => {
  const { breakPoint, setBreakPoint, mod, element } = useElementPreviewer();
  return (
    <div
      className={cn("hidden gap-1 lg:flex", {
        "cursor-not-allowed": mod !== "preview",
      })}
    >
      {breakPoints.map(({ width, icon, device }) => {
        return (
          <div className="relative" key={device}>
            <Button
              disabled={mod !== "preview"}
              className={cn(
                "relative flex size-9 p-2 hover:bg-transparent disabled:z-30",
              )}
              onClick={() => setBreakPoint(width)}
              variant="outline"
            >
              <span className="z-20">{icon}</span>
            </Button>

            {breakPoint === width && (
              <motion.div
                transition={{
                  duration: 0.5,
                  type: "spring",
                  bounce: 0.5,
                }}
                className="absolute inset-0 z-10 rounded bg-accent text-accent-foreground"
                layoutId={`${element.attributes.exported}-breakPoint-switcher`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

const Mods = () => {
  const {
    mod: currentMode,
    setMod,
    element,
    isMounted,
  } = useElementPreviewer();

  return (
    <div className="flex gap-3">
      {mods.map((mod) => {
        return (
          <div className="relative" key={mod}>
            <Button
              disabled={!isMounted}
              onClick={() => setMod(mod)}
              variant="outline"
              className={cn(
                "hover:bg-transparent disabled:relative disabled:z-30",
                {
                  "text-accent-foreground": mod === currentMode,
                },
              )}
            >
              <span className="relative z-20">{mod}</span>
            </Button>

            {mod === currentMode && (
              <motion.div
                className="absolute inset-0 z-10 cursor-pointer rounded bg-accent"
                layoutId={`${element.attributes.exported}-mod-switcher`}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  bounce: 0.5,
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

const ArrowUpRightIcon = () => {
  return (
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
        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
};

export default ElementPreviewerHeader;
