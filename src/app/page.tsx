import Box from "@mui/system/Box";
import style from "./page.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        height: "calc(100% - var(--heigthNavBar))",
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
            <li>Child development from 0-36</li>
            <li>Everything for feeding</li>
            <li>Care, hygiene</li>
            <li>Toys and creativity</li>
            <Link href={"/sleep"}>
              <li>Peaceful sleep</li>
            </Link>
            <li>Children's room and security</li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
