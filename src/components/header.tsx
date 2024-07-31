"use client";
import React from "react";
import { buttonVariants } from "./ui/button";
import { motion } from "framer-motion";
import { fadeIn, transition } from "@/lib/motion";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between border bg-background px-3 py-[18px] md:min-h-[88px] md:px-20">
      <motion.div
        className="text-3xl font-bold"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={transition}
      >
        <Link href="/">Ui Haven</Link>
      </motion.div>

      {/* Actions */}
      <motion.a
        className={buttonVariants({ variant: "default" })}
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={transition}
        href="#"
      >
        Get Started
      </motion.a>
    </header>
  );
}

export default Header;