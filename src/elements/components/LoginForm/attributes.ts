import { type TAttributes } from "@/types";

const att: TAttributes = {
  name: "Login Form", // the Component Heading name
  exported: "LoginForm", // the Component name
  category: "forms", // category (cards / inputs / buttons ... ect)
  dependencies: {
    external: [
      "react-hook-form",
      "@radix-ui/react-separator",
      "@radix-ui/react-checkbox",
      "@radix-ui/react-form",
      "@hookform/resolvers",
      "zod",
    ],
    internal: [
      "src/elements/shared/input.tsx",
      "src/elements/shared/button.tsx",
      "src/lib/cn.ts",
      "src/lib/wait.ts",
    ],
  },
};

export default att;
