import Head from "next/head";
import { Main } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
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
      <Main>
        <h1>HD WALLETS</h1>
      </Main>
    </>
  );
}
