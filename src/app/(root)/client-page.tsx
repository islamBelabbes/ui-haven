"use client";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { motion, type Variants, Transition, cubicBezier } from "framer-motion";
import { fadeIn, transition } from "@/lib/motion";
import Link from "next/link";

const scaleInCenter: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    scale: 1,
    transition: {
      ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
      duration: 0.5,
      delay: 0.5,
    },
  },
};

const scaleInHorLeft: Variants = {
  hidden: { opacity: 1, scaleX: 0, originX: "0% 0%" },
  visible: {
    scaleX: 1,
    originX: "0% 0%",
    transition: {
      ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
      duration: 0.5,
    },
  },
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

export default function ClientPage() {
  return (
    <>
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
        <motion.h1
          variants={scaleInHorLeft}
          initial="hidden"
          animate="visible"
          className="text-center text-3xl font-medium md:text-6xl/[4.9375rem]"
        >
          Speed Up Your Project <br />{" "}
          <span className="text-emerald-700">+60</span> pre built components
        </motion.h1>

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
    </>
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
