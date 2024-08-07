import Button from "@/elements/shared/button";

function Card() {
  return (
    <div className="max-w-[297px] rounded bg-white p-4">
      <div className="flex items-center gap-[14px]">
        <div className="rounded-full bg-[#F7F8F9] p-2">
          <HatIcon />
        </div>
        <span className="text-base/[22px] font-bold text-[#191D23]">
          LearnCode
        </span>
      </div>

      <p className="mt-[13px] text-base/[22px] text-[#191D23]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis.
      </p>

      <Button className="mt-4 font-medium">View Details</Button>
    </div>
  );
}

const HatIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33 8L10 12L20 6L10 0L0 6H10V8H3.33ZM0 8V16L2 13.78V9.2L0 8ZM10 20L5 17L3 15.8V9.8L10 14L17 9.8V15.8L10 20Z"
        fill="url(#paint0_linear_6_13819)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_6_13819"
          x1="15.493"
          y1="18.4848"
          x2="-4.06826"
          y2="17.8392"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#059669" />
          <stop offset="1" stopColor="#00D995" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Card;
