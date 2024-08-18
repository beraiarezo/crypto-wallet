import { FC } from "react";
import Link from "next/link";

interface NavLinkProps {
  pathname: string;
  path: string;
  text: string;
}

const NavLink: FC<NavLinkProps> = ({ pathname, path, text }) => {
  const isActive = pathname === path;

  return (
    <Link
      className={`border-l-2 mb-3 px-3 py-4 w-full font-bpg-arial 
      ${
        isActive
          ? "border-blueDark text-blue bg-blueLight"
          : "border-white text-black hover:text-blue hover:bg-blueLight hover:border-blueDark"
      }
    `}
      href={path}
    >
      {text}
    </Link>
  );
};

export default NavLink;
