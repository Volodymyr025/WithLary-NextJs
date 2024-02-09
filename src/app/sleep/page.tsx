"use client";
import React, { useContext, useEffect, useState } from "react";
import style from "./SleepPage.module.css";
import { FavoriteContext } from "@/store/favorite-context";
import Card from "@/component/shered/Card";

const SleepPage = () => {
  const toggle = useContext(FavoriteContext).toggleFavorite;
  const items = useContext(FavoriteContext).itemsState;
  const [produsct, setProducts] = useState([]);
  useEffect(() => {
    void (async () => {
      const res = await fetch("/api/items");
      const { items } = await res.json();
      setProducts(items);
    })();
  }, []);
  console.log(produsct)
  return (
    <div className={style.bg}>
      <div className={style.title}>
        <h1 className="logoLary">WithLary</h1>
        <p className="underLogo">Help Ma & Pa</p>
      </div>
      <Card items={items} clickFavorite={toggle} />
    </div>
  );
};

export default SleepPage;
