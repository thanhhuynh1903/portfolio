import { Geist, Geist_Mono } from "next/font/google";
import ScrollIndicator from "@/components/ScrollIndicator";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rotating Polyhedron",
  description: "3D wireframe polyhedron with rotational animation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollIndicator />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}