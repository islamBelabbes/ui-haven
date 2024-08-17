import { ROOT_ELEMENTS_FOLDER } from "@/lib/constants";
import fs from "fs";
import path from "path";

const SEEDED_ELEMENT_NAME = "SeededElement";

type TSeedElement = {
  root?: string;
  isParentRecursive?: boolean;
};

export const seedElement = async ({
  root,
  isParentRecursive,
}: TSeedElement = {}) => {
  const _root = root ?? ROOT_ELEMENTS_FOLDER;
  const _isParentRecursive = isParentRecursive ?? true;

  if (!fs.existsSync(ROOT_ELEMENTS_FOLDER) && !isParentRecursive) {
    throw new Error("Root folder does not exist");
  }

  const elementFolder = path.resolve(_root, "components", "SeededElement");

  fs.mkdirSync(elementFolder, { recursive: _isParentRecursive });
  fs.writeFileSync(
    path.join(elementFolder, "attributes.json"),
    `{
        "name": "Seeded Element",
        "exported": "SeededElement",
        "category": "cards",
        "dependencies": {
          "external": [],
          "internal": ["${path.join(_root, "shared", "ui", "button.tsx").replace(/\\/g, "\\\\")}"]
        }
    }
    `,
  );
  fs.writeFileSync(
    path.join(elementFolder, "seeded-element.tsx"),
    `
    import {Button} from "./button.tsx";
    export const SeededElement = () => <div>Seeded Element Component</div>;
    `,
  );

  // internal dependency
  fs.mkdirSync(path.join(_root, "shared", "ui"), { recursive: true });
  // Create mock button.tsx file (as internal Dependency)
  fs.writeFileSync(
    path.join(_root, "shared", "ui", "button.tsx"),
    `
      export const Button = () => <div>Button</div>;
      `,
  );
};

export const clearSeededElement = async (root = ROOT_ELEMENTS_FOLDER) => {
  const elementFolder = path.resolve(root, "components", SEEDED_ELEMENT_NAME);
  fs.rmSync(elementFolder);
};
