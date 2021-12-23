import React from 'react';
import Card from './Card';
import cardsStyle from '../styles/Cards.module.css';

export default function Cards({cities, onRemove}) {
// acá va tu código
// tip, podés usar un map
return (
  <div className={cardsStyle.cardsContainer}>
    {
    cities.map(city => (
      <>
        <Card 
          key={city.id} 
          name={city.name} 
          min={city.min}
          max={city.max}
          img={city.img}
          id={city.id}
          actual={city.temp}
          onClose={()=> onRemove(city.id)}/>
      </>
      ))
      }
  </div>
)
};