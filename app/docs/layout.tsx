"use client";
import { ReactNode } from "react";

import Article from "@components/article/article.component.tsx";
import Sidebar from "@components/sidebar/sidebar.component.tsx";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen pt-16 md:flex-row">
      <div className="flex-none w-full md:w-64">
        <Sidebar />
      </div>
      <div className="flex-grow p-6 md:p-12 md:overflow-y-auto">
        <Article>{children}</Article>
      </div>
    </div>
  );
}
