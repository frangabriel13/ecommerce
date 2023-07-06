import React from "react";
import ProductForm from "./productForm/ProductForm";
import s from './Dashboard.module.css';

function Dashboard() {
  return (
    <div className={s.container}>
      <ProductForm />
    </div>
  );
}


export default Dashboard;