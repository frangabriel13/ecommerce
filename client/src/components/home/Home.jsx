import React from "react";
import s from "./Home.module.css";
import Banner from "../banner/Banner";
import Info from "../info/Info";
import Card from "../card/Card"

function Home() {
  return (
    <div className={s.container}>
      <Banner />
      <Info />
      <Card />
    </div>
  );
}


export default Home;