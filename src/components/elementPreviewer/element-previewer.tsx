"use client";
import Previewer from "./element-previewer-canvas";
import PreviewerHeader from "./element-previewer-header";
import { AnimatePresence } from "framer-motion";
import { AnimateChangeInHeight } from "@/components/animate-change-in-height";
import dynamic from "next/dynamic";
import Spinner from "../ui/spinner";
import {
  ElementPreviewerProvider,
  useElementPreviewer,
} from "./element-previewer-root";
import { TElement } from "@/lib/elements";

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
  const { mod, element } = useElementPreviewer();
  return (
    <div className="w-full max-w-7xl rounded">
      <h1 className="my-3 font-bold">{element.attributes.name}</h1>
      <PreviewerHeader />

      <AnimateChangeInHeight
        className={{
          parent: "border",
          child: "flex w-full items-center justify-center",
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {mod === "preview" && <Previewer key={"preview"} />}
          {mod === "code" && <CodePreviewer key={"code"} />}
        </AnimatePresence>
      </AnimateChangeInHeight>
    </div>
  );
};

export default ComponentPreviewer;
