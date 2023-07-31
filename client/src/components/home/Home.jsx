import React from "react";
import s from "./Home.module.css";
import Banner from "../banner/Banner";
import Info from "../info/Info";
import Footer from "../footer/Footer";
import Categories from "../categories/Categories";
import NewArrivals from "../newArrivals/newArrivals";




function Home() {
  return (
    <div className={s.container}>
      <Banner />
      <Info />
      <Categories />
      <NewArrivals />
      <Footer />

    </div>
  );
}


export default Home;