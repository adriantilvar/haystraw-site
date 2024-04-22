import { Tag } from "@components/tag/tag.component";
// import CopyButton from "./copy-button";
import clsx from "clsx";

export default function CodePanel({
  children,
  isGrouped = false,
  title,
  tag,
  label,
}: {
  children?: any;
  isGrouped?: boolean;
  title?: string;
  tag?: string;
  label?: string;
}) {
  const code = children.props.children;

  return (
    <div
      className={clsx(
        "not-prose max-w-xl overflow-scroll rounded-b-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10",
        !isGrouped && "mt-16 rounded-t-2xl"
      )}>
      {(title || tag || label) && !isGrouped && (
        <div className="border-1 flex h-12 flex-wrap items-stretch justify-between gap-x-4 rounded-t-2xl border-zinc-800 bg-zinc-800 px-4 ring-1 ring-white/10 dark:bg-transparent">
          {title && !isGrouped && (
            <span className="flex items-center font-mono text-sm font-semibold text-gray-100">
              {title}
            </span>
          )}
          {tag && (
            <div className="dark flex">
              <Tag variant="small">{tag}</Tag>
            </div>
          )}
          {tag && label && (
            <span className="h-0.5 w-0.5 rounded-full bg-zinc-500" />
          )}
          {tag && (
            <span className="font-mono text-xs text-zinc-400">{label}</span>
          )}
        </div>
      )}
      <pre className="mt-0 group relative overflow-x-auto p-4 text-sm text-white dark:bg-zinc-50/[0.025]">
        <code className="">{code}</code>
        {/* <CopyButton code={code} /> */}
      </pre>
    </div>
  );
}
