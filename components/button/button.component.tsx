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
        "inline w-full rounded-md px-3 py-2 text-center text-sm font-semibold text-off-black",
        {
          "border border-off-black/25 hover:bg-slate-200": type === "outline",
          "hover:bg-slate-200 ": type === "ghost",
          "bg-off-black text-off-white hover:bg-slate-700":
            !type || type === "solid",
        }
      )}>
      {children}
    </button>
  );
}
