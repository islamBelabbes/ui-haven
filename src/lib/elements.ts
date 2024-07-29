import { TAttributes, TCategories } from "@/types";
import fs from "fs";
import path from "path";
import { codeToHtml } from "shiki";

export async function getElement(elementFolderName: string) {
  const componentPath = path.resolve(
    "src",
    "elements",
    "components",
    elementFolderName,
  );

  const attributes = await import(
    `@/elements/components/${elementFolderName}/attributes.ts`
  ).then((file: { default: TAttributes }) => file.default);

  const componentContents = fs
    .readdirSync(componentPath)
    .filter((item) => item.endsWith(".tsx") || item.endsWith(".ts"));

  const files = componentContents
    .filter((name) => name !== `attributes.ts`)
    .map((file) => ({
      name: file,
      code: fs.readFileSync(path.join(componentPath, file), "utf-8"),
      language: file.split(".")[1] ?? null,
    }))
    .sort((a) => (a.name === attributes.slug ? -1 : 1));

  const formattedFiles = await Promise.all(
    files.map(async (file) => {
      const formattedCode = await codeToHtml(file.code, {
        lang: "javascript",
        theme: "ayu-dark",
      });
      return {
        ...file,
        code: formattedCode,
      };
    }),
  );

  return {
    files: formattedFiles,
    attributes,
  };
}

export async function getAllElements() {
  const root = path.resolve("src", "elements", "components");
  const paths = fs.readdirSync(root).filter((path) => path !== "index.ts");

  return await Promise.all(
    paths.map(async (path) => {
      const content = await getElement(path);
      return content;
    }),
  );
}

export async function getElementsByCategory(category: TCategories) {
  const elements = await getAllElements();
  return elements.filter((element) => element.attributes.category === category);
}
