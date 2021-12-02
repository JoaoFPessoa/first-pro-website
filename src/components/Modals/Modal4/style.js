import styled from "styled-components";

export const Container = styled.div`
width: 100%;
max-width: 924px;
height: 655px;
background: #191919;
color: white;
box-shadow: 0px 4px 10px rgba(0,0,0,0.4);
margin-right: 125px;
@media(max-width: 768px){
    width: 375px;
    margin-left:60px;
    height: 610px;
}
`

export const Title = styled.div`
width: 500px;
height: 80px;
margin-top: 40px;
font-weight: 500;
font-size: 32px;
line-height: 40px;
font-family: 'DM Sans', sans-serif ;
display:flex;

@media(max-width: 768px){
font-size: 14px;
line-height: 15px;
margin-top: 20px;
}
`
export const IconsContainer = styled.div`
display: flex;
margin-top: 65px;
margin-left: 48px;
@media(max-width: 768px){
    margin-top: 15px;
    margin-left: 10px;
}
`

export const IconName = styled.div`
width: 127px;
height: 26px;
margin-left: 24px;
font-size: 14px;
line-height: 26px;
color: #EBEBEB;
@media(max-width:768px){
    width: 130px;
    margin-right: 30px;
    line-height: 15px;
    font-size: 11px;
}
`


export const Line5 = styled.div`
position: absolute;
width: 1100px;
height: 0px;
left: 120px;
top: 855px;

border: 1px solid #303030;
@media(max-width: 768px){
width: 335px;
height: 0px;
left: 20px;
top: 862px;
}
`
export const Line6 = styled.div`
position: absolute;
width: 1100px;
height: 0px;
left: 120px;
top: 855px;

border: 1px solid #303030;
@media(max-width: 768px){
width: 335px;
height: 0px;
left: 20px;
top: 943px;
}
`
export const Line7 = styled.div`
position: absolute;
width: 1100px;
height: 0px;
left: 120px;
top: 855px;

border: 1px solid #303030;
@media(max-width: 768px){
width: 335px;
height: 0px;
left: 20px;
top: 1030px;
}
`
export const Line8 = styled.div `
@media(max-width:768px){
position: absolute;
width: 335px;
height: 0px;
left: 20px;
top: 1125px;
border: 1px solid #303030;
}
`
export const Line9 = styled.div`
@media(max-width:768px){
position: absolute;
width: 335px;
height: 0px;
left: 20px;
top: 1225px;
border: 1px solid #303030;
}
`