import { type TAttributes } from "@/types";

const att: TAttributes = {
  name: "Country Select", // the Component Heading name
  exported: "CountrySelect", // the Component Exported Name
  category: "lists", // category (cards / inputs / buttons ... ect)
  dependencies: {
    external: [
      "framer-motion",
      "countries-list",
      "country-flag-icons",
      "@radix-ui/react-select",
    ],
    internal: ["./src/lib/cn.ts", "./src/elements/shared/rotatable-arrow.tsx"], // any internal dep (aka shaded components)
  },
};

export default att;
