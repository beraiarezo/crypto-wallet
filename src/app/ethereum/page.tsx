import Head from "next/head";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ethereum Blockchain | HiWallet OPENGRAPH",
  description: "Description of the Ethereum blockchain page",
  robots: "https://rezi-crypto-wallet.netlify.app/ethereum",
  openGraph: {
    title: "Ethereum Blockchain | HiWallet",
    description: "Description of the Ethereum blockchain page OPENGRAPH",
    url: "https://rezi-crypto-wallet.netlify.app/ethereum",
    images: ["URL to image"],
  },
};

export default function Ethereum() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "ethereum",
              description: "Create wallets for ethereum blockchain",
              url: "https://rezi-crypto-wallet.netlify.app/ethereum",
              identifier: {
                "@type": "PropertyValue",
                name: "Ethereum Symbol",
                value: "ETH",
              },
              brand: {
                "@type": "Organization",
                name: "Ethereum",
              },
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                price: "Price information can be dynamically updated here",
              },
            }),
          }}
        />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-0">
        <h1>Ethereum</h1>
      </main>
    </>
  );
}
