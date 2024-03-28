import NavLinks from "@components/navbar/nav-links.component.tsx";

export default function Footer() {
  return (
    <footer className="bg-off-black">
      <div className="px-6 py-20 mx-auto overflow-hidden sm:py-24 lg:px-8 max-w-7xl text-off-white">
        <nav className="-mt-6 columns-2 sm:flex sm:justify-center">
          <NavLinks />
        </nav>

        <p className="mt-10 text-xs leading-5 text-center">
          © 2024 Haystraw ApS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
