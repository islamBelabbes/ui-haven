"use client";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { motion, type Variants, cubicBezier } from "framer-motion";
import { fadeIn, transition } from "@/lib/motion";
import Link from "next/link";

const text = "Speed Up Your Project";
const subText = "+60 pre-built components";

const scaleInCenter: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    scale: 1,
    transition: {
      ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
      duration: 0.5,
      delay: (text.length + subText.length) * 0.05,
    },
  },
};

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05, // Stagger effect
    },
  }),
};

const TECHNOLOGIES = [
  {
    Logo: "/tailwind-css.svg",
    url: "https://tailwindcss.com/",
  },
  {
    Logo: "/radix-ui.svg",
    url: "https://www.radix-ui.com/",
  },
  {
    Logo: "/framer-motion.svg",
    url: "https://www.framer.com/motion/",
  },
  {
    Logo: "/react.svg",
    url: "https://reactjs.org/",
  },
];

export default function HeroBanner() {
  return (
    <div className="relative flex h-[calc(100vh-88px)] items-center justify-center md:items-start">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={transition}
      >
        <Image
          src="/hero.png"
          width={1600}
          height={960}
          alt="Ui-Haven-background"
          className="absolute left-0 top-0 h-full w-full object-cover bg-blend-multiply"
        />
      </motion.div>
      <div aria-hidden className="absolute inset-0 bg-black/90" />
      <div className="relative flex flex-col items-center gap-6 md:mt-32">
        <LetterByLetterAnimation />

        <motion.div
          variants={scaleInCenter}
          initial="hidden"
          animate="visible"
          className={buttonVariants({
            variant: "secondary",
            className: "w-fit px-8 py-4",
          })}
        >
          <Link href="/categories/cards">Start Building now</Link>
        </motion.div>

        <Technologies />
      </div>
    </div>
  );
}

const Technologies = () => {
  return (
    <div className="flex items-center gap-7">
      <motion.span
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={transition}
      >
        Built with :
      </motion.span>

      {TECHNOLOGIES.map((tech, index) => (
        <motion.a
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{
            ...transition,
            delay: 0.1 * index + 0.3,
          }}
          key={index}
          href={tech.url}
          className="relative w-auto"
          target="_blank"
        >
          <Image
            src={tech.Logo}
            width={40}
            height={40}
            alt="Tailwind CSS"
            className="object-cover"
          />
        </motion.a>
      ))}
    </div>
  );
};

const LetterByLetterAnimation = () => (
  <motion.h1 className="text-center text-3xl font-medium md:text-6xl/[4.9375rem]">
    {/* Main text */}
    {text.split("").map((letter, index) => (
      <motion.span
        key={index}
        variants={letterAnimation}
        initial="hidden"
        animate="visible"
        custom={index} // Pass the index as a custom prop for stagger
        style={{ display: "inline-block" }} // Ensure letters are inline
      >
        {letter === " " ? "\u00A0" : letter}{" "}
        {/* Non-breaking space for spaces */}
      </motion.span>
    ))}
    <br />
    {/* Subtext with different styling */}
    {subText.split("").map((letter, index) => (
      <motion.span
        key={index}
        variants={letterAnimation}
        initial="hidden"
        animate="visible"
        custom={index + text.length} // Offset index for delay calculation
        className="text-emerald-700"
        style={{ display: "inline-block" }}
      >
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.h1>
);
