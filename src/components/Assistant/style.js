import styled from 'styled-components'

export const Container = styled.div`
position: absolute;
width: 1216px;
height: 380px;
left: 112px;
top: 1806px;
@media(max-width: 768px){
    left: 0;
    width: 500px;
}
`

export const CardIcon = styled.img`
position: absolute;
width: 80px;
height: 80px;
left: 568px;
top: 56px;
background: black;
z-index: 20;
@media(max-width:768px){
    width: 64px;
    height: 64px;
    left: 267px;
    top: 670px;

`
export const AssistantImage = styled.img`
position: absolute;
width: 608px;
height: 380px;
border-radius: 4px;
@media(max-width:768px){
    width: 335px;
    height: 210px;
    top: 700px;
    left: 20px;
`

export const Info = styled.div`
position: absolute;
width: 520px;
height: 284px;
left: 808px;
top: 1850px;
@media(max-width:768px){
    left: 0;
}
`

export const Title = styled.div`
position: absolute;
width: 355px;
height: 96px;

font-weight: 500;
font-size: 40px;
line-height: 48px;
color: #EBEBEB;

@media(max-width:768px){
    top: 900px;
    left: 20px;
    font-size: 30px;
    line-height: 35px;
    width: 300px;
    height: 70px;
    `

export const Subtitle = styled.div`
position: absolute;
width: 520px;
height: 52px;
top: 128px;
margin-top: 32px;
font-weight: normal;
font-size: 16px;
line-height: 26px;
color: #B8B8B8;
@media(max-width:768px){
    top: 960px;
    left: 20px;
    font-size: 14px;
    line-height: 24px;
    width: 350px;
    height: 70px;
`

export const Button = styled.button`
cursor: pointer;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 19px 32px;
position: absolute;
width: 272px;
height: 56px;
top: 228px;
margin-top: 30px;
background: #FF8F01;
border-radius: 4px;
border: black;

@media(max-width:768px){
    top: 1050px;
    left: 20px;
    width: 230px;
    height: 48px;
    font-size: 14px;
    line-height: 14px;
`