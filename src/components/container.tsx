import cn from "@/lib/cn";

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-3", className)}>
      {children}
    </div>
  );
}

export default Container;
