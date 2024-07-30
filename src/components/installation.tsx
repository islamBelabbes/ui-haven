import React from "react";
import { codeToHtml } from "shiki";
import CopyButton from "./copy-button";

export default async function Installation({
  dependencies,
}: {
  dependencies: string[];
}) {
  const rawCode = `npm i ${dependencies.join(" ")}`;
  const code = await codeToHtml(rawCode, {
    lang: "shell",
    theme: "ayu-dark",
  });
  return (
    <div className="relative border">
      <CopyButton text={rawCode} className="top-1/2 -translate-y-1/2" />
      <div
        dangerouslySetInnerHTML={{ __html: code }}
        className="installation"
      />
    </div>
  );
}
