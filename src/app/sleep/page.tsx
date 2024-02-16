"use client";
import React, { useContext, useEffect, useState } from "react";
import style from "./SleepPage.module.css";
import { FavoriteContext } from "@/store/favorite-context";
import Card from "@/component/shered/Card";
import { products } from "@/component/util/products";


const SleepPage = () => {
  const toggle = useContext(FavoriteContext).toggleFavorite;
  // const [products, setProducts] = useState();
  // useEffect(() => {
  //   void (async () => {
  //     const res = await fetch("/api/items");
  //     const { items } = await res.json();
  //     setProducts(items);
  //   })();
  // }, []);
  return (
    <div className={style.bg}>
      <header className={style.title}>
        <h1 className="logoLary">WithLary</h1>
        <p className="underLogo">Help Ma & Pa</p>
      </header>
      <main>
        <Card items={products} clickFavorite={toggle} />
      </main>
    </div>
  );
};

export default SleepPage;
