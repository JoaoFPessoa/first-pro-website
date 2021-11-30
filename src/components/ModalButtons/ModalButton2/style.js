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
top: 759px;
background: #242424;
border-radius: 4px;
@media(max-width: 768px){
    width: 64px;
    height: 64px;
    left: 20px;
    top: 871px;
`
export const Text = styled.div`
position: absolute;
width: 151px;
height: 60px;
left: 570px;
top: 753px;
@media(max-width: 768px){
    width: 154px;
    height: 48px;
    left: 104px;
    top: 871px;
    font-size: 14px;
    line-height: 24px;
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