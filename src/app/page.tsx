import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>HD საფულე | HiWallet</title>
        <meta name="description" content="Description of the home page" />
        <link rel="canonical" href="https://rezi-crypto-wallet.netlify.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "HiWallet",
              url: "https://rezi-crypto-wallet.netlify.app",
            }),
          }}
        />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-0"></main>
    </>
  );
}
