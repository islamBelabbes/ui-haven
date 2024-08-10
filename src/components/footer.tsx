import { REPO_URL } from "@/lib/constants";
import React from "react";

const RESOURCES = [
  {
    id: "github",
    url: REPO_URL,
    logo: "github.svg",
  },
  {
    id: "figma",
    url: "https://www.figma.com/community/file/1124982314884360813",
    logo: "figma.svg",
  },
];

function Footer() {
  return (
    <footer className="mt-4 flex justify-between border-t px-3 py-[18px] md:px-20">
      <span>© 2024 Ping Labs. All rights reserved.</span>

      <ul className="flex gap-2">
        {RESOURCES.map(({ id, url, logo }) => {
          return (
            <li key={id} className="relative size-8">
              <a href={url} target="_blank" rel="noreferrer">
                <img
                  src={`/${logo}`}
                  alt={id}
                  className="absolute h-full w-full"
                />
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}

export default Footer;
