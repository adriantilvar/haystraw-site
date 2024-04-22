import Link from "next/link";
import NavLinks from "./nav-links.component.tsx";

import LogoIcon from "@icons/logo.icon.tsx";

const links = [
  {
    name: "docs",
    href: "/docs",
  },
  { name: "about", href: "/about" },
];

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-off-white bg-opacity-80 shadow backdrop-blur-lg backdrop-filter">
      <div className="flex h-16 justify-between px-5 font-mono font-bold">
        <div className="flex place-items-center gap-2">
          <LogoIcon className="h-6 w-auto" />
          <Link href="/">
            <p>haystraw</p>
          </Link>
        </div>
        <div className="flex place-items-center">
          <NavLinks links={links} />
        </div>
      </div>
    </nav>
  );
}
