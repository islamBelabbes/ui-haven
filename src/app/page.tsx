import ComponentPreviewer from "@/components/elementPreviewer/element-previewer";
import { getAllElements } from "@/lib/elements";

export default async function HomePage() {
  const comps = await getAllElements();

  return (
    <main className="p-4 text-white">
      {/* <div className="flex flex-wrap items-start gap-3">
        {comps.map(({ Component, attributes: { slug } }) => (
          <Component key={slug} />
        ))}
      </div> */}
      <ComponentPreviewer />
    </main>
  );
}
