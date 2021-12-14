import styled from 'styled-components'

export const Container = styled.div`

position: relative;
width: 100%;
background: #242424;
display: flex;
justify-content: space-between;
margin-top: 200px;
min-width: 1000px;

@media(max-width: 768px){
    position: relative;
    margin-top: 100px;
}
`

export const Title = styled.div` 
width: 350px;
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
    margin-left: 23px;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    margin-top: 32px;
}
`
export const ShieldStyle = styled.div`
width: 100px;
height: 100px;
position: relative;
bottom: 320px;
left: 300px;
`

export const IconContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
margin-top: 56px;
@media(max-width: 768px){
    display: none;
}
`
export const UpperContainer = styled.div`
position: relative;
display: flex;
`
export const DownerContainer = styled.div`
position: relative;
display: flex;
`


export const Icons = styled.img`
width: 50px;
height: 40px;
margin: 10px;
padding: 10px;
background: #191919;
border-radius: 4px;

`
export const Line = styled.div`
position: relative;
height: 2px;
margin-top: 30px;
background: radial-gradient(50% 4499999.95% at 50% 100.05%, #FF8F01 0%, rgba(255, 143, 1, 0) 100%);
transform: matrix(1, 0, 0, -1, 0, 0);

@media(max-width: 768px){
position: absolute;
width: 100%;
height: 2px;
left: 0px;
bottom: 0px;
}
`

export const Shield = styled.img`
position: relative;
height: 205px;
margin-top: 53px;
@media(max-width: 768px){
    position: relative;
    margin: auto;
    right: 300px;
}
`

export const LeftContainer = styled.div`
display: flex;
flex-direction: column;
`