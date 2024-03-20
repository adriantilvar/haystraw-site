import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/nav/nav-bar.component";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { template: "%s | haystraw", default: "haystraw" },
  description:
    "Screening individuals against PEP and sanctions lists has never been easier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
