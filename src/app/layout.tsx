import type { Metadata } from "next";
import { Andada_Pro, Inter, Poppins } from "next/font/google";

import "@/styles/global-icons.css";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";

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
    <html
      lang="en"
      className={cn(poppins.variable, andada_pro.variable, "h-full")}
    >
      <body className={cn(inter.className, "h-full", "bg-slate-100")}>
        {children}
      </body>
    </html>
  );
}
