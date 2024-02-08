"use client";
import React, { useEffect, useState } from "react";
import { Search } from "@mui/icons-material";
import style from "./Search.module.css";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

const SearchBar = () => {
  const router = useRouter();
  const [textValue, setTextValue] = useState("");
  const [debaunceText] = useDebounce(textValue, 500);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("/api/items");
  //     return res.json();
  //   };
  //   const it = fetchData();
  //   console.log(it);
  // }, []);

  return (
    <div className={style.searchBox}>
      <input
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        className={style.searchInput}
        type="text"
        name=""
        placeholder="Search..."
      />
      <button className={style.searchButton}>
        <Search sx={{ color: "black" }} />
      </button>
    </div>
  );
};

export default SearchBar;
