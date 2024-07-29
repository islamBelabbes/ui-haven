import CourseCard from "@/elements/components/courseCard/course-card";
import React from "react";

import { motion } from "framer-motion";
import { useElementPreviewer } from "./element-previewer-root";

function ElementPreviewerCanvas() {
  const { breakPoint } = useElementPreviewer();
  return (
    <motion.div
      className="my-2 flex justify-center rounded-lg bg-primary/10 p-6"
      style={{
        width: breakPoint,
      }}
      initial={{ opacity: 0 }}
      animate={{ width: breakPoint, opacity: 1 }}
      transition={{
        duration: 0.1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.21,
        },
      }}
    >
      <motion.div className="flex w-full justify-center">
        <CourseCard />
      </motion.div>
    </motion.div>
  );
}

export default ElementPreviewerCanvas;
