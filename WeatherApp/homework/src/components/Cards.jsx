import React from 'react';
import Card from './Card';
import stilos from '../styles/card.module.css';

export default function Cards(props) {
// acá va tu código
// tip, podés usar un map
return (
  <div style={{display: 'flex', flexWrap: 'wrap', }}>
    {
    props.cities.map(ciudad => (
      <div className={stilos.contenedorPrincipal}>
        <Card key={ciudad.id} name={ciudad.name} onClose={()=> alert(ciudad.name)}
          min={ciudad.main.temp_min}
          max={ciudad.main.temp_max}
          img={ciudad.weather[0].icon}/>
      </div>
      ))
      }
  </div>
)
};