import cn from "@/lib/cn";

type TContainerProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  className?: string;
};

function Container({ children, className, ...props }: TContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-3", className)} {...props}>
      {children}
    </div>
  );
}

export default Container;
