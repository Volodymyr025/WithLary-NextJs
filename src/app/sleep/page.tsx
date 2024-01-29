
import React from "react";
import style from "./SleepPage.module.css";
import { Button } from "@mui/material";
import FavoriteIcon from "@/component/UI/FavoriteIcon";


const SleepPage = () => {
  const items = [
    {
      title: "Text",
      discriptions: "Discriptions",
      image: "assets/images.jpg",
      price: 150,
    },
    {
      title: "Textdd",
      discriptions: "Discriptions",
      image: "assets/89-896932_6v-vw-beetle-toy-car-for-kids-png.png",
      price: 150,
    },
    {
      title: "Text",
      discriptions: "Discriptions",
      image: "assets/images.jpg",
      price: 150,
    },
    {
      title: "Text",
      discriptions: "Discriptions",
      image: "assets/images.jpg",
      price: 150,
    },
    {
      title: "Text",
      discriptions: "Discriptions",
      image: "assets/images.jpg",
      price: 150,
    },
    {
      title: "Text",
      discriptions: "Discriptions",
      image: "assets/images.jpg",
      price: 150,
    },
    {
      title: "Text",
      discriptions: "Discriptions",
      image: "assets/images.jpg",
      price: 150,
    },
    {
      title: "Text",
      discriptions: "Discriptions",
      image: "assets/images.jpg",
      price: 150,
    },
    {
      title: "Text",
      discriptions: "Discriptions",
      image: "assets/images.jpg",
      price: 150,
    },
    {
      title: "Text",
      discriptions: "Discriptions",
      image: "assets/images.jpg",
      price: 150,
    },
    {
      title: "Text",
      discriptions: "Discriptions",
      image: "assets/images.jpg",
      price: 150,
    },
  ];

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
                <FavoriteIcon/>
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
