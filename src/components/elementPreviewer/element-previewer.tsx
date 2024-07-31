"use client";
import PreviewerHeader from "./element-previewer-header";
import { AnimatePresence } from "framer-motion";
import { AnimateChangeInHeight } from "@/components/animate-change-in-height";
import dynamic from "next/dynamic";
import Spinner from "../ui/spinner";
import {
  ElementPreviewerProvider,
  useElementPreviewer,
} from "./element-previewer-root";
import { type TElement } from "@/lib/elements";
import ElementPreviewerCanvas from "./element-previewer-canvas";
import ElementPreviewerCanvasIframe from "./element-previewer-canvas-iframe";

const CodePreviewer = dynamic(() => import("./element-previewer-code"), {
  loading: () => (
    <div className="p-3">
      <Spinner />
    </div>
  ),
});

function ComponentPreviewer({ element }: { element: TElement }) {
  return (
    <ElementPreviewerProvider element={element}>
      <ComponentPreviewerContent />
    </ElementPreviewerProvider>
  );
}

const ComponentPreviewerContent = () => {
  const { mod } = useElementPreviewer();
  return (
    <div className="w-full max-w-7xl rounded">
      <PreviewerHeader />

      <AnimateChangeInHeight
        className={{
          parent: "box-content border",
          child: "flex w-full items-center justify-center",
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {mod === "preview" && <ElementPreviewerCanvas key={"preview"} />}
          {mod === "code" && <CodePreviewer key={"code"} />}
        </AnimatePresence>
      </AnimateChangeInHeight>
    </div>
  );
};

export default ComponentPreviewer;
