import React from 'react';
import './Footer.css';

const Footer = () =>{
    return (
        <footer>
            <div>
                <ul>
                    <li><a href="#">Idioma e legendas</a></li>
                    <li><a href="#">Imprensa</a></li>
                    <li><a href="#">Privacidade</a></li>
                    <li><a href="#">Entre em contato</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><a href="#">Audiodescrição</a></li>
                    <li><a href="#">Relações com investidores</a></li>
                    <li><a href="#">Avisos legais</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><a href="#">Centro de ajuda</a></li>
                    <li><a href="#">Carreiras</a></li>
                    <li><a href="#">Prefêrencias de cookie</a></li>
                </ul>  
            </div>
            <div>
                <ul>
                    <li><a href="#">Cartão pré-pago</a></li>
                    <li><a href="#">Termos de uso</a></li>
                    <li><a href="#">Informações corporativas</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;