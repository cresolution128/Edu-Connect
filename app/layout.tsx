import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";

const beVietnamPro = Be_Vietnam_Pro({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "EduConnect",
  description: "School management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={beVietnamPro.className}>
          {children}
          <Analytics />
      </body>
    </html>
  );
}
