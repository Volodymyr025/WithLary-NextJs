import React from "react";
import style from "./Card.module.css";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import FavoriteIcon from "../UI/FavoriteIcon";

interface propsType {
  items: any;
  clickFavorite: any;
  checked?: Boolean;
}

interface itemsType {
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
            <FavoriteIcon checked={item.favorite ? true : false}/>
          </span>
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
