import "@/styles/globals.css";

import { Manrope } from "next/font/google";
import { type Metadata } from "next";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Ui-Haven",
  description: "Components for your next project",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  preload: false,
});

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.className} dark`}>
      <body>{children}</body>
    </html>
  );
}
