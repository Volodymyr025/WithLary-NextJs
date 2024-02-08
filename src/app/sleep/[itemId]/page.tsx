"use client";
import React, { useContext } from "react";
import style from "./item.module.css";
import { Box } from "@mui/system";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import SecurityIcon from "@mui/icons-material/Security";

import { Button } from "@mui/material";
import { FavoriteContext } from "@/store/favorite-context";
import FavoriteIcon from "@/component/UI/FavoriteIcon";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";

const item = ({ params }: any) => {
  const pageId = params.itemId;
  const items = useContext(FavoriteContext).itemsState;
  const toggle = useContext(FavoriteContext).toggleFavorite;
  const getItem = items.find(
    (element: { id: string }) => element.id === pageId && element
  );
  const pathName = usePathname();
  console.log(pathName)

  return (
    <Box component={"div"} className={style.bg}>
      <section>{getItem.title}</section>
      <Box component={"div"} className={style.wrapper}>
        <Box component={"section"}>
          <span onClick={() => toggle(getItem)}>
            <FavoriteIcon checked={getItem.favorite ? true : false} />
          </span>
          <img src={getItem?.image} alt="image item" />
        </Box>
        <Box component={"section"} className={style.about}>
          <h1>{getItem.title}</h1>
          <p>{getItem.discriptions}</p>
          <h2>{getItem.price + " uah"}</h2>
          <Button variant="contained" size="large">
            Buy
          </Button>
        </Box>
        <Box component={"section"} className={style.delivery}>
          <div className={style.icon}>
            <LocalShippingIcon /> Delivery
          </div>
          <ul>
            <li>Self pickup</li>
            <li>Delivery(Nova poshta)</li>
            <li>Delivery(Ukr poshta)</li>
          </ul>
          <div className={style.icon}>
            <PaymentIcon /> Payment
          </div>
          <ul>
            <li>Cash</li>
            <li>Payment upon receipt</li>
            <li>Payment on card</li>
          </ul>
          <div className={style.icon}>
            <SecurityIcon />
            Warranty and returns
          </div>
          <ul>
            <li>Returns and exchanges within 14 days</li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default item;
