import { type TAttributes } from "@/types";

const att: TAttributes = {
  name: "Send Money Form", // the Component Heading name
  exported: "SendMoneyForm", // the Component Exported Name
  category: "forms", // category (cards / inputs / buttons ... ect)
  dependencies: {
    external: ["@radix-ui/react-form", "react-hook-form"], // any external dep (aka any 3rd party library)
    internal: [
      "src/elements/shared/button.tsx",
      "src/elements/shared/input.tsx",
      "src/elements/shared/avatar.tsx",
      "src/lib/cn.ts",
      "src/lib/wait.ts",
    ], // any internal dep (aka shaded components)
  },
};

export default att;
