"use client";
import React from "react";
import { Search } from "@mui/icons-material";
import style from "./Search.module.css";

const SearchBar = () => {
  return (
    <div className={style.searchBox}>
      <input
        className={style.searchInput}
        type="text"
        name=""
        placeholder="Search"
      />
      <button className={style.searchButton}>
        <Search sx={{ color: "black" }} />
      </button>
    </div>
  );
};

export default SearchBar;
