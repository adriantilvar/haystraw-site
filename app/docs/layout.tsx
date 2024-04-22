import { ReactNode } from "react";
import Sidebar from "@components/sidebar/sidebar.component";

const sidebarItems = [
  {
    title: "Getting started",
    tabs: [
      {
        name: "Introduction",
        href: "/docs",
      },
      {
        name: "Authentication",
        href: "/docs/authentication",
      },
      {
        name: "Rate Limiting",
        href: "/docs/rate-limiting",
      },
      {
        name: "Errors",
        href: "/docs/errors",
      },
      {
        name: "Versioning",
        href: "/docs/versioning",
      },
    ],
  },
  {
    title: "Resources",
    tabs: [
      {
        name: "Politically Exposed Person",
        href: "/docs/pep",
      },
      {
        name: "Sanctioned Person",
        href: "/docs/sanction",
      },
      {
        name: "Registration",
        href: "/docs/registration",
      },
    ],
  },
];

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="pt-24 flex h-screen">
      <Sidebar tabs={sidebarItems} />
      <div className="pl-64 w-full py-6 pr-6">{children}</div>
    </div>
  );
}
