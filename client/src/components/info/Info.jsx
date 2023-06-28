import React from 'react';
import s from './Info.module.css';

const Info = () => {
  return (
    <div className={s.container}>
      <div className={s.iconContainer}>
        <i className={`bi bi-truck ${s.icon}`}></i>
        <span className={s.text}>Envíos a todo el país</span>
      </div>
      <div className={s.separator}></div>
      <div className={s.iconContainer}>
        <i className={`bi bi-credit-card ${s.icon}`}></i>
        <span className={s.text}>Varios métodos de pago</span>
      </div>
      <div className={s.separator}></div>
      <div className={s.iconContainer}>
        <i className={`bi bi-geo-alt ${s.icon}`}></i>
        <span className={s.text}>Bogotá 3171, piso 1, CABA, Zona Flores</span>
      </div>
    </div>
  );
};

export default Info;