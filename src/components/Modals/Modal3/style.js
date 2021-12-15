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
height: 504px;
/* black1 */
background: #191919;
color: white;
box-shadow: 0px 4px 10px rgba(0,0,0,0.4);
margin-right: 125px;
@media(max-width: 768px){
    width: 295px;
    margin-left:33%;
    height: 550px;
}
`

export const IconStyle = styled.img`
width: 104px;
height: 104px;
top: 48px;
margin-left: 48px;
padding-right: 32px;
`

export const Title = styled.div`
width: 100%;
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
    width: 100%;
    }
`


export const SubtitleContainer = styled.div`
display: flex;
max-width: 660px;
height: 78px;
margin-top: 70px;
margin-left: 48px;
font-size: 16px;
line-height: 26px;
color: #EBEBEB;`

export const IconsContainer = styled.div`
display: flex;
margin-top: 90px;
margin-left: 48px;
@media(max-width: 768px){
    margin-top: 60px;
    margin-left: 10px;
}
`

export const MiniIconStyle = styled.img`
width: 56px;
height: 56px;

/* black2 */
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
`


export const Teste = styled.div`
display: flex;
height: 335px;
width: 100%;
flex-wrap: wrap;
`