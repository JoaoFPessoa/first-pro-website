import {HeaderContainer, LogoCompany, LogoCompanyPRMA, NavBar} from './style'
import Logo1 from '../../img/Logo1.png'
import LogoPRMA from '../../img/LogoPRMA.png'
import React from 'react';
import { BrowserRouter } from "react-router-dom";

export default function Header() {
    return (
        <BrowserRouter>
        <HeaderContainer>
        <LogoCompany src={Logo1} />
        <LogoCompanyPRMA src={LogoPRMA} />
        <NavBar id="inicio">
            <a href='#inicio' class="inicio">Inicio</a>
            <a href='#services' class="servicos">Serviços</a>
            <a href="#aboutUs" class="quem-somos">Quem somos</a>
            {/* <Link to='/aplicativo'>Aplicativo</Link> */}
            <a href="#contact" class="contato">Contato</a>
        </NavBar>
        </ HeaderContainer>
        </BrowserRouter>
    )
    }