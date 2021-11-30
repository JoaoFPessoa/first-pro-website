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
    width: 500px;
    height: 214px;
}
`

export const Title = styled.div` 
width: 400px;
height: 80px;
margin-left: 64px;
margin-top: 56px;
font-weight: 500;
font-size: 40px;
line-height: 48px;
color: #EBEBEB;
text-align: center;

@media(max-width: 768px){
    width: 275px;
    height: 70px;
    left: 23px;
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
width: 80px;
height: 70px;
margin-right: 10px;
/* black1 */
background: #191919;
border-radius: 4px;
`
export const Line = styled.div`
position: absolute;
width: 1200px;
height: 2px;
margin-top: 15px;
background: radial-gradient(50% 4499999.95% at 50% 100.05%, #FF8F01 0%, rgba(255, 143, 1, 0) 100%);
transform: matrix(1, 0, 0, -1, 0, 0);

@media(max-width: 768px){
    width: 375px;
height: 2px;
left: 0px;
margin-top: 30px;
}
`