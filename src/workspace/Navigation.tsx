"use client";

import { usePathname } from "next/navigation";
import { NavLink } from "../components";
import Image from "next/image";

const links = [
  {
    title: "საფულე",
    path: "/wallet",
  },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 top-0 w-64 h-full bg-white">
      <div className="justify-center items-center flex mb-5">
        <Image
          src="/logo-color.svg"
          alt="HiWallet Logo"
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
    </header>
  );
}
