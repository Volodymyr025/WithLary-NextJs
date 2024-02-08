import React from "react";
import style from "./Card.module.css";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import FavoriteIcon from "../UI/FavoriteIcon";
import Link from "next/link";

interface propsType {
  items: any;
  clickFavorite: any;
  checked?: Boolean;
}

export interface itemsType {
  id: string;
  image: string;
  title: string;
  discriptions: string;
  price: string;
  favorite: Boolean;
}

const Card = ({ items, clickFavorite }: propsType) => {
  return (
    <ul className={style.box}>
      {items.map((item: itemsType) => (
        <Box component={"li"} key={item.id}>
          <span onClick={() => clickFavorite(item)}>
            <FavoriteIcon checked={item.favorite ? true : false} />
          </span>
          <Link href={`/sleep/${item.id}`}>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
          </Link>
          <p>{item.discriptions}</p>
          <h3>{item.price + " uah"}</h3>
          <div className={style.btn}>
            <Button size="small" variant="contained">
              Buy
            </Button>
          </div>
        </Box>
      ))}
    </ul>
  );
};

export default Card;
