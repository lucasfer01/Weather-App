import React from 'react';
import Card from './Card';
import stilos from '../styles/card.module.css';

export default function Cards({cities, onRemove}) {
// acá va tu código
// tip, podés usar un map
return (
  <div style={{display: 'flex', flexWrap: 'wrap', }}>
    {
    cities.map(city => (
      <div className={stilos.contenedorPrincipal}>
        <Card 
          key={city.id} 
          name={city.name} 
          min={city.min}
          max={city.max}
          img={city.img}
          onClose={()=> onRemove(city.id)}/>
      </div>
      ))
      }
  </div>
)
};