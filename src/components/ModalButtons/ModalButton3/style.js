import styled from 'styled-components'


export const Text = styled.div`
position: absolute;
width: 151px;
height: 60px;
left: 940px;
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
    top: 967px;
    font-size: 14px;
    line-height: 24px;
    text-align: left;
}
`

export const SetaStyle = styled.img`
position: absolute;
left: 1130px;
right: 14.58%;
top: 777px;
bottom: -25%;
padding: 9px;
width: 6px;
height: 12px;
@media(max-width: 768px) {
    left: 349px;
    top: 973px;
}
`

export const HomeStyle = styled.img`

position: absolute;
width: 48px;
height: 48px;
left: 860px;
top: 749px;
background: #242424;
border-radius: 4px;
padding: 10px;
@media(max-width: 768px){
    padding: 8px;
    left: 20px;
    top: 955px;
`
export const Close3 = styled.img`
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
    right: 100px;
}`