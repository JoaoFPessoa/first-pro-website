import styled from "styled-components";

export const Overlay = styled.div`
background: rgba(0, 0, 0, 0.6);
position: absolute;
width: 100%;
height: 100rem;
left: 0;
top: 0;
display: flex;
align-items: center;
justify-content: center;
z-index: 20;
`

export const Container = styled.div`
width: 100%;
max-width: 924px;
height: 655px;
background: #191919;
color: white;
box-shadow: 0px 4px 10px rgba(0,0,0,0.4);
margin-right: 125px;
@media(max-width: 768px){
    width: 375px;
    margin-left:60px;
    height: 470px;
}
`

export const IconStyle = styled.img`
width: 104px;
height: 104px;
margin-left: 48px;
padding-right: 32px;
`

export const Title = styled.div`
width: 550px;
height: 80px;
margin-top: 40px;


font-weight: 500;
font-size: 32px;
line-height: 40px;

color: #EBEBEB;
display:flex;`


export const SubtitleContainer = styled.div`
display: flex;
width: 604px;
height: 52px;
margin-top: 60px;
margin-left: 48px;
font-size: 16px;
line-height: 26px;
color: #B8B8B8;

@media(max-width: 768px){
    display: none;
}
`

export const IconsContainer = styled.div`
display: flex;
margin-top: 130px;
margin-left: 48px;
@media(max-width: 768px){
    margin-top: 30px;
    margin-left: 10px;
}
`

export const MiniIconStyle = styled.img`
width: 56px;
height: 56px;
background: #242424;
border-radius: 4px;
`
export const IconName = styled.div`
width: 127px;
height: 26px;
margin-left: 24px;
font-size: 14px;
line-height: 26px;
/* white */
color: #EBEBEB;
@media(max-width:768px){
    margin-right: 30px;
    line-height: 15px;
    font-size: 11px;
}
`


export const Teste = styled.div`
display: flex;
height: 335px;
width: 100%;
flex-wrap: wrap;
`