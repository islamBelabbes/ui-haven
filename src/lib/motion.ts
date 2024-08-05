import { type Transition, type Variants } from "framer-motion";

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

export const transition: Transition = {
  duration: 0.5,
  ease: "easeInOut",
};
