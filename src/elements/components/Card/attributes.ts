import { type TAttributes } from "@/types";

const att: TAttributes = {
  name: "Card", // the Component Heading name
  exported: "Card", // the Component Exported Name
  category: "cards", // category (cards / inputs / buttons ... ect)
  dependencies: {
    external: [], // any external dep (aka any 3rd party library)
    internal: ["src/elements/shared/button.tsx"], // any internal dep (aka shaded components)
  },
};

export default att;
