import Card from "@/elements/components/card/card";
import CourseCard from "@/elements/components/courseCard/course-card";
import InfoCard from "@/elements/components/infoCard/info-card";
import React from "react";

import { motion } from "framer-motion";

function Previewer() {
  const [width, setWidth] = React.useState(1024);

  return (
    <motion.div
      className="flex items-center justify-center rounded-lg bg-primary/10 p-6"
      style={{
        width,
      }}
      animate={{ width }}
      transition={{ duration: 0.5 }}
    >
      <CourseCard />
    </motion.div>
  );
}

export default Previewer;
