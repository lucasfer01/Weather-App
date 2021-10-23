import React from 'react';
import TempCard from './tempCard';
import stilos from '../styles/card.module.css';
import { Link } from 'react-router-dom';

export default function Card({name , onClose , min , max , img , id}) {
// acá va tu código
return (
<div className={stilos.contenedorContenido}>
  <div className={stilos.contenedorBotonTitulo}>
    <Link to={`/ciudad/${id}`}>
      <h2 className={stilos.contenedorCiudadTitulo}>{name}</h2>
    </Link>
    <button className={stilos.botonCerrar} onClick={onClose}>X</button>
  </div>
  <div className={stilos.contenedorTemperaturas}>
    <div>
      <TempCard temp={min} span={'Min'}/>
    </div>
    <div>
      <TempCard temp={max} span={'Max'}/>
    </div>
  </div>
    <img className={stilos.img} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
</div>
)
};