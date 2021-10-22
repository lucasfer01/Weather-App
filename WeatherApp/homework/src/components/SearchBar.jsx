import React from 'react';
import style from '../styles/searchBar.module.css';

export default function SearchBar({onSearch}) {
// acá va tu código
function handleOnSearch(event) {
  event.preventDefault();
  if (typeof onSearch === "function") {
    const input = document.getElementById("search-bar-input");
    onSearch(input.value);
    input.value = "";
  }
}

return (
  <form className={style.contenedorSearchBar} >
    <input className={style.searchInput} type="text" placeholder='Buscar por ciudad...' id='search-bar-input' />
    <input type='submit' className={style.searchBoton}  onClick={handleOnSearch}/>
  </form>
)
};