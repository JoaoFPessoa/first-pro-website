import styled from "styled-components";

export const HButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 19px 32px;
position: absolute;
width: 216px;
height: 56px;
left: 111px;
top: 531px;
background: #FF8F01;
font-weight: 500;
font-size: 18px;
line-height: 18px;
border-radius: 4px;
border: black;
cursor: pointer;
@media (max-width: 768px) {
    width: 123px;
    height: 48px;
    top: 450px;
    left: 33px;
}


&:hover {
    background: #FF9E24;
}
`

export const PButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 19px 32px;
position: absolute;
width: 216px;
height: 56px;
left: 340px;
top: 531px;
background: none;
color: white;
font-weight: 500;
font-size: 18px;
line-height: 18px;
border-radius: 4px;
border: solid 1px grey;
cursor: pointer;
@media (max-width: 768px) {
    width: 173px;
    height: 48px;
    top: 450px;
    left: 170px;
}
`


export const HButton2 = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 19px 32px;
width: 216px;
height: 56px;
background: #FF8F01;
font-weight: 500;
font-size: 18px;
line-height: 18px;
border-radius: 4px;
margin-top: 40px;
margin-left: 64px;
cursor: pointer;
border: black;

&:hover {
    background: #FF9E24;
}

@media(max-width: 768px){
    padding: 17px 24px;
    width: 200px;
    height: 48px;
    margin-top: 32px;
    margin-left: 100px;
    font-size: 14px;
    line-height: 14px;
}
`
