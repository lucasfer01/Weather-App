import React from 'react';
import style from '../styles/searchBar.module.css';

export default function SearchBar(props) {
// acá va tu código
return (
  <div>
    <input className={style.searchInput} type="text" placeholder='Buscar por ciudad' />
    <button className={style.searchBoton} onClick={()=>{props.onSearch("Buscando...")}}>BUSCAR</button>
  </div>
)
};