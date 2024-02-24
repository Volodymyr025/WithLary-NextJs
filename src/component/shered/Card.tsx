import React, { Suspense } from "react";
import style from "./Card.module.css";
import { Box } from "@mui/system";
import { Fab, IconButton } from "@mui/material";
import FavoriteIcon from "../UI/FavoriteIcon";
import Link from "next/link";
import Image from "next/image";
import { AddShoppingCart } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";

interface propsType {
  items: any;
  clickFavorite: any;
  checked?: Boolean;
  addToCart: any;
}

export interface itemsType {
  id: string;
  image: string;
  title: string;
  discriptions: string;
  price: string;
  favorite: Boolean;
}

const Card = ({ items, clickFavorite, addToCart }: propsType) => {
  return (
    <ul className={style.box}>
      {items.map((item: itemsType) => (
        <Box component={"li"} key={item.id}>
          <Box component={"div"} sx={{ padding: 1 }}>
            <span
              onClick={() => clickFavorite(item)}
              style={{ position: "absolute" }}
            >
              <FavoriteIcon checked={item.favorite ? true : false} />
            </span>
            <Link href={`/sleep/${item.id}`}>
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={300}
              />
              <h2>{item.title}</h2>
            </Link>
          </Box>
          <div className={style.btn}>
            <h3>{item.price + " $"}</h3>
            <Fab
              color="primary"
              aria-label="add"
              sx={{ height: 45, width: 45, bgcolor: "black", zIndex: 0 }}
            >
              <AddIcon onClick={() => addToCart(item)} />
            </Fab>
          </div>
        </Box>
      ))}
    </ul>
  );
};

export default Card;
