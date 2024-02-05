import React from "react";
import style from "./Card.module.css";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

interface propsType {
  items: any;
  Favorite: JSX.Element;
  clickFavorite: React.FC;
}

interface itemsType {
  id: string;
  image: string;
  title: string;
  discriptions: string;
  price: string;
}

const Card = ({ items, Favorite, clickFavorite }: propsType) => {
  return (
    <ul className={style.box}>
      {items.map((item: itemsType) => (
        <Box component={"li"} key={item.id}>
          <span onClick={() => clickFavorite(item)}>{Favorite}</span>
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.discriptions}</p>
          <p>{item.price + " uah"}</p>
          <div className={style.btn}>
            <Button size="small" variant="contained" color="success">
              Buy
            </Button>
          </div>
        </Box>
      ))}
    </ul>
  );
};

export default Card;
