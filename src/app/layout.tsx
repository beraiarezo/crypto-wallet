import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/workspace/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "კრიპტო საფულე",
  description: "უსაფრთხო კრიპტოვალუტის საფულე",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="ubh0bClFx-hRPKMuLcVtu-g8qhyf54qYg7lwBZP5ukc"
        />
        <meta name="keywords" content="keyword1, keyword2" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Your Site Title" />
        <meta property="og:description" content="Your site description" />
        <meta property="og:image" content="URL to image" />
        <meta
          property="og:url"
          content="https://rezi-crypto-wallet.netlify.app/"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
