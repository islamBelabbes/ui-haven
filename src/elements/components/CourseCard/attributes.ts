import { type TAttributes } from "@/types";

const att: TAttributes = {
  name: "Course Card", // the Component Heading name
  exported: "CourseCard", // the Component Exported Name
  category: "cards", // category (cards / inputs / buttons ... ect)
  dependencies: {
    external: ["framer-motion"], // any external dep (aka any 3rd party library)
    internal: ["src/elements/shared/button.tsx"], // any internal dep (aka shaded components)
  },
};

export default att;
