"use client";
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

const FavoriteIcon = ({checked}:any) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} checked={checked} />
  );
};

export default FavoriteIcon;
