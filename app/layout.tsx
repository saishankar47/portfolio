import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/components/common/theme-provider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saishankar V | Software Engineer",

  description:
    "Software Engineer specializing in Java, Spring Boot, React, AWS, and scalable enterprise applications.",

  keywords: [
    "Software Engineer",
    "Java",
    "Spring Boot",
    "React",
    "AWS",
    "Portfolio",
  ],

  authors: [
    {
      name: "Saishankar V",
    },
  ],

  creator: "Saishankar V",

  openGraph: {
    title: "Saishankar V Portfolio",

    description:
      "Professional Software Engineer Portfolio",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1">{children}</main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}