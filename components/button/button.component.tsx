import clsx from "clsx";

type ButtonType = "solid" | "outline";

export default function Button({
  children,
  type,
}: {
  children: string;
  type?: ButtonType;
}) {
  return (
    <button
      className={clsx(
        "leading-6 font-semibold text-sm text-center px-3 py-2 rounded-md border-2 w-full block shadow-off-black",
        {
          "bg-off-white hover:bg-slate-200 border-off-black/25 text-off-black":
            type === "outline",
          "bg-off-black hover:bg-slate-700 border-off-black hover:border-slate-700 text-off-white":
            !type || type === "solid",
        }
      )}
    >
      {children}
    </button>
  );
}
