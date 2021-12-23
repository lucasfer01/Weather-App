import React, {useState} from 'react';
import './App.css';
// import stilos from './styles/card.module.css';
// import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
// import SearchBar from './components/SearchBar.jsx';
// import { Cairns } from './data.js';
import Nav from './components/Nav';
import img from './img/henry-icon.png';
import {Route} from 'react-router-dom';
import About from './components/About';
import Ciudad from './components/Ciudad';

// const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [cities, setCities] = useState([]);

  function handleAddCity(city) {
    setCities((prevCities) => {
      return [city, ...prevCities];
    });
  }

  function handleRemoveCity(cityId) {
    setCities((prevCities) => {
      return prevCities.filter((city) => {
        return cityId !== city.id;
      });
    });
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  function onSearch(ciudad) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=32c48cef3e049f8157d26bdfca4a9302&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: Math.round(recurso.main.temp),
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          handleAddCity(ciudad);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  return (
    <div className="App">
      <Route path='/' render={() => <Nav title='Weather App' src={img} onSearch={onSearch} />}/>
      <Route exact path='/' render={()=><Cards cities={cities} onRemove={handleRemoveCity} />} />
      <Route path='/about' component={About}/>
      <Route exact path='/ciudad/:ciudadId' render={({match})=> <Ciudad city={onFilter(match.params.ciudadId)} />} />
    </div>
  );
}

export default App;
