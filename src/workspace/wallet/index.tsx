"use client";
import { ethers } from "ethers";
import { useEffect } from "react";

// console.log("Mnemonic (Seed Phrase):", mnemonic);

export default function CreateWallet() {
  const createWallet = async () => {
    const wallet = ethers.Wallet.createRandom();
    console.log(wallet, "wallet");
    const address = wallet.address;
    const privateKey = wallet.privateKey;
    const mnemonic = wallet.mnemonic?.phrase;
    console.log("Address:", address);
    console.log("Private Key:", privateKey);
    console.log("Mnemonic (Seed Phrase):", mnemonic);

    const bscProvider = new ethers.JsonRpcProvider(
      "https://bsc-dataseed.binance.org/"
    );

    // const bscProvider = ethers.getDefaultProvider();

    const nW = new ethers.Wallet(privateKey, bscProvider);

    const b = await bscProvider.getBalance(address);

    console.log("Balance:", ethers.formatEther(b), "BNB");

    // const balance = await (nW as any).getBalance();

    // console.log(balance, "balance!!!");

    // const network = await bscProvider.getNetwork();
    // console.log(network, "netWorkd");
    // console.log("BSC Provider Connected:", );
  };

  useEffect(() => {
    createWallet();
  }, []);

  return <h1>CREATE WALLET</h1>;
}
