export const categories: { name: string; svgPath: string }[] = [
  {
    name: "cards",
    svgPath: "/categories/cards.svg",
  },
  {
    name: "lists",
    svgPath: "/categories/lists.svg",
  },
] as const;

export type TCategories = (typeof categories)[number]["name"];
