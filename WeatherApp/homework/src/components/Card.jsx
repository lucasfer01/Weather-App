import React from 'react';
import TempCard from './tempCard';
import stilos from '../styles/card.module.css';

export default function Card({name , onClose , min , max , img}) {
// acá va tu código
function handleOnClose() {
  if (typeof onClose === "function") onClose();
}

return (
<div className={stilos.contenedorContenido}>
  <div className={stilos.contenedorBotonTitulo}>
    <h2 className={stilos.contenedorCiudadTitulo}>{name}</h2>
    <button className={stilos.botonCerrar} onClick={handleOnClose}>X</button>
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