import React from 'react';
import TempCard from './tempCard';
import stilos from '../styles/card.module.css';
import { Link } from 'react-router-dom';
import icons from './icons'

export default function Card({ name, onClose, min, max, img, id, actual }) {
  // acá va tu código
  function renderSwitch() {
    switch (img) {
      case '01d':
        return icons.sol;

      case '01n':
        return icons.luna;

      case '02d':
        return icons.parcialmenteSoleado;

      case '02n':
        return icons.parcialmenteLuna;

      case '03d':
        return icons.nublado;

      case '03n':
        return icons.nublado;

      case '04d':
        return icons.nublado;

      case '04n':
        return icons.nublado;

      case '09d':
        return icons.aguaceroDia;

      case '09n':
        return icons.aguaceroNoche;

      case '10d':
        return icons.lluvia;

      case '10n':
        return icons.lluvia;

      case '11d':
        return icons.tormenta;

      case '11n':
        return icons.tormenta;

      case '13d':
        return icons.nieve;

      case '13n':
        return icons.nieve;

      case '50d':
        return icons.nieblaDia;

      case '50n':
        return icons.nieblaNoche

      default:

        return icons.sol;
    }
  }

  function renderStyle() {
    if (img === '01d' || img === '02d') { // dia despejado
      return stilos.sunny;

    } else if (img === '03d' || img === '04d') { // dia nublado
      return stilos.cloudy;

    } else if(img === '09d' || img === '10d') { //dia lluvioso
      return stilos.rainy

    } else if(img === '11d') { // dia truenos
      return stilos.thunder;
      
    } else if(img === '13d') { // dia nieve
      return stilos.snowy;

    } else if(img === '13n') { // noche nieve
      return stilos.snowyNight;

    } else if(img === '01n' || img === '02n') { // noche despejado
      return stilos.night;

    } else if(img === '03n' || img === '04n') { // noche nublado
      return stilos.cloudyNight;

    } else if(img === '09n' || img === '10n') { // noche lluviosa
      return stilos.rainyNight;

    } else if(img === '50d' || img === '50n') { // noche y dia niebla
      return stilos.foggy;
      
    } else if(img === '11n') {
      return stilos.thunderNight;
    }
  }

  return (
    <div className={renderStyle()}>

      <div className={stilos.contenedorContenido}>
        <div>
          <div className={stilos.contenedorBotonTitulo}>
            <Link style={{ textDecoration: 'none' }} to={`/ciudad/${id}`}>
              <h2 className={stilos.contenedorCiudadTitulo}>{name}</h2>
            </Link>
            <button className={stilos.botonCerrar} onClick={onClose}>X</button>
          </div>
        </div>

        <div className={stilos.contenedorImgClima}>
          <img src={renderSwitch()} alt="" width='100px' />
        </div>

        <div>
          <h3 className={stilos.temperaturaActual}>{actual}<span>°</span></h3>
        </div>

        <div className={stilos.contenedorTemperaturas}>
          <div>
            <TempCard temp={min} span={'Min'} />
          </div>
          <div>
            <TempCard temp={max} span={'Max'} />
          </div>
        </div>
      </div>


    </div>
  )
};