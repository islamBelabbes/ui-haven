import ComponentPreviewer from "@/components/elementPreviewer/element-previewer";
import { getAllElements } from "@/lib/elements";

import * as Components from "@/elements/components";

export default async function HomePage() {
  const comps = await getAllElements();

  return (
    <main className="p-4 text-white">
      <div className="flex flex-wrap items-start gap-3">
        {comps.map(({ attributes: { slug, exported } }) => {
          const Comp = Components[exported as keyof typeof Components];
          return <Comp key={slug} />;
        })}
      </div>

      <ComponentPreviewer />
    </main>
  );
}
