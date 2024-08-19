import { ReactNode } from "react";
import { Main } from "@/components";
import WalletNav from "@/workspace/wallet/nav";

export default function BinanceLayout({ children }: { children: ReactNode }) {
  return (
    <Main>
      <WalletNav />
      {children}
    </Main>
  );
}
