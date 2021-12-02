import styled from "styled-components";
import Map from '../../img/default_map_Traced.png'

export const HomeContainer = styled.div`
width: 1440px;
height: 634px;
background: #191919;
left: 0;
top: 0;
position: absolute;

@media(max-width: 760px){
    width: 450px;
}
`

export const Title = styled.div`
position: absolute;
color: white;
width: 464px;
height: 180px;
left: 111px;
top: 12.938rem;
font-weight: 500;
font-size: 56px;
line-height: 60px;
flex: 1;
`
export const Subtitle = styled.div`
position: absolute;
width: 417px;
height: 64px;
left: 111px;
top: 419;
font-size: 18px;
line-height: 32px;
color: #B8B8B8;
flex: 1;
`

export const ShieldStyle = styled.img`
position: absolute;
width: 717.92px;
height: 600.96px;
left: 597px;
top: 78px;
@media(max-width: 768px) {
top: 470px;
left: 0px;
width: 375px;
height: 350.96px;
background-image: url(${Map});  
`
export const Background = styled.img`
position: absolute;
width: 1680px;
height: 634px;
left: 222px;
top: 0px;
opacity: 0.06;
border: 1px solid white;
z-index: 100
`