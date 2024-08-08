import cn from "@/lib/cn";
import React from "react";

function Avatar({ image, className }: { image: string; className?: string }) {
  return (
    <div className={cn("relative size-10 rounded-full", className)}>
      <img
        src={image}
        className="absolute inset-0 size-full rounded-full object-cover"
        alt="avatar"
      />
    </div>
  );
}

export default Avatar;
