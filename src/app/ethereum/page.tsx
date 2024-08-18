import Head from "next/head";

export default function Ethereum() {
  return (
    <>
      <Head>
        <title>Ethereum ბლოკჩეინი | HiWallet</title>
        <meta name="description" content="Description of the home page" />
        <link
          rel="canonical"
          href="https://rezi-crypto-wallet.netlify.app/ethereum"
        />
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
