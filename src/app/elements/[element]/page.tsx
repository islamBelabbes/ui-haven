import React from "react";

import * as Elements from "@/elements/components";
import { convertToPascalCase } from "@/lib/utils";

function ElementPage({ params: { element } }: { params: { element: string } }) {
  const convertedElement = convertToPascalCase(element);

  const Element = Elements[convertedElement as keyof typeof Elements];
  if (!Element) return <h1>Element not found</h1>;
  return <Element />;
}

export default ElementPage;
