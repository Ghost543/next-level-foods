import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import React from "react";
import MainHeader from "@/components/main-header/main-header";

const inter = Poppins({weight: ["200", "300", "400", "500", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Level Food",
  description: "Experience the best foods & recipes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>

    <MainHeader />
    {children}</body>
    </html>
  );
}
