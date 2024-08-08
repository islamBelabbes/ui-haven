export const categories = [
  {
    name: "cards",
    svgPath: "/categories/cards.svg",
  },
  {
    name: "lists",
    svgPath: "/categories/lists.svg",
  },
  {
    name: "forms",
    svgPath: "/categories/forms.svg",
  },
] as const;

export type TCategories = (typeof categories)[number]["name"];
