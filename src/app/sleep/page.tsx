"use client";
import React, { useContext} from "react";
import style from "./SleepPage.module.css";
import FavoriteIcon from "@/component/UI/FavoriteIcon";
import { items } from "@/component/util/items";
import { FavoriteContext } from "@/store/favorite-context";
import Card from "@/component/shered/Card";

const SleepPage = () => {
  const addFav = useContext(FavoriteContext).addFavorite;
  return (
    <div className={style.bg}>
      <div className={style.title}>
        <h1 className="logoLary">WithLary</h1>
        <p className="underLogo">Help Ma & Pa</p>
      </div>
      <Card items={items} Favorite={<FavoriteIcon />} clickFavorite={addFav} />
    </div>
  );
};

export default SleepPage;
