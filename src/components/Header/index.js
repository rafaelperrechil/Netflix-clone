import React from 'react';
import './Header.css';

const Header = ({black}) =>{

    return(
        <header className={black ? 'black' : ''}>
            <div className="logo">
                <a href="#">
                    <img src={process.env.PUBLIC_URL + '/logo.png'} />
                </a>
                <nav>
                    <ul>
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Séries</a></li>
                        <li><a href="#">Filmes</a></li>
                        <li><a href="#">Bombando</a></li>
                        <li><a href="#">Minha Lista</a></li>
                    </ul>
                </nav>

            </div>
            <div className="avatar">
                <a href="#">
                    <img src={process.env.PUBLIC_URL + '/avatar.png'} />
                </a>
            </div>
        </header>
    );
}

export default Header;