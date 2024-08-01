import { type TAttributes } from "@/types";

const att: TAttributes = {
  name: "Info Card", // the Component Heading name
  exported: "InfoCard", // the Component Exported Name
  category: "cards", // category (cards / inputs / buttons ... ect)
  dependencies: {
    external: ["framer-motion", "clsx", "tailwind-merge"], // any external dep (aka any 3rd party library)
    internal: ["src/components/animate-change-in-height.tsx", "src/lib/cn.ts"], // any internal dep (aka shaded components)
  },
};

export default att;
