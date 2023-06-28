import React from "react";
import s from "./Home.module.css";
import Banner from "../banner/Banner";
import Info from "../info/Info"

function Home() {
  return (
    <div className={s.container}>
      <Banner />
      <Info />
    </div>
  );
}


export default Home;