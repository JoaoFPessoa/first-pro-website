import styled from 'styled-components'

export const Container = styled.div`
position: absolute;
width: 1216px;
height: 500px;
left: 112px;
top: 2300px;
@media(max-width: 768px){
    dispĺay: none;
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
    top: 820px;
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
top: 31px;
font-family: DM Sans;
font-weight: 500;
font-size: 40px;
line-height: 48px;
color: #EBEBEB;

@media(max-width: 768px){
    width: 375px;
    top: 845px;
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
/* black2 */
background: #242424;
border-radius: 4px;
@media(max-width: 768px){
    display: none;
}
`
export const CardContainer = styled.div`
width: 1216px;
height: 280px;
margin-top: 144px;
display: flex;
@media(max-width: 768px){
    margin-top: 910px;
    max-width: 375px;
    overflow-x: auto;
}
`
export const Card = styled.img`
width: 280px;
height: 280px;
top: 144px;
padding-right: 32px;

@media(max-width: 768px){
    top: 500px;
    width: 200px;
}
`
export const Location = styled.div`
width: 312px;
height: 26px;
color: #EBEBEB;


@media(max-width: 768px){
    display: none;
    width: 0;
}
`
export const LocationContainer = styled.div`
display: flex;
position: absolute;
margin-top: 20px;
`
export const Date = styled.div`
width: 312px;
height: 26px;
font-family: Inter;
font-weight: normal;
font-size: 16px;
line-height: 26px;
color: #EBEBEB;

@media(max-width: 768px){
    display: none;
    width: 0;
}
`
export const DateContainer = styled.div`
display: flex;
position: absolute;
padding-top: 30px;
margin-top: 20px;
`