"use client";
import React, { useContext } from "react";
import style from "./SleepPage.module.css";
import { FavoriteContext } from "@/store/favorite-context";
import Card from "@/component/shered/Card";
import { products } from "@/component/util/products";
import { CartContext } from "@/store/cart-context";

const SleepPage = () => {
  const toggle = useContext(FavoriteContext).toggleFavorite;
  const addToCart = useContext(CartContext).addProducts;
  return (
    <div className={style.bg}>
      <header className={style.title}>
        <h1 className="logoLary">WithLary</h1>
        <p className="underLogo">Help Ma & Pa</p>
      </header>
      <main>
        <Card items={products} clickFavorite={toggle} addToCart={addToCart} />
      </main>
    </div>
  );
};

export default SleepPage;
