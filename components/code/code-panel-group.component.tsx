import { Tab } from "@headlessui/react";
import { Children } from "react";
import CodePanel from "./code-panel.components";
import { Tag } from "@components/tag/tag.component";

export const programmingLanguages: { [index: string]: string } = {
  "language-cURL": "cURL",
  "language-js": "JavaScript",
  "language-ts": "TypeScript",
  "language-javascript": "JavaScript",
  "language-typescript": "TypeScript",
  "language-php": "PHP",
  "language-python": "Python",
  "language-ruby": "Ruby",
  "language-go": "Go",
};

export function getPanelTitle({
  title,
  language,
}: {
  title: string;
  language: string;
}) {
  return title ?? programmingLanguages[language] ?? "Code";
}

export default function CodePanelGroup({
  children,
  title,
  tag,
  label,
}: {
  children: any;
  title?: string;
  tag?: string;
  label?: string;
}) {
  const hasTabs = Children.count(children) > 1;

  if (hasTabs) {
    const codeChildren = Children.map(children, (child) => child.props);
    const languages = Children.map(children, (child: any) =>
      getPanelTitle(child.props)
    );
    return (
      <Tab.Group>
        <div className="border-1 mt-16 flex h-12 max-w-xl flex-wrap items-stretch justify-between gap-x-4 rounded-t-2xl bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent dark:ring-1 dark:ring-white/10">
          <div className="flex items-center gap-x-2">
            {title && (
              <span className="flex items-center font-mono font-semibold text-white">
                {title}
              </span>
            )}
            {!title && tag && (
              <div className="dark flex">
                <Tag variant="small">{tag}</Tag>
              </div>
            )}
            {!title && label && (
              <span className="font-mono text-sm text-zinc-400">{label}</span>
            )}
          </div>
          <Tab.List className="-mb-px flex gap-4 text-xs font-medium">
            {languages.map((language: string, index: number) => {
              return (
                <Tab
                  key={index}
                  className="ui-selected:border-b-emerald-500 ui-selected:text-emerald-400 border border-transparent text-zinc-400 hover:text-zinc-300 focus:ring-offset-transparent">
                  {language}
                </Tab>
              );
            })}
          </Tab.List>
        </div>
        <Tab.Panels>
          {codeChildren.map((child: any, index: number) => (
            <Tab.Panel key={index}>
              <CodePanel
                isGrouped
                title={title}>
                {child.children}
              </CodePanel>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    );
  }

  return <CodePanel title={title}>{children}</CodePanel>;
}
