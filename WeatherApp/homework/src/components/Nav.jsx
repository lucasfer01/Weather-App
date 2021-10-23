import React from 'react';
import SearchBar from './SearchBar';
import {Link} from 'react-router-dom';
// import about from './About';

function Nav({title, src, onSearch}) {
    return (
        <div style={{margin: 'auto', display:'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%', height: '5em', backgroundColor: '#023e8a', boxShadow: '0 0 6px rgba(0,0,0,0.5)'}}>
            <Link to='/'>
                <img style={{width: '40px', height: '40px'}} src={src} alt="" />
                <h2>{title}</h2>
            </Link>
            <Link to='/about'>
                <span>About</span>
            </Link>
            <SearchBar  onSearch={onSearch} />
        </div>
    )
}

export default Nav
