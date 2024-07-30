import useIsMounted from "@/hooks/use-is-mounted";
import { type TElement } from "@/lib/elements";
import React, { useState } from "react";

export type TBreakPoints = 1024 | 768 | 390;

export type TMods = "preview" | "code";

interface ElementPreviewerContextType {
  breakPoint: TBreakPoints;
  setBreakPoint: (width: TBreakPoints) => void;
  mod: TMods;
  setMod: (mod: TMods) => void;
  element: TElement;
  isMounted: boolean;
}

export const ElementPreviewerContext = React.createContext<
  ElementPreviewerContextType | undefined
>(undefined);

export const useElementPreviewer = () => {
  const context = React.useContext(ElementPreviewerContext);
  if (context === undefined) {
    throw new Error(
      "useElementPreviewer must be used within a ElementPreviewerProvider",
    );
  }
  return context;
};

export const ElementPreviewerProvider: React.FC<
  React.PropsWithChildren & { element: TElement }
> = ({ children, element }) => {
  const [breakPoint, setBreakPoint] = useState<TBreakPoints>(390);
  const [mod, setMod] = useState<TMods>("preview");
  const isMounted = useIsMounted();

  return (
    <ElementPreviewerContext.Provider
      value={{ breakPoint, setBreakPoint, mod, setMod, element, isMounted }}
    >
      {children}
    </ElementPreviewerContext.Provider>
  );
};
