import styled from 'styled-components'

export const Container = styled.div`
position: relative;
margin-top: 200px;
display: flex;
justify-content: space-between;

@media(max-width: 768px){
    position: absolute;
    display: block;
    margin-top: 0px;
    top: 3600px;
    left: 0;
    width: 375px;
    height: 247px;
}
`

export const Depoimentos = styled.div`
position: relative;
width: 101px;
height: 26px;
font-family: Inter;
font-weight: normal;
font-size: 16px;
line-height: 26px;
/* gray1 */
color: #B8B8B8;

@media(max-width: 768px){
    position: absolute;
    left: 20px;
    font-size: 14px;
    line-height: 14px;
    width: 88px;
    height: 14px;
}
`
export const Title = styled.div`
position: relative;
width: 417px;
font-family: 'DM Sans';
font-weight: 500;
font-size: 40px;
line-height: 48px;
color: #EBEBEB;
margin-top: 24px;

@media(max-width: 768px){
    position: absolute;
    font-size: 30px;
    line-height: 35px;
    width: 343px;
    height: 70px;
    left: 20px;  
    top: 50px;
    margin-top: 0px;
}
`
export const Arrow = styled.img`
cursor: pointer;
position: relative;
width: 48px;
height: 48px;
margin-top: 48px;
margin-right: 8px;
background: #242424;
border-radius: 4px;
@media(max-width: 768px){
    display: none;
}
`

export const ArrowTwo = styled.img`
cursor: pointer;
position: relative;
width: 48px;
height: 48px;
margin-top: 48px;
background: #242424;
border-radius: 4px;
@media(max-width: 768px){
    display: none;
}
`

export const ContainerTwo = styled.div`
width: 488px;
height: 234px;

@media(max-width: 768px){
    margin-top: 150px;
    margin-left: 20px;
    width: 375px;
    top: 3186px;
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
font-size: 16px;
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
margin-right: 24px;
@media(max-width: 768px){
    margin-top: 20px;
    margin-right: 0px;
}
`
export const ClientName = styled.div`
position: relative;
width: 256px;
font-family: DM Sans;
font-weight: 500;
font-size: 20px;
line-height: 20px;
color: #EBEBEB;
margin-top: 15px;

@media(max-width: 768px){
    position: absolute;
    left: 100px;
    width: 226px;
    height: 20px;
    font-size: 20px;
    line-height: 20px;
    top: 340px;
}
`

export const Divisor = styled.img`
position: relative;
width: 25px;
height: 247px;
margin-right: clamp(70px, 90px, 400px);
@media(max-width: 768px){
    display: none;
}
`
export const LeftContainer = styled.div`
`
export const ClientContainer = styled.div`
display: flex;
margin-top: 24px;
`