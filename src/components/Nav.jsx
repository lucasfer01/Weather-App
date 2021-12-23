import React from 'react';
import SearchBar from './SearchBar';
import {Link} from 'react-router-dom';
// import about from './About';
import styleNav from '../styles/Nav.module.css';

function Nav({title, src, onSearch}) {
    return (
        <div className={styleNav.navBar}>
                <div className={styleNav.logoContainer}>
                    <Link style={{textDecoration: 'none'}} to='/'>
                        <h1 className={styleNav.title}>{title}</h1>
                    </Link>
                </div>
            <div >
                <SearchBar  onSearch={onSearch} />
            </div>
        </div>
    )
}

export default Nav
