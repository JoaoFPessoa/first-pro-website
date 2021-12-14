import styled from "styled-components";

export const HomeContainer = styled.div`
position: relative;
width: 100vw;
height: 100vh;
background: #191919;
display: flex;
flex-direction: column;
align-items: center;
overflow-x: hidden;
@media (min-width: 768px) and (max-width: 1280px){
  left: -120px;
  overflow-x: hidden;
  width: 109vw;
}

@media (min-device-width: 768px) and (max-device-width: 1024px){
  overflow-x: visible;
}

@media(max-width: 768px){
  margin-left: 0;
}
`

export const Title = styled.div`
color: white;
position: relative;
width: 474px;
height: 180px;
padding-bottom: 32px;
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
    margin: auto;
    height: auto;

  }
`
export const Subtitle = styled.div`
position: relative;
width: 450px;
height: 64px;
font-family: 'Inter', sans-serif;
font-size: 18px;
line-height: 32px;
color: #B8B8B8;
padding-bottom: 42px;
@media(max-width: 768px) {
    width: 295px;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    margin: auto;
    height: auto;
    padding-bottom: 0px;
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
position: absolute;
width: 1600px;
height: 600px;
@media(max-width: 768px){
  display: none;
}
`

export const GlobalContainer = styled.div`
width: 65vw;
@media(max-width: 768px) {
  width: 100vw;
}
`
export const MainModalContainer = styled.div`
@media(max-width: 768px){
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  margin-right: 25px;
}
`