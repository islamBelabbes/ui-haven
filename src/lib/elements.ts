import { type TAttributes } from "@/types";
import fs from "fs";
import path from "path";
import { codeToHtml } from "shiki";
import { type TCategories } from "./categories";
import { convertCase } from "./utils";

export class ElementError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ElementError";
  }
}

export type TElement = {
  files: {
    code: {
      formatted: string;
      raw: string;
    };
    name: string;
    language: string | null;
  }[];
  attributes: TAttributes;
};

export async function getElement(
  elementFolderName: string,
  Root = "src/elements/components",
): Promise<TElement> {
  const rootPath = path.resolve(Root);
  const componentPath = path.resolve(rootPath, elementFolderName);

  if (!fs.existsSync(componentPath)) {
    throw new ElementError(`Element ${elementFolderName} not found`);
  }

  const attributesPath = path.join(componentPath, "attributes.json");

  if (!fs.existsSync(attributesPath)) {
    throw new ElementError(
      `Element ${elementFolderName} has no attributes.json file`,
    );
  }

  const attributesJson = fs.readFileSync(attributesPath, "utf-8");
  const attributes = JSON.parse(attributesJson) as TAttributes;

  const componentContents = fs
    .readdirSync(componentPath)
    .filter((item) => item.endsWith(".tsx") || item.endsWith(".ts"));

  if (!componentContents.length) {
    throw new ElementError(
      `Element ${elementFolderName} has no components please add implementation`,
    );
  }

  const files = componentContents
    .filter((name) => name !== `attributes.ts`)
    .map((file) => ({
      name: file,
      code: fs.readFileSync(path.join(componentPath, file), "utf-8"),
      language: file.split(".")[1] ?? null,
    }))
    .filter((file) => file.code.length);

  // get internal dependencies
  const filesWithInternalDependencies = [
    ...files,
    ...attributes.dependencies.internal.map((file) => ({
      name: path.basename(path.join(file)),
      code: fs.readFileSync(path.join(file), "utf-8"),
      language: file.split(".")[1] ?? null,
    })),
  ].sort((a, b) => {
    // Check if either file is prioritized
    const isAPriority = a.name === convertCase(a.name);
    const isBPriority = b.name === convertCase(b.name);

    // Prioritize files that match the specific condition
    if (isAPriority && !isBPriority) return -1;
    if (!isAPriority && isBPriority) return 1;

    // Next, prioritize .tsx files
    const isATsx = a.name.endsWith(".tsx");
    const isBTsx = b.name.endsWith(".tsx");

    if (isATsx && !isBTsx) return -1;
    if (!isATsx && isBTsx) return 1;
    return 0;
  });

  const formattedFiles = await Promise.all(
    filesWithInternalDependencies.map(async (file) => {
      // const formattedCode = file.code;
      const formattedCode = await codeToHtml(file.code, {
        lang: "javascript",
        theme: "ayu-dark",
      });
      return {
        ...file,
        code: {
          formatted: formattedCode,
          raw: file.code,
        },
      };
    }),
  );

  return {
    files: formattedFiles,
    attributes,
  };
}

export async function getAllElements(Root: string | undefined = undefined) {
  const root = Root ?? path.resolve("src", "elements", "components");
  const paths = fs.readdirSync(root).filter((path) => path !== "index.ts");

  return await Promise.all(
    paths.map(async (path) => {
      const content = await getElement(path, Root);
      return content;
    }),
  );
}

export async function getElementsByCategory(
  category: TCategories,
  Root: string | undefined = undefined,
) {
  const elements = await getAllElements(Root);
  return elements.filter((element) => element.attributes.category === category);
}
