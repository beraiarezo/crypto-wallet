import { FC } from "react";
import Link from "next/link";

interface NavLinkProps {
  pathname: string;
  path: string;
  text: string;
}

const NavLink: FC<NavLinkProps> = ({ pathname, path, text }) => {
  return (
    <Link
      className={`border-white px-3 py-4 w-full border-l-2 mb-3 font-bpg-arial
    hover:text-blue hover:bg-blueLight hover:border-blueDark
    ${pathname === path && "text-blue bg-blueLight border-blueDark"}`}
      href={path}
    >
      {text}
    </Link>
  );
};

export default NavLink;
