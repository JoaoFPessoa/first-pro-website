import {HeaderContainer, LogoCompany, LogoCompanyPRMA, NavBar} from './style'
import Logo1 from '../../img/Logo1.png'
import LogoPRMA from '../../img/LogoPRMA.png'
import React from 'react';
import {  Link, BrowserRouter } from "react-router-dom";

export default function Header() {
    return (
        <BrowserRouter>
        <HeaderContainer>
        <LogoCompany src={Logo1} />
        <LogoCompanyPRMA src={LogoPRMA} />
        <NavBar>
            <Link class="inicio" to='/'>Inicio</Link>
            <Link class="servicos" to='/servicos'>Serviços</Link>
            <Link class="quem-somos" to='/quem-somos'>Quem somos</Link>
            {/* // <Link to='/aplicativo'>Aplicativo</Link> // */}
            <Link class="contato" to='/contato'>Contato</Link>
        </NavBar>
        </ HeaderContainer>
        </BrowserRouter>
    )
}