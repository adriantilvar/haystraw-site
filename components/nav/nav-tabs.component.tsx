"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  {
    name: "Introduction",
    href: "/docs",
  },
  {
    name: "Quick Examples",
    href: "/docs/examples",
  },
  {
    name: "Getting started",
    href: "/docs/getting-started",
  },
  {
    name: "API reference",
    href: "/docs/api-reference",
  },
];

export default function NavTabs() {
  const pathname = usePathname();

  return (
    <div className="">
      {tabs.map((tab) => {
        return (
          <Link
            className="flex items-center justify-between w-full p-2 hover:bg-slate-200"
            key={tab.name}
            href={tab.href}
          >
            <p>{tab.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
