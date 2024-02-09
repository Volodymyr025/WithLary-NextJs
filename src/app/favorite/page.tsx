"use client";
import React, { useContext } from "react";
import style from "./Favorite.module.css";
import { FavoriteContext } from "@/store/favorite-context";
import { Box } from "@mui/system";
import Card from "@/component/shered/Card";

const Favorite = () => {
  const itemsCtx = useContext(FavoriteContext).itemsFavoriteList;
  const toggle = useContext(FavoriteContext).toggleFavorite;

  return (
    <div className={style.bg}>
      <div className={style.title}>
        <h1 className="logoLary">WithLary</h1>
        <p className="underLogo">Help Ma & Pa</p>
      </div>
      {itemsCtx.length === 0 && (
        <Box
          component={"h1"}
          sx={{ color: "#eba95c", textAlign: "center", fontSize: "4rem" }}
        >
          Favorite list is empty
        </Box>
      )}
      <Card items={itemsCtx} clickFavorite={toggle} />
    </div>
  );
};

export default Favorite;
