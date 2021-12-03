import styled from 'styled-components'

export const Line4 = styled.div`
position: absolute;
width: 229px;
height: 0px;
left: 700px;
top: 850px;

border: 1px solid #303030;
transform: rotate(90deg);

@media(max-width: 768px){ 
    display: none;
}
`

export const CarStyle = styled.img`

position: absolute;
width: 48px;
height: 48px;
left: 500px;
top: 749px;
background: #242424;
border-radius: 4px;
padding: 10px;
@media(max-width: 768px){
    padding: 8px;
    left: 20px;
    top: 871px;
`
export const Text = styled.div`
position: absolute;
width: 151px;
height: 60px;
left: 580px;
top: 753px;
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
text-align: left;
@media(max-width: 768px){
    width: 154px;
    height: 48px;
    left: 104px;
    top: 871px;
    font-size: 14px;
    line-height: 24px;
    text-align: left;
}`

export const SetaStyle = styled.img`
position: absolute;
left: 750px;
right: 14.58%;
top: 777px;
bottom: -25%;
padding: 9px;
width: 6px;
height: 12px;
@media(max-width: 768px) {
    left: 349px;
    top: 901px;
}
`
export const Close2 = styled.img`
width: 50px;
height: 50px;
position: absolute;
top: 550px;
right: 400px;
cursor: pointer;

@media(max-width: 768px){
    width: 30px;
    height: 30px;
    top: 530px;
    right: 120px;
}`