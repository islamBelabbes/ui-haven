import ComponentPreviewer from "@/components/elementPreviewer/element-previewer";
import { type TCategories, categories } from "@/lib/categories";
import { getElementsByCategory } from "@/lib/elements";
import React from "react";

export const generateStaticParams = async () => {
  return categories;
};

export default async function CategoryPage({
  params: { category },
}: {
  params: { category: TCategories };
}) {
  if (!categories.includes(category)) return null;

  const elements = await getElementsByCategory(category);
  return (
    <div className="mx-auto grid max-w-7xl">
      {elements.map((element) => (
        <ComponentPreviewer element={element} key={element.attributes.slug} />
      ))}
    </div>
  );
}
