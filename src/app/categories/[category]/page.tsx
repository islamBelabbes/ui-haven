import ComponentPreviewer from "@/components/elementPreviewer/element-previewer";
import Installation from "@/components/installation";
import { type TCategories, categories } from "@/lib/categories";
import { getElementsByCategory } from "@/lib/elements";
import { notFound } from "next/navigation";
import React from "react";

export const generateStaticParams = async () => {
  return categories.map((category) => ({ category }));
};

export default async function CategoryPage({
  params: { category },
}: {
  params: { category: TCategories };
}) {
  if (!categories.includes(category)) notFound();

  const elements = await getElementsByCategory(category);
  return (
    <div className="mx-auto grid max-w-7xl gap-5 p-2">
      {elements.map((element) => (
        <div
          key={element.attributes.slug}
          className="overflow-hidden [&:not(:last-child)]:border-b-2 [&:not(:last-child)]:pb-3"
        >
          <h1 className="my-3 font-bold">{element.attributes.name}</h1>

          {Boolean(element.attributes.dependencies.external.length) && (
            <Installation
              dependencies={element.attributes.dependencies.external}
            />
          )}

          <ComponentPreviewer element={element} />
        </div>
      ))}
    </div>
  );
}
