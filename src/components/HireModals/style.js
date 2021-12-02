import styled from 'styled-components'

export const Overlay = styled.div`
background: rgba(0, 0, 0, 0.8);
position: absolute;
width: 100%;
height: 700px;
display: flex;
align-items: center;
justify-content: center;
bottom: 0px;
z-index: 20;
top: 10px;
`

export const Container = styled.div`
position: absolute;
width: 792px;
height: 336px;
display: flex;
left: 350px;
bottom: 200px;

@media(max-width: 768px){
    display: block;
    left: 20px;
    width: 375px;
    bottom: 280px;
}

`
export const BoxOne = styled.div`
width: 375px;
height: 336px;
background: #191919;
border-radius: 4px;
cursor: pointer;
@media(max-width: 768px){
    width: 250px;
    height: 280px;
}
`

export const BoxTwo = styled.div`
width: 375px;
height: 336px;
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
    position: absolute;
    width: 35px;
    height: 35px;
    left: 270px;
    bottom: 300px;
}
`