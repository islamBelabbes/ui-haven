import ComponentPreviewer from "@/components/elementPreviewer/element-previewer";
import Installation from "@/components/installation";
import { type TCategories, categories } from "@/lib/categories";
import { getElementsByCategory } from "@/lib/elements";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  return categories.map((category) => ({ category: category.name }));
};

export default async function CategoryPage({
  params: { category },
}: {
  params: { category: TCategories };
}) {
  if (!categories.some((cat) => cat.name === category)) notFound();

  const elements = await getElementsByCategory(category);
  return (
    <div className="mx-auto grid min-h-screen max-w-7xl gap-5 p-2">
      {elements.length ? (
        elements.map((element) => (
          <div
            key={element.attributes.exported}
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
        ))
      ) : (
        <h1 className="mt-5 text-center text-lg font-bold">
          There are no elements in this category
        </h1>
      )}
    </div>
  );
}
