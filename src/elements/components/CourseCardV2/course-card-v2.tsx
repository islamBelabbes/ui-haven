"use client";

import Avatar from "@/elements/shared/avatar";
import Button from "@/elements/shared/button";
import useAnimateIncrement from "@/hooks/use-animate-increment";
import { type Variants, motion } from "framer-motion";

export const container: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
      type: "spring",
    },
  },
};

const memberItem = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const CATEGORIES = [
  "UX Design",
  "Product Design",
  "Web Design",
  "Mobile Design",
  "Frontend Development",
  "Backend Development",
  "Full Stack Development",
  "Data Science",
  "Cyber Security",
  "DevOps",
  "Cloud Computing",
  "AI/ML",
  "Game Development",
  "UI/UX Design",
  "Mobile Development",
  "Blockchain Development",
];

const MEMBERS = [
  {
    name: "John Doe",
    image: "/avatar-1.png",
  },
  {
    name: "John Doe2",
    image: "/avatar-2.png",
  },
  {
    name: "John Doe3",
    image: "/avatar-3.png",
  },
  {
    name: "John Doe4",
    image: "/avatar-4.png",
  },
  {
    name: "John Doe5",
    image: "/avatar-4.png",
  },
  {
    name: "John Doe6",
    image: "/avatar-4.png",
  },
  {
    name: "John Doe7",
    image: "/avatar-4.png",
  },
  {
    name: "John Doe8",
    image: "/avatar-4.png",
  },
];

function CourseCardV2() {
  return (
    <div className="relative w-[20.0625rem] rounded bg-white">
      {/* Cover */}
      <div className="relative mb-3 h-[7.9375rem] w-full">
        <img
          src="/draw.png"
          alt="drawing"
          className="absolute h-full w-full rounded-t object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 pt-0">
        {/* Categories */}
        <Categories />

        {/* Content */}
        <h1 className="mb-[5px] line-clamp-1 text-lg font-bold text-[#191D23]">
          Intro to Product Design{" "}
        </h1>
        <span className="mb-3 text-sm text-emerald-700">
          6 - 8 Week Course{" "}
        </span>
        <p className="mb-3 line-clamp-5 text-base/[1.375rem] text-[#191D23]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, elit
          nibh et nisl, pellentesque scelerisque faucibus facilisis at. Placerat
          morbi sem viverra diam lectus odio orci morbi sem viverra diam lectus
          odio orci
        </p>

        {/* Members */}
        <Members />

        {/*  Actions */}
        <div className="flex gap-2">
          <Button className="flex w-[72px] items-center justify-center bg-[#F7F8F9]">
            <HeartIcon />
          </Button>
          <Button>Apply Now</Button>
        </div>
      </div>
    </div>
  );
}

const Categories = () => {
  const offset = 3;
  const categoriesCount = useAnimateIncrement({
    from: 0,
    to: CATEGORIES.length - offset,
  });
  const categoriesToShow = CATEGORIES.slice(0, offset);
  return (
    <ul className="mb-3 flex gap-2">
      {categoriesToShow.map((category) => (
        <li
          key={category}
          className="flex items-center gap-1 rounded-[2px] bg-[#F7F8F9] px-2 py-[6px] text-[0.625rem]/[0.875rem] font-medium text-[#4B5768]"
        >
          {category}
        </li>
      ))}

      {categoriesCount > 0 && (
        <li className="flex items-center gap-1 rounded-[2px] bg-[#F7F8F9] px-2 py-[6px] text-[0.625rem]/[0.875rem] font-medium text-[#4B5768]">
          <span>+{categoriesCount}</span>
        </li>
      )}
    </ul>
  );
};

const Members = () => {
  const offset = 4;
  const membersCount = useAnimateIncrement({
    from: 0,
    to: MEMBERS.length - offset,
  });
  const membersToShow = MEMBERS.slice(0, offset);
  return (
    <motion.ul
      className="mb-6 flex items-center"
      animate="visible"
      variants={container}
      initial="hidden"
      transition={{
        staggerChildren: 0.9,
        delayChildren: 5,
      }}
    >
      {membersToShow.map((member, index) => (
        <motion.li
          variants={memberItem}
          className="relative"
          key={member.name}
          style={{
            left: -17 * index,
          }}
        >
          <Avatar image={member.image} />
        </motion.li>
      ))}

      {membersCount > 0 && (
        <li className="relative -left-10 line-clamp-1 text-nowrap text-sm text-slate-500">
          <span>
            Join +{membersCount} Members
            {""}
          </span>
        </li>
      )}
    </motion.ul>
  );
};

const HeartIcon = () => {
  return (
    <svg
      className="size-6"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2932 6.56182C9.78269 6.0513 8.89018 5.53806 7.24352 5.94983C5.5912 6.36302 4.37225 7.59411 3.96737 9.11202C3.56999 10.6018 3.92954 12.4934 5.70897 14.2725L11.2965 19.8592C11.6872 20.2498 12.318 20.2497 12.7086 19.8589C13.9634 18.6033 15.9572 16.6084 18.293 14.2726C20.0716 12.4941 20.4313 10.6024 20.034 9.11234C19.6293 7.59426 18.4106 6.36301 16.7579 5.94985C15.1107 5.53803 14.218 6.05136 13.7076 6.56182C13.4284 6.84103 13.2362 7.15061 13.1136 7.39568C13.0532 7.51653 13.0122 7.61677 12.9876 7.6824C12.9753 7.71507 12.9673 7.73867 12.9632 7.7514L12.9599 7.76148C12.835 8.18694 12.4445 8.47968 12.0005 8.4797C11.5565 8.47973 11.166 8.18705 11.041 7.76161L11.0378 7.75151C11.0336 7.73878 11.0256 7.71517 11.0134 7.6825C10.9887 7.61686 10.9477 7.51661 10.8872 7.39575C10.7647 7.15066 10.5724 6.84106 10.2932 6.56182ZM12.0004 5.46781C12.0902 5.36062 12.1877 5.2533 12.2934 5.14759C13.2829 4.15805 14.8903 3.42138 17.243 4.00956C19.5903 4.5964 21.3714 6.36515 21.9665 8.59708C22.5691 10.857 21.9287 13.4654 19.7073 15.6868C17.3716 18.0224 15.3779 20.0171 14.1232 21.2726C12.9518 22.4448 11.0544 22.4454 9.88243 21.2736L4.29487 15.6869C2.07254 13.4649 1.43211 10.8565 2.03493 8.59656C2.63024 6.36475 4.41167 4.59639 6.75833 4.00958C9.11066 3.42135 10.7179 4.15811 11.7074 5.14759C11.8131 5.2533 11.9106 5.36062 12.0004 5.46781Z"
        fill="#047857"
      />
    </svg>
  );
};

export default CourseCardV2;
