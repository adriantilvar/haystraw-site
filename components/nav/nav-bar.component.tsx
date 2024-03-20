import Link from "next/link";
import NavLinks from "./nav-links.components";
import Image from "next/image";

import LogoIcon from "../icons/logo-icon.component";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex items-center justify-between w-full px-2 font-semibold transition-shadow duration-300 text-off-black backdrop-blur-xl backdrop-saturate-200 lg:pe-5 lg:ps-4">
      <div className="flex items-center justify-between w-full h-16 gap-0 sm:gap-3">
        <div className="flex gap-2">
          <LogoIcon className="w-12 h10"/>
          <Link href="/">
            <p>haystraw</p>
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center gap-2 text-base 3xl:flex-1 3xl:justify-end">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}
