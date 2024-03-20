"use client";
import Article from "@/components/article/article.component";
import SideBar from "@/components/nav/side-bar.component";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen pt-16 md:flex-row">
      <div className="flex-none w-full md:w-64">
        <SideBar />
      </div>
      <div className="flex-grow p-6 md:p-12 md:overflow-y-auto">
        <Article>{children}</Article>
      </div>
    </div>
  );
}
