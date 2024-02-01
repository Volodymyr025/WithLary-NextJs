"use client";
import { useState } from "react";
import style from "./NavigationMenu.module.css";
import {
  Favorite,
  Home,
  Login,
  Search,
  ShoppingCart,
} from "@mui/icons-material";
import Cart from "./Cart";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationMenu = () => {
  const [showCart, setShowCart] = useState(false);
  const path = usePathname();

  const openCart = () => {
    setShowCart(true);
  };
  return (
    <nav className={style.nav_menu}>
      <Cart showCart={showCart} setCart={setShowCart} />

      <HamburgerMenu />
      <ul className={style.nav_list}>
        <li className={path === "/" ? style.active : undefined}>
          <Link href={"/"}>
            <Home style={{ fontSize: 50 }} />
          </Link>
        </li>
        <li>
          <Search style={{ fontSize: 50 }} />
        </li>
        <li className={path === "/favorite" ? style.active : undefined}>
          <Link href={"/favorite"}>
            <Favorite style={{ fontSize: 50 }} />
          </Link>
        </li>
        <li onClick={openCart}>
          <ShoppingCart style={{ fontSize: 50, cursor: "pointer" }} />
          <p>0</p>
        </li>

        <li className={path === "/login" ? style.active : undefined}>
          <Link href="/login">
            Login
            <Login style={{ fontSize: 50 }} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
