import type { MDXComponents } from "mdx/types";
import clsx from "clsx";

import CodePanelGroup from "@components/code/code-panel-group.component.tsx";
import CodePanel from "@components/code/code-panel.components.tsx";
import InfoIcon from "@icons/info.icon.tsx";

function Pre({ children, title }: { children?: any; title?: string }) {
  return <CodePanel title={title}>{children}</CodePanel>;
}

function Note({ children }: { children?: any }) {
  return (
    <div className="my-6 flex gap-2 rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-4 text-sm leading-6 text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-500/5 dark:text-emerald-200">
      <InfoIcon className="mt-1 h-4 w-4 flex-none fill-emerald-500 stroke-white dark:fill-emerald-200/20 dark:stroke-emerald-200" />
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0 pl-2">
        {children}
      </div>
    </div>
  );
}

function Row({ children }: { children: any }) {
  return (
    <div className="pb-32 grid grid-cols-1 items-start gap-x-8 gap-y-2 xl:max-w-none xl:grid-cols-2">
      {children}
    </div>
  );
}

function Column({
  children,
  sticky = false,
}: {
  children: any;
  sticky: boolean;
}) {
  return (
    <div
      className={clsx(
        "[&>:first-child]:mt-0 [&>:last-child]:mb-0",
        sticky && "xl:top-24 xl:sticky"
      )}>
      {children}
    </div>
  );
}

function Properties({ children }: { children: any }) {
  return (
    <div className="not-prose mt-5">
      <ul className="divide-y divide-zinc-900/5 dark:divide-white/5">
        {children}
      </ul>
    </div>
  );
}

function Property({
  name,
  type,
  children,
}: {
  name: any;
  type: any;
  children: any;
}) {
  return (
    <li className="first:pt-0 w-full py-4">
      <dl className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <dt className="sr-only">Name</dt>
        <dd className="font-mono text-sm font-semibold">{name}</dd>
        <dt className="sr-only">Type</dt>
        <dd className="font-mono text-xs text-zinc-500 dark:text-zinc-500">
          {type}
        </dd>
        <dt className="sr-only">Description</dt>
        <dd className="[&>:first-child]:mt-0 [&>:last-child]:mb-0 w-full flex-none">
          {children}
        </dd>
      </dl>
    </li>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Row: (props) => <Row {...props} />,
    Column: (props) => <Column {...props} />,
    Properties: (props) => <Properties {...props} />,
    Property: (props) => <Property {...props} />,
    CodeGroup: (props) => <CodePanelGroup {...props} />,
    pre: (props) => <Pre {...props} />,
    Note: (props) => <Note {...props} />,
    h1: (props) => <h1 className="mb-4 text-xl font-bold">{props.children}</h1>,
    h3: (props) => (
      <h3 className="mb-4 text-lg font-semibold">{props.children}</h3>
    ),
    p: (props) => <p className="mb-4 text-sm">{props.children}</p>,
    ...components,
  };
}
