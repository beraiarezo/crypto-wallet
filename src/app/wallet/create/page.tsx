import Head from "next/head";
import type { Metadata } from "next";
import CreateWallet from "@/workspace/wallet";

export const metadata: Metadata = {
  title: "ახალი საფულე | HiWallet",
  description: "Description of the Binance blockchain page",
  robots: "https://rezi-crypto-wallet.netlify.app/binance",
  openGraph: {
    title: "Binance ბლოკჩეინი | HiWallet OPENGRAPH",
    description: "Description of the Binance blockchain page OPENGRAPH",
    url: "https://rezi-crypto-wallet.netlify.app/binance",
    images: ["URL to image"],
  },
};

export default function Create() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialProduct",
              name: "BNB",
              description:
                "Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.",
              url: "https://rezi-crypto-wallet.netlify.app/binance",
              identifier: {
                "@type": "PropertyValue",
                name: "Bitcoin Symbol",
                value: "BTC",
              },
              brand: {
                "@type": "Organization",
                name: "Bitcoin",
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
      <CreateWallet />
    </>
  );
}
