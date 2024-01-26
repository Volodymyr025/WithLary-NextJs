"use client"
import { useState } from "react";
import style from "./HamburgerMenu.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChecklistIcon from "@mui/icons-material/Checklist";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Link from "next/link";

const HamburgerMenu = () => {
  const [showBar, setShowBar] = useState(false);

  const showNavBar = () => {
    setShowBar(!showBar);
  };

  return (
    <>
      <button
        className={`${style.bar} ${showBar ? style.close : ""}`}
        onClick={showNavBar}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {showBar && (
        <ul className={style.main}>
          <div className={style.menu__item__main}>
            <AccountCircleIcon
              style={{
                height: 80,
                width: 80,
                padding: "2rem",
                gridArea: "logo",
              }}
            />
            <div className={style.select_lang}>
              <section style={{ cursor: "pointer" }}>UA</section>
              <section className={style.line}></section>
              <section style={{ cursor: "pointer" }}>ENG</section>
            </div>
            <div className={style.logMenu}>
              <section style={{ cursor: "pointer" }} onClick={showNavBar}>
                <Link href={"/login"}>Login</Link>
              </section>
              <section className={style.line}></section>
              <section style={{ cursor: "pointer" }} onClick={showNavBar}>
                <Link href={"/registration"}>Registration</Link>
              </section>
            </div>
          </div>

          <li className={style.options}>
            <ChecklistIcon></ChecklistIcon>
            <span>Favorite</span>
          </li>
          <hr></hr>
          <li className={style.options} style={{ color: "black" }}>
            <HelpOutlineIcon></HelpOutlineIcon>
            <span>Support</span>
          </li>
          <li className={style.options} style={{ fontSize: 18 }}>
            <p>Delivery and return of goods</p>
          </li>
          <li className={style.options} style={{ fontSize: 18 }}>
            <p>Guarantees of obligations</p>
          </li>
          <li className={style.options} style={{ fontSize: 18 }}>
            <p>Offer</p>
          </li>
          <hr></hr>
          <li className={style.options} style={{ color: "black" }}>
            <NotificationsActiveIcon></NotificationsActiveIcon>
            <p>About Kids</p>
          </li>
          <li className={style.options} style={{ fontSize: 18 }}>
            <p>About us</p>
          </li>
          <li className={style.options} style={{ fontSize: 18 }}>
            <p>Contact us</p>
          </li>
        </ul>
      )}
    </>
  );
};

export default HamburgerMenu;
