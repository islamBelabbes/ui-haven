"use client";

import React from "react";
import { motion } from "framer-motion";
function template({ children }: { children: React.ReactNode }) {
  console.log("template");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default template;
