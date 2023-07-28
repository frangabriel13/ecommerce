import React from "react";
import s from "./Home.module.css";
import Banner from "../banner/Banner";
import Info from "../info/Info";

import ProductStore from "../productStore/ProductStore";
import Footer from "../footer/Footer";
import Categories from "../categories/Categories";


function Home() {
  return (
    <div className={s.container}>
      <Banner />
      <Info />
      <Categories />
     
      <Footer />

    </div>
  );
}


export default Home;