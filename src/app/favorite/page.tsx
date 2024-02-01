"use client";
import React, { useContext } from "react";
import style from "./Favorite.module.css";
import { FavoriteContext } from "@/store/favorite-context";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/system";
import Card from "@/component/shered/Card";

const Favorite = () => {
  const items = useContext(FavoriteContext).itemsList;
  const deleteItems = useContext(FavoriteContext).remoteFavorite;

  return (
    <div className={style.bg}>
      <div className={style.title}>
        <h1 className="logoLary">WithLary</h1>
        <p className="underLogo">Help Ma & Pa</p>
      </div>
      {items.length === 0 && (
        <Box
          component={"h1"}
          sx={{ color: "#eba95c", textAlign: "center", fontSize: "4rem" }}
        >
          Favorite list is empty
        </Box>
      )}
      <Card
        items={items}
        Favorite={<FavoriteIcon sx={{ color: "#1976d2", cursor: "pointer" }} />}
        clickFavorite={deleteItems}
      />
    </div>
  );
};

export default Favorite;
