import "./globals.css";

import { Inter as FontSans } from "next/font/google"


import { cn } from "@/lib/utils"


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "My Workspace - create,publish & much more",
  description: "Turn feedback into graphs, support queries into workflows, and much more."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>


        {children}

      </body>
    </html>
  );
}
