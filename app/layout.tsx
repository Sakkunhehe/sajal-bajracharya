import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sajal Bajracharya — SEO, Web & Design",
  description:
    "Portfolio of Sajal Bajracharya, a Junior SEO Executive with experience in web design, data analysis and graphic design in Kathmandu, Nepal.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101010",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
