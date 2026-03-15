import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";

const vt323 = VT323({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "Ghabriel // DevOps & Software Developer",
  description: "Portfolio - Serial Experiments Lain aesthetic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={vt323.variable}>
        {/* CRT Effects Overlay */}
        <div className="crt-overlay" />
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
