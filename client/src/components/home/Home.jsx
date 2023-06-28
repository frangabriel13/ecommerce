import React from "react";
import s from "./Home.module.css";
import Banner from "../banner/Banner";

function Home() {
  return (
    <div className={s.container}>
      <Banner />
    </div>
  );
}


export default Home;