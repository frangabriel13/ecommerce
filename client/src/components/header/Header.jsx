import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchProducts } from '../../actions/productActions';
import s from "./Header.module.css";
import logo from "../../assets/Rumay.png";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (sectionId) => {
    setMenuOpen(!menuOpen);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      setShowResults(false);
    } else {
      const results = dispatch(searchProducts(searchTerm));
      setSearchResults(results.slice(0, 5)); // Mostrar los primeros 5 resultados
      setShowResults(true);
    }
  };

  const handleSearchInputChange = (event) => {
    handleSearch(event.target.value);
  };

  const handleSearchResultClick = (productId) => {
    // Redireccionar a la página del producto seleccionado
    navigate.push(`/product/${productId}`);
    // Ocultar la ventana emergente de resultados
    setShowResults(false);
  };

  const handleSeeMoreClick = () => {
    // Redireccionar a la página de búsqueda con el término de búsqueda actual
    navigate.push(`/search/${searchTerm}`);
    // Ocultar la ventana emergente de resultados
    setShowResults(false);
  };

  return (
    <div className={s.container}>
        <NavLink to={"/"}>
                   <img src={logo} className={s.logo} />
           </NavLink>
          
        
        <div className={s.nav}>
          <nav>
          <NavLink to={"/"}>
                   Inicio
           </NavLink>
           <NavLink to={"/tienda"}>
                   Tienda
           </NavLink>
           <NavLink to={"/como-comprar"}>
                   ¿Cómo comprar?
           </NavLink>
           
            <a href='#'>Categorías</a>
            <a href='#'>Contacto</a>
          </nav>
          <div>
            <i className={`bi bi-search ${s.icon}`}></i>
            <input
          type="text"
          value={searchTerm}
          onChange={handleSearchInputChange}
          placeholder="Search products..."
        />
        {showResults && (
          <div className={s.searchResults}>
            {searchResults.map((result) => (
              <div
                key={result.id}
                className={s.resultItem}
                onClick={() => handleSearchResultClick(result.id)}
              >
                <img src={result.thumbnail} alt={result.name} />
                <span>{result.name}</span>
                <span>${result.price}</span>
              </div>
            ))}
            {searchResults.length > 5 && (
              <div className={s.seeMore} onClick={handleSeeMoreClick}>
                Ver más resultados
              </div>
            )}
          </div>
          )}
            <i className={`bi bi-person ${s.icon}`}></i>
            <i className={`bi bi-cart3 ${s.icon}`}></i>
          </div>
        </div>
        <div className={s.burger}>
          <i className={`bi bi-list`} onClick={toggleMenu}></i>
        </div>
    </div>
  );
}


export default Header;