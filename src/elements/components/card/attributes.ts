import { type TAttributes } from "@/types";

const att: TAttributes = {
  name: "Card", // the Component Heading name
  slug: "card.tsx", // the Component Slug (aka the main React file name)
  exported: "Card", // the Component Exported Name
  category: "Cards", // category (cards / inputs / buttons ... ect)
  dependencies: {
    external: [], // any external dep (aka any 3rd party library)
    internal: [], // any internal dep (aka shaded components)
  },
};

export default att;
