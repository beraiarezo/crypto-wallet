import Head from "next/head";

export default function Binance() {
  return (
    <>
      <Head>
        <title>Binance ბლოკჩეინი | HiWallet</title>
        <meta name="description" content="Description of the home page" />
        <link
          rel="canonical"
          href="https://rezi-crypto-wallet.netlify.app/binance"
        />
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
      <main className="flex min-h-screen flex-col items-center justify-between p-0">
        <h1>Binance</h1>
      </main>
    </>
  );
}
