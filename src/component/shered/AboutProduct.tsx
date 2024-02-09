import React from "react";
import style from "./AboutProduct.module.css";
import { Box } from "@mui/system";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import SecurityIcon from "@mui/icons-material/Security";
import { Button } from "@mui/material";
import FavoriteIcon from "@/component/UI/FavoriteIcon";


const AboutProduct = ({ item, onClick }: any) => {
  return (
    <Box component={"div"} className={style.bg}>
      <section>{item.title}</section>
      <Box component={"div"} className={style.wrapper}>
        <Box component={"section"} className={style.imgWrapper}>
          <span onClick={() => onClick(item)}>
            <FavoriteIcon checked={item.favorite ? true : false} />
          </span>
          <img src={item.image} alt="image item" />
        </Box>
        <Box component={"section"} className={style.about}>
          <h1>{item.title}</h1>
          <p>{item.discriptions}</p>
          <h2>{item.price + " uah"}</h2>
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

export default AboutProduct;
