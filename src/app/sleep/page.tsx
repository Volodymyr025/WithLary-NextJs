"use client";
import React, { useContext, useState } from "react";
import style from "./SleepPage.module.css";
import { Button } from "@mui/material";
import FavoriteIcon from "@/component/UI/FavoriteIcon";
import { items } from "@/component/util/items";
import { FavoriteContext } from "@/store/favorite-context";

const SleepPage = () => {
  const addFav = useContext(FavoriteContext).addFavorite;

  return (
    <div className={style.bg}>
      <div className={style.title}>
        <h1 className="logoLary">WithLary</h1>
        <p className="underLogo">Help Ma & Pa</p>
      </div>
      <ul className={style.box}>
        {items.map((item, index) => (
          <li key={index}>
            {
              <>
                <span
                  onClick={(e: any) =>
                    addFav(index, e.target.checked)
                  }
                >
                  <FavoriteIcon/>
                </span>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
                <p>{item.discriptions}</p>
                <p>{item.price + " uah"}</p>
                <div className={style.btn}>
                  <Button size="small" variant="contained" color="success">
                    Buy
                  </Button>
                </div>
              </>
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SleepPage;
