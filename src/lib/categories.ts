export const categories = [
  {
    name: "cards",
    svgPath: "/categories/cards.svg",
    comingSoon: false,
  },
  {
    name: "lists",
    svgPath: "/categories/lists.svg",
    comingSoon: false,
  },
  {
    name: "forms",
    svgPath: "/categories/forms.svg",
    comingSoon: false,
  },
  {
    name: "table",
    svgPath: "/categories/table.svg",
    comingSoon: true,
  },
  {
    name: "data",
    svgPath: "/categories/data.svg",
    comingSoon: true,
  },
  {
    name: "menu",
    svgPath: "/categories/menu.svg",
    comingSoon: true,
  },
  {
    name: "select",
    svgPath: "/categories/select.svg",
    comingSoon: true,
  },
  {
    name: "file-upload",
    svgPath: "/categories/file-upload.svg",
    comingSoon: true,
  },
  {
    name: "alert",
    svgPath: "/categories/alert.svg",
    comingSoon: true,
  },
  {
    name: "banner",
    svgPath: "/categories/banner.svg",
    comingSoon: true,
  },
] as const;

export type TCategories = (typeof categories)[number]["name"];
