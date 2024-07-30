import React from "react";

import * as Elements from "@/elements/components";
import { convertCase, convertToPascalCase } from "@/lib/utils";
import { getAllElements } from "@/lib/elements";

export const generateStaticParams = async () => {
  const elements = await getAllElements();
  return elements.map((element) => ({
    element: convertCase(element.attributes.exported),
  }));
};

function ElementPage({ params: { element } }: { params: { element: string } }) {
  const convertedElement = convertToPascalCase(element);

  const Element = Elements[convertedElement as keyof typeof Elements];
  if (!Element) return <h1>Element not found</h1>;
  return <Element />;
}

export default ElementPage;
