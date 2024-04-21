import type { Metadata } from "next";
import { Inter, Andada_Pro, Poppins } from "next/font/google";
import Footer from "@/components/Footer";

import "@/styles/globals.css";
import "@/styles/global-icons.css";

//defined variables for font
const andada_pro = Andada_Pro({ subsets: ["latin"], variable: "--andada-pro" });
const inter = Inter({ subsets: ["latin"], variable: "--inter" });
const poppins = Poppins({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--poppins",
});

export const metadata: Metadata = {
  title: "Mentor Match",
  description: "Menor Match is a platform that connects mentors and mentees.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${andada_pro.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
