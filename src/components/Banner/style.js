import styled from 'styled-components'

export const Container = styled.div`

position: absolute;
width: 1216px;
height: 247px;
left: 112px;
top: 3250px;
background: #242424;
@media(max-width: 768px){
    top: 4200px;
    left: 0px;
    max-width: 375px;
    height: 214px;
}
`

export const Title = styled.div` 
width: 350px;
height: 80px;
margin-left: 115px;
margin-top: 40px;
font-family: DM Sans;
font-weight: 500;
font-size: 40px;
line-height: 48px;
color: #EBEBEB;

@media(max-width: 768px){
    width: 275px;
    height: 70px;
    margin-left: 20px;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    margin-top: 32px;
}
`
export const ShieldStyle = styled.div`
width: 100px;
height: 100px;
position: absolute;
bottom: 320px;
left: 300px;
`

export const IconContainer = styled.div`
position: absolute;
width: 288px;
height: 184px;
left: 864px;
top: 40px;
display: flex;
flex-wrap: wrap;
@media(max-width: 768px){
    display: none;
}
`
export const Icons = styled.img`
width: 70px;
height: 60px;
margin-right: 15px;
padding: 5px;
background: #191919;
border-radius: 4px;
`
export const Line = styled.div`
position: absolute;
width: 1200px;
height: 2px;
margin-top: 30px;
background: radial-gradient(50% 4499999.95% at 50% 100.05%, #FF8F01 0%, rgba(255, 143, 1, 0) 100%);
transform: matrix(1, 0, 0, -1, 0, 0);

@media(max-width: 768px){
width: 375px;
height: 2px;
left: 0px;
bottom: 0px;
}
`

export const Shield = styled.img`
position: absolute;
width: 230px;
height: 205px;
margin-left: 500px;
bottom: 30px;
@media(max-width: 768px){
    position: relative;

    bottom: 180px;
    right: 260px;
}
`