import React from 'react'

function Ciudad({city}) {
    return (
        <div>
            <h2>{city.name}</h2>
            <div>
                <div>Temperatura: {city.temp}°C</div>
                <div>Clima {city.weather}</div>
                <div>Viento: {city.wind}km/h</div>
                <div>Cantidad de nubes: {city.clouds}</div>
                <div>Latitud: {city.latitud}º</div>
                <div>Longitud: {city.longitud}º</div>
            </div>
        </div>
    )
}

export default Ciudad
