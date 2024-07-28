import { TAttributes } from "@/types";

const att: TAttributes = {
  name: "Info Card", // the Component Heading name
  slug: "info-card.tsx", // the Component Slug (aka the main React file name)
  category: "Cards", // category (cards / inputs / buttons ... ect)
  dependencies: {
    external: ["framer-motion"], // any external dep (aka any 3rd party library)
    internal: [], // any internal dep (aka shaded components)
  },
};

export default att;
