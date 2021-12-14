import styled from "styled-components";
import Map from '../../img/default_map_Traced.png'

export const HomeContainer = styled.div`
width: 1440px;
height: 634px;
background: #191919;
left: 0;
top: 0;

@media(max-width: 760px){
    width: 450px;
}
`

export const Title = styled.div`
position: relative;
color: white;
width: 464px;
height: 180px;
font-weight: 500;
font-size: 56px;
line-height: 60px;
flex: 1;
`
export const Subtitle = styled.div`
position: relative;
width: 417px;
height: 64px;
font-size: 18px;
line-height: 32px;
color: #B8B8B8;
flex: 1;
`

export const ShieldStyle = styled.img`
position: relative;
width: 650.92px;
height: 600.96px;
@media(max-width: 768px) {
top: 470px;
left: 0px;
width: 375px;
height: 350.96px;
background-image: url(${Map});  
`
export const Background = styled.img`
position: relative;
width: 1680px;
height: 634px;
opacity: 0.06;
z-index: 100
`

export const HeaderContent = styled.div`
display: flex;
align-self: stretch;
margin-top: 40px;
justify-content: space-between;
`

export const TextsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`