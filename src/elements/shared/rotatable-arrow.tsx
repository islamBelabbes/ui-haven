import { motion } from "framer-motion";
type TRotatableArrowProps = {
  isUp: boolean;
};

function RotatableArrow({ isUp }: TRotatableArrowProps) {
  return (
    <motion.div
      animate={{ rotate: isUp ? 180 : undefined }}
      transition={{ duration: 0.3 }}
    >
      <ArrowIcon />
    </motion.div>
  );
}

const ArrowIcon = () => {
  return (
    <svg
      className="size-5"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5893 13.0892C10.2638 13.4146 9.73618 13.4146 
        9.41074 13.0892L5.24408 8.92251C4.91864 8.59707 
        4.91864 8.06943 5.24408 7.744C5.56951 7.41856 6.09715 7.41856 6.42259 7.744L10 11.3214L13.5774 
        7.744C13.9028 7.41856 14.4305 7.41856 14.7559 
        7.744C15.0814 8.06943 15.0814 8.59707 
        14.7559 8.92251L10.5893 13.0892Z"
        fill="#191D23"
      />
    </svg>
  );
};

export default RotatableArrow;
