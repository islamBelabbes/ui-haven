import ComponentPreviewer from "@/components/elementPreviewer/element-previewer";
import { getAllElements } from "@/lib/elements";

export default async function HomePage() {
  const comps = await getAllElements();

  return (
    <main className="p-4 text-white">
      <div className="mx-auto grid max-w-7xl">
        {comps.map((x) => (
          <ComponentPreviewer element={x} key={x.attributes.slug} />
        ))}
      </div>
    </main>
  );
}
