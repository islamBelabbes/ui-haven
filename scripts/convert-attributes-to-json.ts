import { TAttributes } from "@/types";
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

// this script will convert the attributes.ts file to attributes.json

(async () => {
  const root = path.resolve("..", "src", "elements", "components");
  const elements = fs.readdirSync(root).filter((path) => !path.includes("."));

  for (const element of elements) {
    const isAttributesExists = fs.existsSync(
      path.join(root, element, "attributes.ts"),
    );
    if (!isAttributesExists) {
      console.warn("No attributes.ts file found for element, skip", element);
      continue;
    }
    const attributes = (await import(
      pathToFileURL(path.join(root, element, "attributes.ts")).href
    ).then((file: { default: any }) => file.default)) as TAttributes;

    fs.writeFileSync(
      path.join(root, element, "attributes.json"),
      `
      {
        "name": "${attributes.name}",
        "exported": "${attributes.exported}",
        "category": "${attributes.category}",
        "dependencies": {
          "external": [${attributes.dependencies.external.map((dep) => `"${dep}"`).join(",")}],
          "internal": [${attributes.dependencies.internal.map((dep) => `"${dep}"`).join(",")}]
        }
      }
      `,
    );

    // delete the attributes.ts file
    fs.rmSync(path.join(root, element, "attributes.ts"));
  }
})();
