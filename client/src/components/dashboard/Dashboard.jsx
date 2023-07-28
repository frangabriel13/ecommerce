import React from "react";
import ProductManagement from "./productManagement/ProductManagement";
import CategoryManagement from "./categoryManagement/CategoryManagement";
import SideBar from "./sideBar/SideBar";
import s from './Dashboard.module.css';

function Dashboard() {
  return (
    <div className={s.container}>
      <div className={s.sideBar}>
        <SideBar />
      </div>
      <div className={s.content}>
        <ProductManagement />
      </div>
      
    </div>
  );
}


export default Dashboard;