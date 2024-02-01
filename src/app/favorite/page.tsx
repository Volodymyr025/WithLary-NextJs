"use client";
import React, { useContext } from "react";
import style from "./Favorite.module.css";
import { FavoriteContext } from "@/store/favorite-context";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from "@mui/material";

const Favorite = () => {
  const items = useContext(FavoriteContext).itemsList;
  const deleteItems = useContext(FavoriteContext).deleteFavorite;

  return (
    <div className={style.bg}>
      <div className={style.title}>
        <h1 className="logoLary">WithLary</h1>
        <p className="underLogo">Help Ma & Pa</p>
      </div>
      <ul className={style.box}>
        {items.map((item: any, index: number) => (
          <li key={index}>
            {
              <>
                <span onClick={()=>deleteItems(index)}>
                <FavoriteIcon sx={{color:'#1976d2',cursor:'pointer'}} />
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

export default Favorite;
