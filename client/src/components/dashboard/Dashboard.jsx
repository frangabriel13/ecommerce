import React from "react";
import ProductForm from "./productForm/ProductForm";
import CategoryManagement from "./categoryManagement/CategoryManagement";
import SideBar from "./sideBar/SideBar";
import s from './Dashboard.module.css';

function Dashboard() {
  return (
    <div className={s.container}>
      <SideBar />
      {/* <ProductForm /> */}
      <CategoryManagement />
    </div>
  );
}


export default Dashboard;