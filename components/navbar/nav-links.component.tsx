"use client";
import Link from "next/link";

export default function NavLinks({
  links,
}: {
  links: { [key: string]: string }[];
}) {
  return (
    <div className="hidden gap-2 lg:flex">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}>
            <p className="flex flex-auto sm:flex-1">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
