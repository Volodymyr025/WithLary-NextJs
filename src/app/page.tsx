import Box from "@mui/system/Box";
import style from "./page.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        minHeight: "calc(100% - var(--heigthNavBar))",
        bgcolor: "#caaacd",
      }}
    >
      <Box
        component="div"
        sx={{
          display: "grid",
          gridTemplate: "1fr/1fr 1fr",
          textAlign: "center",
        }}
      >
        <Box>
          <h1 className="logoLary">With Lary</h1>
          <p className="underLogo">Help Ma&Pa</p>
        </Box>
        <Box>
          <ul className={style.mainRight}>
            <Link href={"#"}>
              <li>Child development from 0-36</li>
            </Link>
            <Link href={"#"}>
              <li>Everything for feeding</li>
            </Link>
            <Link href={"/care"}>
              <li>Care, hygiene</li>
            </Link>
            <Link href={"#"}>
              <li>Toys and creativity</li>
            </Link>
            <Link href={"/sleep"}>
              <li>Peaceful sleep</li>
            </Link>
            <Link href={"#"}>
              <li>Children's room and security</li>
            </Link>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
