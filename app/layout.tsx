import "./globals.css";
import { Playfair_Display } from "next/font/google";
import type { Metadata } from "next";

const font = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "L&T Wedding",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}
