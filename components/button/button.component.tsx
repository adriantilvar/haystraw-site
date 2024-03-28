import clsx from "clsx";

type ButtonType = "solid" | "outline" | "ghost";

export default function Button({
  children,
  type = "solid",
}: {
  children: string;
  type?: ButtonType;
}) {
  return (
    <button
      className={clsx(
        "inline px-3 py-2 text-sm font-semibold text-center rounded-md text-off-black",
        {
          "border hover:bg-slate-200 border-off-black/25": type === "outline",
          "hover:bg-slate-200 ": type === "ghost",
          "bg-off-black hover:bg-slate-700 text-off-white":
            !type || type === "solid",
        }
      )}
    >
      {children}
    </button>
  );
}
