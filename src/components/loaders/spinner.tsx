import { cn } from "@/lib/utils";

type SpinnerProps = {
  className?: string;
};

export const Spinner = ({ className }: SpinnerProps) => {
  return (
    <div
      className={cn(
        "animate-spin w-4 h-4 rounded-full border-2 border-foreground/50 border-r-foreground",
        className,
      )}
      aria-hidden
    ></div>
  );
};
