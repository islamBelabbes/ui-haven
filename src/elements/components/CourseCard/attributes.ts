import { type TAttributes } from "@/types";

const att: TAttributes = {
  name: "Course Card", // the Component Heading name
  slug: "course-card.tsx", // the Component Slug (aka the main React file name)
  exported: "CourseCard", // the Component Exported Name
  category: "cards", // category (cards / inputs / buttons ... ect)
  dependencies: {
    external: ["framer-motion"], // any external dep (aka any 3rd party library)
    internal: [], // any internal dep (aka shaded components)
  },
};

export default att;