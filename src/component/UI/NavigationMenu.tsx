"use client";
import { useState } from "react";
import style from "./NavigationMenu.module.css";
import { Favorite, Home, Login, ShoppingCart } from "@mui/icons-material";
import Cart from "./Cart";
import HamburgerMenu from "./HamburgerMenu";
import NavLink from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "./Search";
import { Box } from "@mui/system";

const NavigationMenu = () => {
  const [showCart, setShowCart] = useState(false);
  const [clickSearch, setClickSearch] = useState(false);
  const path = usePathname();

  const openCart = () => {
    setShowCart(true);
  };
  return (
    <nav className={style.nav_menu}>
      <Cart showCart={showCart} setCart={setShowCart} />

      <HamburgerMenu />
      <ul className={style.nav_list}>
        <Box
          component={"li"}
          className={path === "/" ? style.active : undefined}
        >
          <NavLink href={"/"}>
            <Home sx={{ fontSize: 50 }} />
          </NavLink>
        </Box>
        <Box component={"li"}>
          <SearchBar />
        </Box>
        <Box
          component={"li"}
          className={path === "/favorite" ? style.active : undefined}
        >
          <NavLink href={"/favorite"}>
            <Favorite sx={{ fontSize: 50 }} />
          </NavLink>
        </Box>
        <Box component={"li"} onClick={openCart}>
          <ShoppingCart sx={{ fontSize: 50, cursor: "pointer" }} />
          <p>0</p>
        </Box>

        <Box
          component={"li"}
          className={path === "/login" ? style.active : undefined}
        >
          <NavLink href="/login">
            Login
            <Login sx={{ fontSize: 50 }} />
          </NavLink>
        </Box>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
