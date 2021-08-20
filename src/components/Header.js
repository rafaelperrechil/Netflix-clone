import React from 'react';
import './Header.css';

const Header = ({black}) =>{

    return(
        <header className={black ? 'black' : ''}>
            <div className="logo">
                <a href="#">
                    <img src={process.env.PUBLIC_URL + '/logo.png'} />
                </a>
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