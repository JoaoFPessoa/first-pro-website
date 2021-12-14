import {HamburgerContainer, HeaderContainer, LogoCompany, LogoCompanyPRMA, LogoContainer, MobileNavBar, NavBar} from './style'
import Logo1 from '../../img/Logo1.png'
import LogoPRMA from '../../img/LogoPRMA.png'
import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import Hamburger from 'hamburger-react';

export default function Header() {
    const [open, setOpen] = useState(false)
    return (
        <HeaderContainer>
        <LogoContainer>
        <LogoCompany src={Logo1} />
        <LogoCompanyPRMA src={LogoPRMA} />
        </LogoContainer>
        <NavBar id="inicio">
            <a href='#inicio' class="inicio">Inicio</a>
            <a href='#services' class="servicos">Serviços</a>
            <a href="#aboutUs" class="quem-somos">Quem somos</a>
            {/* <Link to='/aplicativo'>Aplicativo</Link> */}
            <a href="#contact" class="contato">Contato</a>
        </NavBar>
        <HamburgerContainer>
        <Hamburger direction="right" size={30} toggled={open} toggle={setOpen} >
        </Hamburger>
        </HamburgerContainer>
        {open && 
        (<MobileNavBar>
        <a href="#inicio" class="mobile-navbar">Inicio</a>
        <a href='#services' class="mobile-navbar">Serviços</a>
        <a href="#aboutUs" class="mobile-navbar">Quem somos</a>
        {/* <Link to='/aplicativo'>Aplicativo</Link> */}
        <a href="#contact"  class="mobile-navbar">Contato</a> 
        </MobileNavBar>
        )}
        </ HeaderContainer>
    )
    }