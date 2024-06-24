import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amit_Portfolio",
  description: "Seasoned IT security professional with over 17 years of experience driving security standards, managing ​complex audits, and leading teams. Expertise spans core IT security, IT audits, governance, risk, and ​compliance (GRC),Information Security and Infrastructure advisor. Implementation and testing of ​standards / regulations i.e., ISO 270012022,2013, PCI, ITIL.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
