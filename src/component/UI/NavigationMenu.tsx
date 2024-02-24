"use client";
import { useContext, useState } from "react";
import style from "./NavigationMenu.module.css";
import { Favorite, Home, Login, ShoppingCart } from "@mui/icons-material";
import Cart from "./Cart";
import HamburgerMenu from "./HamburgerMenu";
import SearchBar from "./Search";
import { Box } from "@mui/system";
import NavLink from "../shered/NavLink";
import { CartContext } from "@/store/cart-context";
import { IconButton } from "@mui/material";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { FavoriteContext } from "@/store/favorite-context";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const NavigationMenu = () => {
  const productsCtx = useContext(CartContext).cartProducts;
  const quantityCtx = useContext(CartContext).quantityCtx;
  const deleteCtx = useContext(CartContext).deleteProduct;
  const favoriteCth = useContext(FavoriteContext).itemsFavoriteList;
  const [showCart, setShowCart] = useState(false);

  const openCart = () => {
    setShowCart(true);
  };

  return (
    <nav className={style.nav_menu}>
      <Cart
        showCart={showCart}
        setCart={setShowCart}
        products={productsCtx}
        deleteProducts={deleteCtx}
        quantity={quantityCtx}
      />
      <HamburgerMenu />
      <ul className={style.nav_list}>
        <Box component={"li"}>
          <SearchBar />
        </Box>
        <NavLink href={"/"}>
          <Home sx={{ fontSize: 50 }} />
        </NavLink>

        <NavLink href={"/favorite"}>
          <StyledBadge badgeContent={favoriteCth.length} color="secondary">
            <Favorite sx={{ fontSize: 50 }} />
          </StyledBadge>
        </NavLink>

        <Box component={"li"} onClick={openCart}>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={productsCtx.length} color="secondary">
              <ShoppingCart
                sx={{ fontSize: 50, cursor: "pointer", color: "white" }}
              />
            </StyledBadge>
          </IconButton>
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
