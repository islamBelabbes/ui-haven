import { TAttributes, TCategories } from "@/types";
import fs from "fs";
import path from "path";

export async function getComponentCode(componentFolderName: string) {
  const componentPath = path.resolve(
    "src",
    "components",
    "elements",
    componentFolderName,
  );

  const attributes = (await import(
    `@/components/elements/${componentFolderName}/attributes.ts`
  ).then((file) => file.default)) as TAttributes;

  const componentContents = fs
    .readdirSync(componentPath)
    .filter(
      (item) =>
        (item.endsWith(".tsx") && !item.endsWith(".story.tsx")) ||
        item.endsWith(".ts") ||
        item.endsWith(".css"),
    );

  const files = componentContents
    .filter((name) => name !== `attributes.ts`)
    .map((file) => ({
      name: file,
      code: fs.readFileSync(path.join(componentPath, file), "utf-8"),
      language: file.split(".")[1],
    }));

  return {
    files,
    attributes: attributes,
  };
}

export async function getAllComponents() {
  const root = path.resolve("src", "components", "elements");
  const paths = fs.readdirSync(root);

  return await Promise.all(
    paths.map(async (path) => {
      const content = await getComponentCode(path);
      return content;
    }),
  );
}

export async function getComponentsByCategory(category: TCategories) {
  const components = await getAllComponents();
  return components;
}
