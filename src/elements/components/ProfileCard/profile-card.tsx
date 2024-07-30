function ProfileCard() {
  return (
    <div className="w-fit rounded bg-white px-6 py-4">
      <div className="relative mx-auto size-16">
        <div className="absolute bottom-0 right-0 z-10 box-content size-[0.833125rem] -translate-x-[5px] translate-y-[1px] rounded-full border-[2.67px] border-white bg-emerald-700" />
        <img
          src="/profile-avatar.jpg"
          width={300}
          height={300}
          className="absolute inset-0 size-full rounded-full"
        />
      </div>
      <div className="mt-4">
        <span className="text-base/[22px] font-semibold text-[#191D23]">
          Ronald Richards
        </span>

        <div className="mt-[6px] flex items-center justify-center gap-[2px]">
          <div className="rotate-[-28.13deg]">
            <MessageAvatar />
          </div>
          <span className="text-base/[22px] font-light text-[#4B5768]">
            Message
          </span>
        </div>
      </div>
    </div>
  );
}

export const MessageAvatar = () => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.44961 2.03546L2.45 2.03564L14.49 7.79393L14.4903 7.79406C14.5268 7.81149 14.5576 7.8389 14.5792 7.87313C14.6008 7.90734 14.6122 7.94697 14.6122 7.98743C14.6122 8.02789 14.6008 8.06752 14.5792 8.10174C14.5576 8.13596 14.5268 8.16337 14.4903 8.1808L14.49 8.18094L2.45 13.9392L2.44973 13.9393C2.41271 13.9571 2.37136 13.9638 2.33062 13.9587C2.28988 13.9536 2.25146 13.937 2.21993 13.9107C2.1884 13.8844 2.16508 13.8496 2.15276 13.8104C2.14044 13.7712 2.13962 13.7294 2.15042 13.6897L3.31765 9.41064L9.01132 8.63717L9.01132 8.63718L9.01441 8.63674C9.12415 8.62113 9.228 8.57741 9.31585 8.50983C9.40372 8.44224 9.4726 8.35309 9.51584 8.25102L9.52737 8.2238L9.53561 8.19541L9.5459 8.15998L9.55583 8.12578L9.56081 8.09052C9.58109 7.94696 9.55225 7.80075 9.47896 7.67565C9.40567 7.55054 9.29224 7.45389 9.15709 7.40137L9.13275 7.39192L9.10756 7.38505L9.07613 7.37648L9.04447 7.36784L9.01195 7.36342L3.32454 6.59004L2.15039 2.28557L2.15029 2.28523C2.13945 2.2456 2.14023 2.2037 2.15254 2.16451C2.16484 2.12531 2.18815 2.09048 2.21969 2.06416C2.25123 2.03784 2.28967 2.02115 2.33044 2.01606C2.3712 2.01097 2.41256 2.0177 2.44961 2.03546Z"
        fill="#4B5768"
        stroke="#4B5768"
      />
    </svg>
  );
};

export default ProfileCard;
