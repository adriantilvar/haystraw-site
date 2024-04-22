import type { Metadata } from "next";
import { ReactNode } from "react";

import Navbar from "@components/navbar/navbar.component.tsx";

import "./globals.css";

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
      <body className="">
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
