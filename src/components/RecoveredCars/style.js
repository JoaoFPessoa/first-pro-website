import styled from 'styled-components'

export const Container = styled.div`
position: absolute;
width: 1216px;
height: 500px;
left: 112px;
top: 2300px;
@media(max-width: 768px){
    position: absolute;
    left: 20px;
    width: 375px;
}
`

export const CarIcon = styled.img `
position: absolute;
width: 40px;
height: 40px;
background: #242424;
border-radius: 4px;
padding: 15px;

@media(max-width: 768px){
    top: 730px;
    padding: 8px;
}
`
export const Subtitle = styled.div`
position: absolute;
width: 200px;
height: 26px;
left: 130px;
top: 1px;
font-family: Inter;
font-weight: normal;
font-size: 16px;
line-height: 26px;
color: #B8B8B8;

@media(max-width: 768px){
    top: 840px;
    left: 0px;
    font-size: 14px;
    line-height: 24px;
}
`
export const Title = styled.div`
position: absolute;
width: 400px;
height: 48px;
left: 128px;
top: 30px;
font-family: DM Sans;
font-weight: 500;
font-size: 40px;
line-height: 48px;
color: #EBEBEB;
@media(max-width: 768px){
    width: 375px;
    top: 805px;
    font-size: 30px;
    line-height: 35px;
    left: 0px;
}
`

export const LeftArrow = styled.img`
cursor: pointer;
left: 1030px;
top: 32px;
position: absolute;
width: 48px;
height: 48px;
background: #242424;
border-radius: 4px;
@media(max-width: 768px){
    display: none;
}

`

export const RightArrow = styled.img`
cursor: pointer;
left: 1090px;
top: 32px;
position: absolute;
width: 48px;
height: 48px;
background: #242424;
border-radius: 4px;
@media(max-width: 768px){
    display: none;
}
`
export const Overflow = styled.div`

@media(max-width: 768px){
    overflow-x: auto;
    margin-top: 720px;
    width: 100vw;
}
`

export const CardContainer = styled.div`
width: 1216px;
height: 250px;
margin-top: 154px;
display: flex;
@media(max-width: 768px){
`
export const Card = styled.img`
width: 280px;
height: 280px;
top: 144px;
padding-right: 32px;

@media(max-width: 768px){
    top: 500px;
    width: 400px;
}
`
export const LocationContainer = styled.div`
display: flex;
margin-top: 50px;
width: 1300px;
@media(max-width:768px){
    position: relative;
    margin-top: 40px;
    width: 1300px;
}
`
export const Location = styled.div`
width: 280px;
height: 0px;
color: #EBEBEB;
margin-right: 33px;
@media(max-width: 768px){
    width: 280px;
    font-size: 13px;
    height: 0px;
}
`

export const Date = styled.div`
width: 280px;
margin-right: 33px;
height: 26px;
font-family: Inter;
font-weight: normal;
font-size: 16px;
line-height: 26px;
color: #EBEBEB;
@media(max-width: 768px){
    font-size: 12px;
    margin-right: 13px;
    width: 300px;
}
`
export const DateContainer = styled.div`
display: flex;
padding-top: 30px;
margin-top: 20px;
position: absolute;
@media(max-width: 768px){
position: relative;
margin-top: 0;
width: 1800px;
}
`