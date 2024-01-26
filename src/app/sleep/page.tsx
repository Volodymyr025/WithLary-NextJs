import React from "react";
import style from "./SleepPage.module.css";

const SleepPage = () => {
  const items = [
    {
      title: "Text",
      discriptions: "Discriptions",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-7717/k2-_a9270c7b-5e8d-47d5-a049-b477a2d87f05.v1.png",
      price: 150,
    },
    {
      title: "Textdd",
      discriptions: "Discriptions",
      image:
        "https://mama-kupi.ua/image/cachewebp//catalog/product/279174-600x912.webp",
      price: 150,
    },
  ];

  return (
    <div className={style.bg}>
      <h1 className="logoLary">WithLary</h1>
      <p className="underLogo">Help Ma & Pa</p>
      <ul className={style.box}>
        {items.map((item) => (
          <li>1</li>
        ))}
      </ul>
    </div>
  );
};

export default SleepPage;
