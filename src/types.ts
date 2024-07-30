import { type TCategories } from "./lib/categories";

export type TAttributes = {
  name: string;
  slug: string;
  exported: string;
  category: TCategories;
  dependencies: {
    external: string[];
    internal: string[];
  };
};
