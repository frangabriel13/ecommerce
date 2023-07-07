import React from "react";
import s from './Detail.module.css';
import ProductPage from "../productPage/ProductPage";



function Detail () {
  return (
    <div className={s.container}>
       <ProductPage />
    </div>
  )
}

export default Detail