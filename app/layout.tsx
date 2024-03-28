import type { Metadata } from "next";
import Navbar from "@components/navbar/navbar.component.tsx";

import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: { template: "%s | Haystraw", default: "Haystraw" },
  description:
    "Screening individuals against PEP and sanctions lists has never been easier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
