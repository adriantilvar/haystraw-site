"use client";
import Link from "next/link";

const links = [
  {
    name: "documentation",
    href: "/docs",
  },
  { name: "about", href: "/about" },
];

export default function NavLinks() {
  return (
    <div className="hidden gap-2 mx-3 lg:flex">
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.href}>
            <p className="flex flex-auto sm:flex-1">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
