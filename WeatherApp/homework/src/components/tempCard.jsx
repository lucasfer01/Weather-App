import React from 'react'
import estilosTemp from '../styles/cardTemp.module.css'

function TempCard({span , temp}) {
    return (
        <div>
            <h3 className={estilosTemp.titulo}>{span}</h3>
            <p style={{fontSize: '20px' }}>{temp}</p>
        </div>
    )
}

export default TempCard
