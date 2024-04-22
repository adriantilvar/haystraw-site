"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideTabGroup({
  title,
  tabs,
}: {
  title: string;
  tabs: {
    name: string;
    href: string;
  }[];
}) {
  const pathname = usePathname();
  return (
    <div className="p-2 text-base">
      <h2 className="mb-1 select-none text-xs font-semibold">{title}</h2>
      <div>
        {tabs.map((item: any, index: number) => (
          <Link
            className={clsx(
              "group flex w-full rounded-lg p-2 hover:bg-slate-200",
              {
                "bg-slate-200": pathname === item.href,
              }
            )}
            key={index}
            href={item.href}>
            <p
              className={clsx(
                "w-full border-black text-sm transition group-hover:border-s-2 group-hover:ps-2",
                {
                  "border-s-2 ps-2": pathname === item.href,
                }
              )}>
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
