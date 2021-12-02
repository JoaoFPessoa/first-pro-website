import styled from "styled-components";

export const HeaderContainer = styled.div`
position: absolute;
width: 100%;
height: 80px;
left: 0px;
top: 0px;
background: #191919;
opacity: 0.8;
@media(max-width:768px){
  max-width: 375px;
}
`

export const LogoCompany = styled.img`
position: absolute;
width: 53.54px;
height: 38px;
left: 111px;
top: 29px;
@media (max-width: 768px) {
  left: 20px;
  width: 39.23px;
  height: 28px;
}
  }
`

export const LogoCompanyPRMA = styled.img`
position: absolute;
width: 160.62px;
height: 15.65px;
left: 182.38px;
top: 40.18px;
@media (max-width: 768px){
width: 117.69px;
height: 11.53px;
left: 72.31px;
top: 32.24px;


}
  }
`

export const NavBar = styled.div`
position: absolute;
width: 99px;
height: 26px;
font-size: 16px;
line-height: 26px;
color: #B8B8B8;
@media(max-width: 768px){
  display: none;
}

.inicio{
  position: absolute;
  width: 40px;
  height: 26px;
  left: 860px;
  top: 35px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  text-decoration: none;
  color: #B8B8B8;
}

.servicos{
  position: absolute;
width: 66px;
height: 26px;
left: 932px;
top: 35px;
font-weight: normal;
font-size: 16px;
line-height: 26px;
text-decoration: none;
color: #B8B8B8;}

.quem-somos{
  position: absolute;
width: 110px;
height: 26px;
left: 1030px;
top: 35px;
font-size: 16px;
line-height: 26px;
text-decoration: none;
color: #B8B8B8;
}

.contato{
  position: absolute;
  width: 61px;
  height: 26px;
  left: 1160px;
  top: 35px;
  font-size: 16px;
  line-height: 26px;
  text-decoration: none;
  color: #B8B8B8;
    font-family: 'Inter', sans-serif;
}

`
export const HamburgerContainer = styled.div`
display: none;
@media(max-width: 768px){
  display: inline;
  position: absolute;
  width: 26px;
  height: 12px;
  left: 310px;
  top: 13px;
  color: white;
}
`

export const MobileNavBar = styled.div`
position: absolute;
left: 110px;
top: 120px;
height: 26px;
display: flex;
justify-content: space-around;
flex-flow: column nowrap;
width: 150px;

.mobile-navbar {
  text-decoration: none;
  color: white;
  text-align: center;
  padding: 5px 0 5px 0;
}
`
