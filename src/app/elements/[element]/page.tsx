import React from "react";

import * as Elements from "@/elements/components";
import { convertCase, convertToPascalCase } from "@/lib/utils";
import { getAllElements } from "@/lib/elements";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  const elements = await getAllElements();
  return elements.map((element) => ({
    element: convertCase(element.attributes.exported),
  }));
};

function ElementPage({ params: { element } }: { params: { element: string } }) {
  const convertedElement = convertToPascalCase(element);

  const Element = Elements[convertedElement as keyof typeof Elements];
  if (!Element) notFound();
  return (
    <div className="m-[10px] flex items-center justify-center">
      <Element />
    </div>
  );
}

export default ElementPage;
