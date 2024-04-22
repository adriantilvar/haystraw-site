"use client";

import ClipboardIcon from "@icons/clipboard.icon";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function CopyButton({ code }: { code: string }) {
  let [copyCount, setCopyCount] = useState(0);
  let copied = copyCount > 0;

  useEffect(() => {
    if (copyCount > 0) {
      let timeout = setTimeout(() => setCopyCount(0), 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [copyCount]);

  return (
    <button
      type="button"
      className={clsx(
        "group/button absolute right-4 top-4 overflow-hidden rounded-full py-1 pl-2 pr-3 text-xs opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100",
        copied
          ? "bg-emerald-400/10 ring-1 ring-inset ring-emerald-400/20"
          : "hover:bg-white/7.5 dark:bg-white/2.5 bg-white/5 dark:hover:bg-white/5"
      )}
      onClick={() => {
        window.navigator.clipboard.writeText(code).then(() => {
          setCopyCount((count) => count + 1);
        });
      }}>
      <span
        aria-hidden={copied}
        className={clsx(
          "gap-0.5 pointer-events-none flex items-center text-zinc-400 transition duration-300",
          copied && "-translate-y-1.5 opacity-0"
        )}>
        <ClipboardIcon className="h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400" />
        Copy
      </span>
      <span
        aria-hidden={!copied}
        className={clsx(
          "inset-0 pointer-events-none absolute flex items-center justify-center text-emerald-400 transition duration-300",
          !copied && "translate-y-1.5 opacity-0"
        )}>
        Copied!
      </span>
    </button>
  );
}
