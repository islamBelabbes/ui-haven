"use client";
import { buttonVariants } from "./ui/button";
import { motion } from "framer-motion";
import { fadeIn, transition } from "@/lib/motion";
import Link from "next/link";
import Container from "./container";

function Header() {
  return (
    <header className="border bg-background">
      <Container className="flex h-[88px] items-center justify-between">
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
          href="#categories-list"
        >
          Get Started
        </motion.a>
      </Container>
    </header>
  );
}

export default Header;
