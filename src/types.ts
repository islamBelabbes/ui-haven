export type TCategories = "Cards" | "Inputs";

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
