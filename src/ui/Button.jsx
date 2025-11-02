import { cn } from "@/lib/utils";

export default function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={cn(
        "px-4 py-2 rounded-2xl font-medium border shadow hover:opacity-90 active:scale-95 transition",
        "bg-blue-600 text-white",
        className
      )}
    >
      {children}
    </button>
  );
}
