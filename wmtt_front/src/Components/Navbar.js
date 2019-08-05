import React from 'react';
import './styles/Navbar.css';
import LogoNav from '../img/iconok.png'




const Navbar = props => (
    <header className='Navbar1'>
        <nav className='Navbar_navigation'>
            <div className='Navbar_logo'>
                <a href='#inicio'><img src={LogoNav} className='NavLogo'></img>
                </a>
            </div>
            <div className='spacer'></div>
            <div className='Navbar_items'>
                <ul>
                    <li><a href='#inicio'>Inicio</a></li>
                    <li><a href='#artistas'>Artistas</a></li>
                    <li><a href='#categorias'>Categorias</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Navbar;