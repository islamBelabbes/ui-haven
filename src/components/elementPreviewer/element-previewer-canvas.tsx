import { useElementPreviewer } from "./element-previewer-root";
import * as Elements from "@/elements/components";
import { fadeIn, transition } from "@/lib/motion";
import { motion } from "framer-motion";

function ElementPreviewerCanvas() {
  const { element } = useElementPreviewer();
  const Element =
    Elements[element.attributes.exported as keyof typeof Elements];
  if (!Element) throw new Error("Element not found");

  return (
    <motion.div
      className="p-4"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      transition={transition}
    >
      <Element />
    </motion.div>
  );
}

export default ElementPreviewerCanvas;
