import styled from 'styled-components'

export const Container = styled.div`

position: absolute;
width: 1216px;
height: 247px;
left: 112px;
top: 2850px;
@media(max-width: 768px){
    top: 3600px;
    left: 0;
    width: 375px;
}
`

export const Depoimentos = styled.div`
position: absolute;
width: 101px;
height: 26px;
font-family: Inter;
font-weight: normal;
font-size: 16px;
line-height: 26px;
/* gray1 */
color: #B8B8B8;

@media(max-width: 768px){
    left: 20px;
    font-size: 14px;
    line-height: 14px;
    width: 88px;
    height: 14px;
}
`
export const Title = styled.div`
position: absolute;
width: 417px;
height: 50px;
top: 50px;
font-family: 'DM Sans';
font-weight: 500;
font-size: 30px;
line-height: 48px;
color: #EBEBEB;

@media(max-width: 768px){
    font-size: 30px;
    line-height: 35px;
    width: 343px;
    height: 70px;
    left: 20px;
}
`
export const Arrow = styled.img`
cursor: pointer;
top: 194px;
position: absolute;
width: 48px;
height: 48px;
left: 0;
/* black2 */
background: #242424;
border-radius: 4px;
@media(max-width: 768px){
    display: none;
}
`

export const ArrowTwo = styled.img`
cursor: pointer;
top: 194px;
left: 56px;
position: absolute;
width: 48px;
height: 48px;
background: #242424;
border-radius: 4px;
@media(max-width: 768px){
    display: none;
}
`

export const ContainerTwo = styled.div`
width: 488px;
height: 234px;
margin-left: 728px;
top: 3186px;

@media(max-width: 768px){
    margin-top: 150px;
    margin-left: 20px;
    width: 375px;
}
`

export const Aspas = styled.img`
width: 40px;
height: 36px;
@media(max-width: 768px){
    left: 0px;
}
`

export const Text = styled.div`
font-family: Inter;
font-size: 15px;
line-height: 26px;
color: #EBEBEB;
width: 488px;
height: 78px;
padding-top: 30px;

@media(max-width: 768px){
    width: 331px;
    height: 96px;  
    font-size: 14px;
    line-height: 24px;
}
`
export const ClientPicture = styled.img`

width: 56px;
height: 56px;
border-radius: 4px;
margin-top: 10px;
@media(max-width: 768px){
    margin-top: 20px;
}
`
export const ClientName = styled.div`
position: absolute;
width: 256px;
height: 20px;
left: 800px;
top: 160px;
font-family: DM Sans;
font-weight: 500;
font-size: 20px;
line-height: 20px;
color: #EBEBEB;

@media(max-width: 768px){
    left: 100px;
    width: 226px;
    height: 20px;
    font-size: 20px;
    line-height: 20px;
    top: 340px;
}
`

export const Divisor = styled.img`
position: absolute;
width: 25px;
height: 247px;
left: 550px;
@media(max-width: 768px){
    display: none;
}
`