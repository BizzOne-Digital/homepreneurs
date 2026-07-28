import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Homepreneurs™ — Build Your Own Income-Producing Business",
  description: "A new alternative to traditional franchising. Real home-based businesses under $50K with proven systems, low overhead, and full freedom.",
  keywords: "franchise alternative, home business opportunity, low cost franchise, business licensing, homepreneur",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ScrollReveal />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
