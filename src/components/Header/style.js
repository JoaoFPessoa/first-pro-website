import styled from "styled-components";

export const HeaderContainer = styled.div`
position: relative;
background: #191919;
opacity: 0.8;
display: flex;
justify-content: space-between;
align-self: stretch;
align-items: center;
height: 100px;
@media(max-width:768px){
  width: 100%;
}
`
export const LogoContainer = styled.div`
display: flex;
align-items: center;
`

export const LogoCompany = styled.img`
position: relative;
width: 53.54px;
height: 38px;
margin-right: 17.5px;
@media (max-width: 768px) {
  width: 39.23px;
  height: 28px;
  margin-right: 0;
  margin-left: 20px;
}
  }
`

export const LogoCompanyPRMA = styled.img`
position: relative;
width: 160.62px;
height: 15.65px;
@media (max-width: 768px){
width: 117.69px;
height: 11.53px;
margin-left: 13px;


}
  }
`

export const NavBar = styled.div`
display: flex;
position: relative;
font-size: 16px;
line-height: 26px;
color: #B8B8B8;
margin-left: auto;
@media(max-width: 768px){
  display: none;
}

.inicio{
  position: relative;
  width: 40px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  text-decoration: none;
  color: #B8B8B8;
}

.servicos{
  position: relative;
width: 66px;
font-weight: normal;
font-size: 16px;
line-height: 26px;
text-decoration: none;
color: #B8B8B8;
margin-left: 32px;
}

.quem-somos{
  position: relative;
width: 110px;
font-size: 16px;
line-height: 26px;
text-decoration: none;
color: #B8B8B8;
margin-left: 32px;
}

.contato{
  position: relative;
  width: 61px;
  font-size: 16px;
  line-height: 26px;
  text-decoration: none;
  color: #B8B8B8;
  margin-left: 32px;
    font-family: 'Inter', sans-serif;
}

`
export const HamburgerContainer = styled.div`
display: none;
@media(max-width: 768px){
  display: block;
  color: white;
}
`

export const MobileNavBar = styled.div`
position: absolute;
top: 120px;
display: flex;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
text-align: center;
justify-content: space-around;
flex-flow: column nowrap;

.mobile-navbar {
  text-decoration: none;
  color: white;
  text-align: center;
  padding: 5px 0 5px 0;
}
`
export const MobileContainer = styled.div`
@media(max-width: 768px){
display: flex;
justify-content: space-between;
}
`