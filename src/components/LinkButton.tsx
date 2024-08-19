"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LinkButton({
  to,
  title,
}: {
  to: string;
  title: string;
}) {
  const pathname = usePathname();

  const isActive = pathname === to;

  return (
    <Link
      href={to}
      className={`py-2 px-4 font-semibold text-sm
       font-bpg-arial rounded-lg border mx-1
        border-grayLight text-grayDark
        hover:text-blueMain hover:bg-blueLight hover:border-blueLight transition-all duration-75
        ${isActive && "text-blueMain bg-blueLight border-blueLight"}`}
    >
      {title}
    </Link>
  );
}
