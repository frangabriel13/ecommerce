import React from "react";
import s from "./Home.module.css";
import Banner from "../banner/Banner";
import Info from "../info/Info";
import ProductCard from "../productCard/ProductCard"
import ProductStore from "../productStore/ProductStore";

function Home() {
  return (
    <div className={s.container}>
      <Banner />
      <Info />
    
      <ProductStore />
    </div>
  );
}


export default Home;