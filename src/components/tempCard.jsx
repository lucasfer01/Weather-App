import React from 'react'
import estilosTemp from '../styles/cardTemp.module.css'

function TempCard({span , temp}) {
    return (
        <div className={estilosTemp.contenedorTemperaturas}>
            <h3 className={estilosTemp.titulo}>{span}</h3>

            <p>{temp}°</p>
        </div>
    )
}

export default TempCard
