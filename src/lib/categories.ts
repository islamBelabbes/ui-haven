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
  {
    name: "seeded",
    svgPath: "/categories/forms.svg",
  }, // this is for testing purposes
] as const;

export type TCategories = (typeof categories)[number]["name"];
