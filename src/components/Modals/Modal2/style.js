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
height: 535px;
/* black1 */
background: #191919;
color: white;
box-shadow: 0px 4px 10px rgba(0,0,0,0.4);
margin-right: 125px;
@media(max-width: 768px){
    max-width: 295px;
    margin-left:20px;
    height: 550px;
}
`

export const IconStyle = styled.img`
width: 84px;
height: 84px;
top: 28px;
padding: 10px 6px 6px 10px;
background: #242424;
margin: 0 30px 0 48px;
border-radius: 4px;

@media(max-width: 768px){
width: 30px;
height: 30px;
margin-left:5px;
}
`

export const ModalTitle = styled.div`
width: 500px;
height: 80px;
margin-top: 40px;
font-weight: 500;
font-size: 32px;
line-height: 40px;
color: #EBEBEB;
display:flex;
@media(max-width: 768px){
    font-size: 14px;
    line-height: 15px;
    margin-top: 20px;
    width: 190px;
    }
`


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
    width: 250px;
    height: 96px;
    font-size: 11px;
    line-height: 15px;
    margin-left: 10px;
    margin-top: 0;
}
`

export const IconsContainer = styled.div`
display: flex;
margin-top: 130px;
margin-left: 48px;
@media(max-width: 768px){
    margin-top: 60px;
    margin-left: 10px;
}
`

export const MiniIconStyle = styled.img`
width: 56px;
height: 56px;
background: #242424;
border-radius: 4px;
padding: 10px;
`
export const IconName = styled.div`
width: 127px;
height: 26px;
margin-left: 24px;
font-size: 16px;
line-height: 26px;
/* white */
color: #EBEBEB;
`


export const Teste = styled.div`
display: flex;
height: 335px;
width: 100%;
flex-wrap: wrap;
`