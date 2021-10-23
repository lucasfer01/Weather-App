import React from 'react'
import SearchBar from './SearchBar'
function Nav({title, src, onSearch}) {
    return (
        <div style={{margin: 'auto', display:'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%', height: '5em', backgroundColor: '#023e8a', boxShadow: '0 0 6px rgba(0,0,0,0.5)'}}>
            <img style={{width: '40px', height: '40px'}} src={src} alt="" />
            <h2>{title}</h2>
            <SearchBar  onSearch={onSearch} />
        </div>
    )
}

export default Nav
