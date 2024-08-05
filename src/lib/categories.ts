export const categories = ["cards", "inputs", "lists"] as const;
export type TCategories = (typeof categories)[number];
