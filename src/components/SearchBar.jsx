import React, { useState } from 'react';
import style from '../styles/searchBar.module.css';

export default function SearchBar({onSearch}) {
// acá va tu código
const [state, setState] = useState({city:''});

function handleOnChange(event) {
  setState({
    ...state,
    [event.target.name]: event.target.value
  })
}

function handleOnSearch() {
  if (typeof onSearch === "function") {
    const input = document.getElementById("search-bar-input");
    onSearch(input.value);
    setState({city:''})
  }
}

function handleOnsubmit(event) {
  event.preventDefault();
  handleOnSearch();
}

return (
  <form autocomplete="off" onSubmit={handleOnsubmit} className={style.contenedorSearchBar} >
    <input className={style.searchInput} name='city' type="text" placeholder='Buscar por ciudad...' id='search-bar-input' value={state.city} onChange={handleOnChange} />
    <i className="fas fa-search" onClick={handleOnSearch}></i>
  </form>
)
};