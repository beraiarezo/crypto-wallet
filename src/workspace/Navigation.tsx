"use client";

import { usePathname } from "next/navigation";
import { NavLink } from "../components";
import Image from "next/image";

const links = [
  {
    title: "HD საფულე",
    path: "/",
  },
  {
    title: "BINANCE ბლოკჩეინი",
    path: "/binance",
  },
  {
    title: "ETHEREUM ბლოკჩეინი",
    path: "/ethereum",
  },
];

export default function Navigation() {
  const pathname = usePathname();
  console.log("navigation");
  return (
    <div className="fixed left-0 top-0 w-64 h-full bg-white">
      <div className="justify-center items-center flex mb-5">
        <Image
          src="/logo-color.svg"
          alt="HiWallet Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </div>
      <nav className="flex flex-wrap">
        {links.map((link) => (
          <NavLink
            key={link.title}
            text={link.title}
            path={link.path}
            pathname={pathname}
          />
        ))}
      </nav>
    </div>
  );
}
