import styled from "styled-components";

export const HomeContainer = styled.div`
position: relative;
width: 99vw;
height: 100vh;
left: 0px;
top: 0px;
background: #191919;
overflow-x: hidden;

@media(max-width: 768px){
  max-width: 375px;
}
`

export const Title = styled.div`
color: white;
position: absolute;
width: 474px;
height: 180px;
left: 111px;
top: 12.938rem;
font-weight: 500;
font-size: 56px;
line-height: 60px;
font-family: 'DM Sans', sans-serif;
  
    @media(max-width: 768px) {
    width: 309px;
    font-weight: 500;
font-size: 30px;
line-height: 35px;
text-align: center;
left: 33px;

  }
`
export const Subtitle = styled.div`
position: absolute;
width: 450px;
height: 64px;
left: 111px;
top: 450px;
font-family: 'Inter', sans-serif;
font-size: 18px;
line-height: 32px;
color: #B8B8B8;
@media(max-width: 768px) {
    width: 295px;
    height: 48px;
    top: 350px;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    left: 33px;
})
`

export const ShieldStyle = styled.div`
position: absolute;
width: 317.92px;
height: 152.96px;
left: 597px;
top: 58px;
`

export const Background = styled.img`
width: 1600px;
height: 600px;
z-index: 20;
@media(max-width: 768px){
  display: none;
}
`