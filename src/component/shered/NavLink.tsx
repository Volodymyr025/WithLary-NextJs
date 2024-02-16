"use client";
import { Box } from "@mui/system";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import style from "./NavLink.module.css";

interface props {
  href: string;
  children: any;
}

const NavLink = ({ href, children }: props) => {
  const path = usePathname();
  return (
    <Box component={"li"} className={path === href ? style.active : undefined}>
      <Link href={href}>{children}</Link>
    </Box>
  );
};

export default NavLink;
