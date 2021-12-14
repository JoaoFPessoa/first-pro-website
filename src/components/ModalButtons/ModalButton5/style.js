import styled from 'styled-components'


export const Text = styled.div`
position: relative;
height: 60px;
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
text-align: left;
margin-left: 32px;
@media(max-width: 768px){
    width: 154px;
    height: 48px;
    left: 104px;
    top: 1140px;
    font-size: 14px;
    line-height: 24px;
    text-align: left;
    margin-left: 0px;
}
`

export const SetaStyle = styled.img`
position: relative;
bottom: -25%;
padding: 9px;
width: 6px;
height: 12px;
margin-left: clamp(25px, 50px, 70px);
@media(max-width: 768px) {
    left: 349px;
    top: 1165px;
    margin-left: 0px;
}
`

export const BalanceIconStyle = styled.img`

position: relative;
width: 48px;
height: 48px;
background: #242424;
border-radius: 4px;
padding: 15px;
@media(max-width: 768px){
    padding: 8px;
    left: 20px;
    top: 1140px;
`
export const Close5 = styled.img`
width: 50px;
height: 50px;
position: absolute;
top: 490px;
right: 260px;
cursor: pointer;

@media(max-width: 768px){
    width: 30px;
    height: 30px;
    top: 600px;
    right: 85px;
}`