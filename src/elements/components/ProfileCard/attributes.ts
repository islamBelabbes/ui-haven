import { type TAttributes } from "@/types";

const att: TAttributes = {
  name: "Profile Card", // the Component Heading name
  slug: "profile-card.tsx", // the Component Slug (aka the main React file name)
  exported: "ProfileCard", // the Component Exported Name
  category: "cards", // category (cards / inputs / buttons ... ect)
  dependencies: {
    external: [], // any external dep (aka any 3rd party library)
    internal: [], // any internal dep (aka shaded components)
  },
};

export default att;