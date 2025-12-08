import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://p3drv32.caiots.dev"),
  title: "Modding Haven",
  description: "Your Ultimate Modding Sanctuary",
  openGraph: {
    title: "Modding Haven",
    description: "Discover unlimited GTA modifications",
    url: "https://p3drv32.caiots.dev",
    siteName: "Modding Haven",
    images: [
      { url: "/img.png", width: 1200, height: 630, alt: "Modding Haven" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modding Haven",
    description: "Discover unlimited GTA modifications",
    images: ["/img.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
