import styled from 'styled-components'

export const Overlay = styled.div`
background: rgba(0, 0, 0, 0.8);
position: absolute;
height: 100rem;
width: 100%;
left: 0;
top: 0;
display: flex;
align-items: center;
justify-content: center;
z-index: 20;
`

export const Container = styled.div`
position: relative;
display: flex;
margin-top: -500px;

@media(max-width: 768px){
    display: block;
    left: 20px;
    width: 375px;
    bottom: 280px;
    margin-top: 0;
}

`
export const BoxOne = styled.div`
background: #191919;
border-radius: 4px;
cursor: pointer;
@media(max-width: 768px){
    width: 250px;
    height: 280px;
    margin-bottom: 10px;
}
`

export const BoxTwo = styled.div`
background: #191919;
border-radius: 4px;
margin-left: 32px;
cursor: pointer;    
@media(max-width: 768px){
    width: 250px;
    height: 300px;
    margin-left: 0px;
}
`
export const ImageOne = styled.img`
width: 345px;
height: 220px;
@media(max-width: 768px){
    position: absolute;
    width: 250px;
    top: -33px;
}
`
export const ImageTwo = styled.img`
width: 375px;
height: 220px;
@media(max-width: 768px){
    width: 248px;
    top: -33px;
}
`
export const TitleOne = styled.div`
font-weight: 500;
font-size: 24px;
line-height: 34px;
color: #EBEBEB;
width: 250px;
height: 68px;
margin-left: 32px;
margin-top: 20px;
margin-bottom: 20px;
@media(max-width: 768px){
    position: absolute;
    top: 150px;
    font-size: 12px;
    left: -20px;
    width: 150px;
}
`
export const TitleTwo = styled.div`
font-weight: 500;
font-size: 24px;
line-height: 34px;
color: #EBEBEB;
width: 250px;
height: 68px;
margin-left: 32px;
margin-top: 24px;
@media(max-width: 768px){
    margin-top: -30px;
    font-size: 12px;
    width: 150px;
    margin-left: 10px;
}
`
export const SetaOne = styled.img`
position: absolute;
left: 300px;
width: 6px;
height: 12px;
bottom: 40px;

@media(max-width:768px){
position: absolute;
width: 6px;
height: 12px;
margin-left: 200px;
bottom: 120px;
}
`
export const SetaTwo = styled.img`
position: absolute;
width: 6px;
height: 12px;
margin-left: 720px;
bottom: 40px;
@media(max-width:768px){
    position: absolute;
    width: 6px;
    height: 12px;
    margin-left: 200px;
    top: 500px;
    }
`
export const Close = styled.img`
width: 50px;
height: 50px;
cursor: pointer;
@media(max-width:768px){
    position: relative;
    width: 35px;
    height: 35px;
    bottom: 600px;
    left: 250px;
}
`