import { type TAttributes } from "@/types";

const att: TAttributes = {
  name: "Course Card V2", // the Component Heading name
  exported: "CourseCardV2", // the Component Exported Name
  category: "cards", // category (cards / inputs / buttons ... ect)
  dependencies: {
    external: ["framer-motion"], // any external dep (aka any 3rd party library)
    internal: [
      "src/elements/shared/button.tsx",
      "src/hooks/use-animate-increment.ts",
    ], // any internal dep (aka shaded components)
  },
};

export default att;
