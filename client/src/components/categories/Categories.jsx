import React from 'react';
import s from './Categories.module.css'; // Estilo CSS para el componente

const Categories = () => {
  return (
    <div className={s.section}>
      <div className={s.row}>
        <a className={s.category} href="#categoria1">
          <img src="https://rumay.com.ar/wp-content/uploads/2023/04/Diseno-sin-titulo-80.png" alt="Categoria 1" />
          <h3>Categoria 1</h3>
        </a>
        <a className={s.category} href="#categoria2">
          <img src="https://rumay.com.ar/wp-content/uploads/2023/04/Diseno-sin-titulo-80.png" alt="Categoria 2" />
          <h3>Categoria 2</h3>
        </a>
        <a className={s.category} href="#categoria3">
          <img src="https://rumay.com.ar/wp-content/uploads/2023/04/Diseno-sin-titulo-80.png" alt="Categoria 3" />
          <h3>Categoria 3</h3>
        </a>
      </div>
      <div className={s.row}>
        <a className={s.category} href="#categoria4">
          <img src="https://rumay.com.ar/wp-content/uploads/2023/04/Diseno-sin-titulo-80.png" alt="Categoria 4" />
          <h3>Categoria 4</h3>
        </a>
        <a className={s.category} href="#categoria5">
          <img src="https://rumay.com.ar/wp-content/uploads/2023/04/Diseno-sin-titulo-80.png" alt="Categoria 5" />
          <h3>Categoria 5</h3>
        </a>
        <a className={s.category} href="#categoria6">
          <img src="https://rumay.com.ar/wp-content/uploads/2023/04/Diseno-sin-titulo-80.png" alt="Categoria 6" />
          <h3>Categoria 6</h3>
        </a>
        
      </div>
    </div>
  );
};

export default Categories;
