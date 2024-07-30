export const categories = ["cards", "inputs"] as const;
export type TCategories = (typeof categories)[number];
