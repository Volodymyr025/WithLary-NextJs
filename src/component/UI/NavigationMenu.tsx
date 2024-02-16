"use client";
import { useState } from "react";
import style from "./NavigationMenu.module.css";
import { Favorite, Home, Login, ShoppingCart } from "@mui/icons-material";
import Cart from "./Cart";
import HamburgerMenu from "./HamburgerMenu";
import SearchBar from "./Search";
import { Box } from "@mui/system";
import NavLink from "../shered/NavLink";

const NavigationMenu = () => {
  const [showCart, setShowCart] = useState(false);

  const openCart = () => {
    setShowCart(true);
  };

  return (
    <nav className={style.nav_menu}>
      <Cart showCart={showCart} setCart={setShowCart} />
      <HamburgerMenu />
      <ul className={style.nav_list}>
        <Box component={"li"}>
          <SearchBar />
        </Box>
        <NavLink href={"/"}>
          <Home sx={{ fontSize: 50 }} />
        </NavLink>

        <NavLink href={"/favorite"}>
          <Favorite sx={{ fontSize: 50 }} />
        </NavLink>

        <Box component={"li"} onClick={openCart}>
          <ShoppingCart sx={{ fontSize: 50, cursor: "pointer" }} />
          <p>0</p>
        </Box>

        <NavLink href="/login">
          Login
          <Login sx={{ fontSize: 50 }} />
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
