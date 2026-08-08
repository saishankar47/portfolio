import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MouseGlow from "@/components/common/MouseGlow";

import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/components/common/theme-provider";
import { Toaster } from "react-hot-toast";
import ScrollProgress from "@/components/common/ScrollProgress";
import LoadingScreen from "@/components/common/LoadingScreen";
import AnimatedBackground from "@/components/common/AnimatedBackground";

const inter = Inter({
  subsets: ["latin"],
});

const siteUrl = "https://your-domain.vercel.app"; //Replace https://your-domain.vercel.app with your actual deployed URL once your site is live

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Saishankar Vanam | Software Engineer",
    template: "%s | Saishankar Vanam",
  },

  description:
    "Software Engineer specializing in Java, Spring Boot, React, AWS, Microservices, and cloud-native enterprise applications.",

  applicationName: "Saishankar Portfolio",

  authors: [
    {
      name: "Saishankar Vanam",
      url: siteUrl,
    },
  ],

  creator: "Saishankar Vanam",

  publisher: "Saishankar Vanam",

  keywords: [
    "Software Engineer",
    "Java Developer",
    "Spring Boot",
    "React",
    "Next.js",
    "TypeScript",
    "AWS",
    "Microservices",
    "Cloud",
    "Portfolio",
  ],

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",

    url: siteUrl,

    siteName: "Saishankar Portfolio",

    title: "Saishankar Vanam | Software Engineer",

    description:
      "Professional Software Engineer specializing in Java, Spring Boot, React, AWS, and scalable cloud applications.",

    locale: "en_US",

    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Saishankar Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Saishankar Vanam",

    description:
      "Software Engineer | Java | Spring Boot | React | AWS",

    images: ["/twitter-image"],
  },

  icons: {
    icon: "/favicon.ico",

    shortcut: "/favicon.ico",

    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.webmanifest",

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-background text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingScreen />

          <ScrollProgress />

          <MouseGlow />
          <AnimatedBackground />
          <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1">
              {children}
            </main>

            <Footer />

            <Toaster position="top-right" />
          </div>
        </ThemeProvider>

      </body>
    </html>
  );
}