import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import Header from "@/components/layout/Header";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Car Compare",
  url: "https://car-compare.vercel.app/",
  description:
    "Compare cars side by side to find the best model for your needs.",
  publisher: {
    "@type": "Organization",
    name: "Car Compare",
    logo: "https://car-compare.vercel.app/logo.png",
  },
};

export const metadata: Metadata = {
  title: "Car Compare",
  description:
    "Easily compare car brands,  car models, car deals, car prices, car reviews and more. Find your next car today!",
  keywords:
    "car comparison, car brands, car models, best car deals, car prices, car reviews",
  robots: "index, follow",
  authors: [{ name: "Car Compare", url: "https://car-compare.vercel.app/" }],
  openGraph: {
    title: "Car Compare",
    description:
      "Easily compare car brands,  car models, car deals, car prices, car reviews and more. Find your next car today!",
    url: "https://car-compare.vercel.app/",
    type: "website",
    images: "https://car-compare.vercel.app/og-image.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        ></script>
        <link rel="canonical" href="https://car-compare.vercel.app/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
